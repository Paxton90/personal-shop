import express from 'express';
import Stock from '../model/stockModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const stocks = await Stock.find();
        res.send(stocks)
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch stocks' })
    }
});

router.get('/:id', async (req, res) => {
    try {
        const stock = await Stock.findById(req.params.id)
        if (!stock) {
            return res.status(404).send({ error: 'Stock not found' })
        }
        res.send(stock)
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch stock' })
    }
});

router.post('/', async (req, res) => {
    try {
        const stock = new Stock(req.body)
        await stock.save()
        res.status(201).send(stock)
    } catch (error) {
        res.status(400).send({ error: 'Failed to create stock' })
    }
});

router.put('/:id', async (req, res) => {
    try {
        const stock = await Stock.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!stock) {
            return res.status(404).send({ error: 'Stock not found' })
        }
        res.send(stock)
    } catch (error) {
        res.status(400).send({ error: 'Failed to update stock' })
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const stock = await Stock.findByIdAndDelete(req.params.id)
        if (!stock) {
            return res.status(404).send({ error: 'Stock not found' })
        }
        res.send({ message: 'Stock deleted successfully' })
    } catch (error) {
        res.status(500).send({ error: 'Failed to delete stock' })
    }
})

export default router
