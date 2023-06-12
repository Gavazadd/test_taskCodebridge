require('dotenv').config()
const express = require('express')
const sequelize = require('./config/db')
const cors = require('cors')
const router = require('./routes/index')
const path = require('path')
// const errorMiddleware = require('./middlewares/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 5000

const app = express()
// app.use(cookieParser());
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use('/api',router)
// app.use(errorMiddleware)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server has been started on PORT ${PORT}`))
    }catch (e){
        console.log(e)
    }
}

start()