const mongoose = require("mongoose");
const Schema = mongoose.Schema

const loadSchema = new mongoose.Schema({
    client: {
        type: String,
        required: true
    },
    pickUpLocation: {
        type: String,
        required: true
    },
    pickUpDate: {
        type: String,
        required: true
    },
    materialCode: {
        type: String,
        required: true
    },
    dropLocation: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    clientPartnerName: {
        type: String,
        required: true
    },
    loadNumber: {
        type: String,
        required: true
    },
});
loadSchema.set('timestamps', true);

const loadModel = mongoose.model('load', loadSchema);
module.exports = {
    loadModel
};