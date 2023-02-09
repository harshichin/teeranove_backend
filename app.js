const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require('nodemailer');
require("dotenv").config();

const port = process.env.PORT || 3300;

app.use(express.urlencoded({
    extended: false
}));

app.use(express.json({
    limit: "50mb"
}));

app.use(cors("*"));

app.get("/", (req, res) => {
	res.send("Website");
});

app.post("/api/submit-request",async (req, res, next) => {
    try {
        const {
            name,
            phone,
            email,
            message
        } = req.body
        // mail service
        var mailTransporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            service: 'gmail',
            auth: {
                user: process.env.Email,
                pass: process.env.Password
            }
        });
        var options = {
            from: process.env.Email,
            to: [email],
            subject: 'Website Notification',
            html: `Hello ${name}`
        };

        await mailTransporter.sendMail(options, async function(error, info) {
            if (error) {
                console.log(error);
                next(error)
            } else {
                res.status(200).json({
                    error: false,
                    message: "Email Sent",
                });
            }
        })
    } catch (err) {
        console.log("CATCH", err);
        next(err)
    }
});


app.use((err, req, res, next) => {
    res.status(500).json({
        error: true,
        message: "Internal Server Error",
        details: err,
    });
});

app.listen(port, () => {
    console.log(`App running on ${port}`);
});