const {
    locationMasterModel,
    materialTypeMasterModel
} = require('../model/master-model');

const getAllLocation = async (req, res, next) => {
    try {
        const response = await locationMasterModel.find();
        res.status(200).json({
            error: false,
            message: "Record Found",
            response,
        });
    } catch (err) {
        next(err);
    }
};

const addLocation = async (req, res, next) => {
    try {
        const {
            companyName,
            location,
            fullAddress
        } = req.body;
        const locationData = await locationMasterModel.findOne({
            location,
        });
        if (!locationData) {
            const response = await locationMasterModel.insertMany([{
                companyName,
                location,
                fullAddress
            }, ]);
            res.status(200).json({
                error: false,
                message: "Location added Successfully",
                response,
            });
        } else {
            res.status(401).json({
                error: true,
                message: "Location Already Exist",
            });
        }
    } catch (err) {
        next(err);
    }
};

const editLocation = async (req, res, next) => {
    try {
        const {
            companyName,
            location,
            fullAddress
        } = req.body;
        await locationMasterModel.updateOne({
            _id: req.params.id,
        }, {
            $set: {
                companyName,
                location,
                fullAddress
            },
        });
        const response = await locationMasterModel.findOne({
            _id: req.params.id,
        });
        res.status(200).json({
            error: false,
            message: "Details Updated Successfully",
            _id: req.params.id,
            response,
        });
    } catch (err) {
        next(err);
    }
};

const deleteLocation = async (req, res, next) => {
    try {
        await locationMasterModel.deleteOne({
            _id: req.params.id,
        });
        const response = await locationMasterModel.find();
        res.status(200).json({
            error: false,
            message: "Location Deleted Successfully",
            response,
        });
    } catch (err) {
        next(err);
    }
};


// ----------------------------Material Type API's----------------------------
const getAllMaterialType = async (req, res, next) => {
    try {
        const response = await materialTypeMasterModel.find();
        res.status(200).json({
            error: false,
            message: "Record Found",
            response,
        });
    } catch (err) {
        next(err);
    }
};

const addMaterial = async (req, res, next) => {
    try {
        const {
            materialName,
            materialCode
        } = req.body;
        const materialData = await materialTypeMasterModel.findOne({
            materialCode,
        });
        if (!materialData) {
            const response = await materialTypeMasterModel.insertMany([{
                materialName,
                materialCode
            }, ]);
            res.status(200).json({
                error: false,
                message: "Material added Successfully",
                response,
            });
        } else {
            res.status(401).json({
                error: true,
                message: "Material Code Already Exist",
            });
        }
    } catch (err) {
        next(err);
    }
};

const editMaterial = async (req, res, next) => {
    try {
        const {
            materialName,
            materialCode
        } = req.body;
        await materialTypeMasterModel.updateOne({
            _id: req.params.id,
        }, {
            $set: {
                materialName,
                materialCode
            },
        });
        const response = await materialTypeMasterModel.findOne({
            _id: req.params.id,
        });
        res.status(200).json({
            error: false,
            message: "Details Updated Successfully",
            _id: req.params.id,
            response,
        });
    } catch (err) {
        next(err);
    }
};

const deleteMaterial = async (req, res, next) => {
    try {
        await materialTypeMasterModel.deleteOne({
            _id: req.params.id,
        });
        const response = await materialTypeMasterModel.find();
        res.status(200).json({
            error: false,
            message: "Material Data Deleted Successfully",
            response
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    // Locations
    getAllLocation,
    addLocation,
    editLocation,
    deleteLocation,


    // Material Type
    getAllMaterialType,
    addMaterial,
    editMaterial,
    deleteMaterial
};