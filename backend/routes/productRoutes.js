import express from 'express'
import Product from '../models/productModel.js'

const productRouter = express.Router()

productRouter.get('/', async (req, res) => {
    try {
        const product = await Product.find({})
        res.json(product)
    } catch (err) {
        res.json(err.message)
    }
})

productRouter.get('/:id', async (req, res) => {
    try {
        const product = await Product.find({ _id: req.params.id })
        res.json(product[0])
    } catch (err) {
        res.json(err.message)
    }
})

export default productRouter
