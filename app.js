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
	res.send("TerraNova Backend");
});

app.post("/api/submit",async (req, res, next) => {
    try {
        const {
            fullName,
            emailId,
            phone,
            subject,
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
                user: "digitoonz2021@gmail.com",
                pass: "uqyhrdmuohkucfni"
            }
        });
        var options = {
            from: process.env.Email,
            to: [emailId],
            subject: 'Website Notification',
            html: `Hello ${fullName,
                emailId,
                phone,
                subject,
                message} `
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



app.post("/api/example",async (req, res, next) => {
    try {
        const {
            fullName,
            emailId,
            phone,
            subject,
            message
        } = req.body
        // mail service
        // var mailTransporter = nodemailer.createTransport({
        //     host: 'smtp.gmail.com',
        //     port: 587,
        //     secure: false,
        //     requireTLS: true,
        //     service: 'gmail',
        //     auth: {
        //         user: "digitoonz2021@gmail.com",
        //         pass: "uqyhrdmuohkucfni"
        //     }
        // });
        // var options = {
        //     from: process.env.Email,
        //     to: [emailId],
        //     subject: 'Website Notification',
        //     html: `Hello ${fullName,
        //         emailId,
        //         phone,
        //         subject,
        //         message} `
        // };

        // await mailTransporter.sendMail(options, async function(error, info) {
        //     if (error) {
        //         console.log(error);
        //         next(error)
        //     } else {
                res.status(200).json({
                    error: false,
                    message: "Email Sent",
                    response:res.body
                });
            // }
        // })
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