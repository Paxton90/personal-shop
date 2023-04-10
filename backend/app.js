import express from 'express'

const app = express()

app.get('/api/products', (req, res) => {
    res.send("hi")
})

const port = process.env.PORT || 5000
app.listen(port, ()=> {
    console.log(`serve at http://localhost:${port}`)
})