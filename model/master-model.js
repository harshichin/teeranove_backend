const mongoose = require("mongoose");
const Schema = mongoose.Schema

const locationMasterSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    fullAddress: {
        type: String,
        required: true
    }
});
locationMasterSchema.set('timestamps', true);

const materialTypeMasterSchema = new mongoose.Schema({
    materialName: {
        type: String,
        required: true
    },
    materialCode: {
        type: String,
        required: true
    }
});
materialTypeMasterSchema.set('timestamps', true);

const locationMasterModel = mongoose.model('location master', locationMasterSchema);
const materialTypeMasterModel = mongoose.model('material type master', materialTypeMasterSchema);

module.exports = {
    locationMasterModel,
    materialTypeMasterModel
};