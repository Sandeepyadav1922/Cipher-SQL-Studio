const express = require("express");
const app = express();
const cors = require("cors");
const connectMongoDB = require("./config/mongoose.js");
const assignmentRouter = require("./routes/assignment");
const queryRouter = require("./routes/query");
const ExpressError = require("./utils/ExpressError");

app.use(cors("http://localhost:5173/"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectMongoDB();

app.get("/", (req, res) => {
    res.send("server is working");
});

app.use("/assignments", assignmentRouter);
app.use("/", queryRouter);

app.use("/", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
})

app.use((err, req, res, next) => {
    let { status=500 , message="Something wrong in DB"} = err;
    res.status(status).json({message: message});
})

app.listen(5000, (req, res) => {
    console.log("Server is listening on port 5000");
})