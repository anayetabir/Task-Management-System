const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("MongoDB connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbConnection;