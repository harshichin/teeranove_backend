const {
    clientModel
} = require('../model/client-model');

// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

const getAllClient = async (req, res, next) => {
    try {
        const response = await clientModel.find();
        res.status(200).json({
            error: false,
            message: "Record Found",
            response,
        });
    } catch (err) {
        next(err.message);
    }
};

const getClient = async (req, res, next) => {
    try {
        let id = req.params.id
        const response = await clientModel.findById({
            _id: id,
        });
        res.status(200).json({
            error: false,
            message: "Record Found",
            response,
        });
    } catch (err) {
        next(err.message);
    }
};

const addClient = async (req, res, next) => {
    try {
        const {
            name,
            emailId,
            phoneNo,
            role,
            password
        } = req.body;
        const client = await clientModel.findOne({
            emailId,
        });
        if (!client) {
            const lastClient = await clientModel.findOne({}, {
                "clientId": 1,
                _id: 0
            }).sort({
                "clientId": -1
            });
            let clientId = ''
            if (lastClient) {
                const month = new Date().getMonth();
                const year = new Date().getFullYear().toString().slice(-2);
                let mth = ''
                const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
                if (month + 1 >= 0 && month + 1 <= 12) {
                    mth = alphabet[month].substring(0, 3)
                } else {
                    return 'Invalid month';
                }
                let str = lastClient.clientId;
                str = str.substring(8);
                let int = parseInt(str) + 1
                let startID = "TNCLT"
                clientId = startID + year + mth + int
            } else {
                const month = new Date().getMonth();
                const year = new Date().getFullYear().toString().slice(-2);
                let mth = ''
                const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
                if (month + 1 >= 0 && month + 1 <= 12) {
                    mth = alphabet[month].substring(0, 3)
                } else {
                    return 'Invalid month';
                }
                let int = 1
                let startID = "TNCLT"
                console.log(startID + year + mth + int);
                clientId = startID + year + mth + int
            }
            const response = await clientModel.insertMany([{
                clientId,
                name: name.charAt(0).toUpperCase() + name.slice(1),
                emailId,
                phoneNo,
                role: "CLIENT",
                password
            }, ]);
            res.status(200).json({
                error: false,
                message: "Registered Successfully",
                response,
            });
        } else {
            res.status(401).json({
                error: true,
                message: "Client already exists! Please login",
            });
        }
    } catch (err) {
        next(err.message);
    }
};


const deleteClient = async (req, res, next) => {
    try {
        await clientModel.deleteOne({
            _id: req.params.id,
        });
        res.status(200).json({
            error: false,
            message: "Client Deleted Successfully",
            _id: req.params.id,
        });
    } catch (err) {
        next(err);
    }
};


module.exports = {
    getAllClient,
    getClient,
    addClient,
    deleteClient
};