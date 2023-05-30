import express from 'express'
import Stock from '../model/stockModel.js'
import User from '../model/userModel.js'
import { stocks, users } from '../data.js'


const router = express.Router()

router.get('/', async (req, res) => {
    await Stock.deleteMany({})
    const createdStocks = await Stock.insertMany(stocks)
    await User.deleteMany({})
    const createdUsers = await User.insertMany(users)
    res.send({ createdStocks, createdUsers })
})

export default router