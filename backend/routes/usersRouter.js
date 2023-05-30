import express from "express"
import User from '../model/userModel.js'
import bcrypt from 'bcrypt'
import expressAsyncHandler from 'express-async-handler'
import { generateToken, userDataFilter } from "../utils.js"
import jwt from 'jsonwebtoken'

const router = express.Router()

router.post(
    '/login',
    expressAsyncHandler(async (req, res) => {
        const user = await User.findOne({ email: req.body.email })

        if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
            res.status(401).send({ message: 'Invalid email or password' })
            return
        }

        res.send({
            ...userDataFilter(user),
            token: generateToken(user)
        })
    })
)

router.post(
    '/login-with-token',
    expressAsyncHandler(async (req, res) => {
        const { token } = req.body;
        if (!token) {
            res.status(400).send({ message: 'Token is missing' })
            return
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById(decodedToken._id)
        if (!user) {
            res.status(400).send({ message: 'User not found' })
            return
        }

        res.send({
            ...userDataFilter(user)
        })
    })
)

router.post(
    '/signup',
    expressAsyncHandler(async (req, res) => {
        const checkUser = await User.findOne({
            email: req.body.email,
        })

        if(checkUser){
            res.status(400).send({ message: 'User email already taken' })
            return
        }

        const createdUsers = await User.create(
            {
                name: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
            }
        )
        createdUsers.save()

        res.status(201).json({ message: 'User created successfully' });
    })
)

export default router
