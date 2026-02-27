require("dotenv").config({ path: ".env" });
const mongoose = require("mongoose");

const connectMOngoDB = async function main() {
    try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to mongoDB");
    } catch(err) {
        console.log(err);
    }
};

module.exports = connectMOngoDB;