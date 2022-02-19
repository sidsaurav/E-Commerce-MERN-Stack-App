import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

const importData = async () => {
    await connectDB()
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    const sampleProducts = products.map((product) => {
        return { ...product, user: adminUser }
    })

    await Product.insertMany(sampleProducts)

    console.log('Data Imported Successfully')
}

const destroyData = async () => {
    await connectDB()
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()
    console.log('Data Destroyed Successfully')
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}

// mongoose
//     .connect(process.env.MONGO_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         // useCreateIndex: true,
//         // useFindAndModify: true,
//     })
//     .then(console.log('Connected to mongoDB'))
//     .catch((err) => {
//         console.log(err)
//     })

// await User.insertMany(users)
