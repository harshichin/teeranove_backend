const mongoose = require("mongoose");
const Schema = mongoose.Schema

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    clientId: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true,
        unique: true
    },
    phoneNo: {
        type: Number,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const clientModel = mongoose.model('client', clientSchema);
module.exports = {
    clientModel
};