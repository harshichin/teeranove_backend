const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 3300;

app.use(express.urlencoded({
    extended: false
}));

app.use(express.json({
    limit: "50mb"
}));

// Database connection
require('./config/db');

app.use(cors("*"));

const user = require("./routes/user-router");
app.use("/user", user);

const client = require("./routes/client-router");
app.use("/client", client);

const email = require("./routes/email-router");
app.use("/api", email);

const master = require("./routes/master-router");
app.use("/master", master);

const load = require("./routes/load-router");
app.use("/load", load);

app.get("/", (req, res) => {
    res.send("TerraNova Backend Running");
});

app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).json({
        error: true,
        message: "Internal Server Error",
        details: err,
    });
});

app.listen(port, () => {

    console.log(`App running on ${port}`);
});