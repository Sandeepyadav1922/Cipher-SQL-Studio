require("dotenv").config({ path: ".env" });
const mongoose = require("mongoose");
const Assignment = require("../models/assignment.js");
const sampleData = require("./data.js");

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
};

main()
.then(() => {
    console.log("connected to mongoDB");
})
.catch((err) => {
    console.log(err);
});

const add = async () => {
    await Assignment.deleteMany({});
    await Assignment.insertMany(sampleData);
    console.log("Data is added successfully");
};

add();