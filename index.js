const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const connection = require('./config/db')

const userRouter = require('./Routes/user.route')
const productRouter = require('./Routes/specialProduct.route')
const trendingNowProducts = require('./Routes/trendingNowRoute')
const newProductRouter = require('./Routes/newProduct.route')
const menProductRouter = require('./Routes/menProduct.route')
const womenProductRouter = require('./Routes/womenProduct.route')
const kidsProductRouter = require('./Routes/kidsProduct.route')
const newArrivalsRoutes = require("./Routes/newArrive.route")
const app = express()

app.use(cors())
app.use(express.json())

app.use("/user", userRouter);
app.use('/api/special_products', productRouter)
app.use('/api/trending_now', trendingNowProducts)
app.use('/api/new_products', newProductRouter)
app.use('/api/mens_products', menProductRouter)
app.use("/api/womens_products", womenProductRouter)
app.use("/api/kids_products", kidsProductRouter)
app.use('/api/new_arrivals', newArrivalsRoutes)
const PORT = process.env.PORT || 3000;

app.post("/", (req, res) => {
    res.send("server is started");
});

app.listen(PORT, async () => {
    try {
        await connection;
        console.log(`Server is connected with MongoDB`);
    } catch (error) {
        console.log(error);
    }
});
