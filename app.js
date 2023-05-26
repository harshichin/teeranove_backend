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

//Database connection
require('./config/db');

app.use(cors("*"));


const user = require("./routes/user-router");
app.use("/user", user);

const client = require("./routes/client-router");
app.use("/client", client);

const email = require("./routes/email-router");
app.use("/api", email);

app.get("/", (req, res) => {
    res.send("TerraNova Backend");
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        error: true,
        message: "Internal Server Error",
        details: err,
    });
});

app.listen(port, () => {
    console.log(`App running on ${port}`);
    
});



function isObjectIdOrHexString() {

    const month = new Date().getMonth();
    let mth = ''
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
    if (month + 1 >= 0 && month + 1 <= 12) {
        mth = alphabet[month].substring(0, 3)
    } else {
        return 'Invalid month';
    }
    const currentDate = new Date();

    const previousClientId = "TNCLT23H1";
    // let lastPatient = previousClientId.splice(0, 8);
    // console.log(previousClientId);

    let str = "TNCLT23H1";

    // Extract the numeric portion
    let numericPart = str.match(/\d+/)[0]; // Extracts the first sequence of numbers
    console.log(numericPart);
    let incrementedNumericPart = String(Number(numericPart) + 1);

    // Pad the incremented numeric part with leading zeros if necessary
    let paddedNumericPart = incrementedNumericPart.padStart(numericPart.length, '0');

    // Combine the incremented numeric part with the remaining alphabetic characters
    let result = str.replace(/\d+/, paddedNumericPart);

    console.log(result); // Output: "TNCLT23H2"
    // let increasedNum = Number(previousClientId.replace(lastPatient, '')) + 1;
    // const currentYear = currentDate.getFullYear().toString().slice(-2);
    // let startID = "TNCLT".concat(currentYear, this.monthWord) // SC21H
    // for (let i = 0; i < 6 - increasedNum.toString().length; i++) {
    //     startID = startID + '0';
    // }
    // startID = startID + increasedNum.toString();
    // console.log(startID);

    // TNCLT23H00000001
    // "SC21H000001";
}