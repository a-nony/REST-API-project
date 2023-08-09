require('dotenv').config()
const express = require('express')
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log('Connected To mongo')
}).catch((err) => {
    console.log('Oh no! mongo connection error')
    console.log(err)

})

app.use(express.json())

const subscriberRouter = require('./routes/subscribers');

app.use('/subscribers', subscriberRouter)


app.listen(3000, () => console.log('server has started'))