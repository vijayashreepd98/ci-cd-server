const mongoose = require("mongoose");
const { MONGO_URL } = require("./config")

const connectDb = async () => {
    const conn = await mongoose.connect(MONGO_URL,
        {
            useNewUrlParser: true,

        });
    console.log("connected successfully")
}


module.exports = connectDb;