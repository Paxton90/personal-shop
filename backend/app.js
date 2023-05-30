import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import seedRouter from './routes/seedRouter.js'
import stocksRouter from './routes/stocksRouter.js'
import usersRouter from './routes/usersRouter.js'


dotenv.config()

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("MongoDB connected")
}).catch((err) => {
    console.log(err.message)
})

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/', (req, res) => {
    res.send("Personal Shop API Route")
})

app.use('/api/seed', seedRouter)
app.use('/api/stocks', stocksRouter)
app.use('/api/users', usersRouter)

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message })
})

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`)
})