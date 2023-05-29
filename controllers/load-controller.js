const {
    loadModel
} = require('../model/load-model');

const getAllLoads = async (req, res, next) => {
    try {
        const response = await loadModel.find();
        res.status(200).json({
            error: false,
            message: "Record Found",
            response,
        });
    } catch (err) {
        next(err);
    }
};

const createLoad = async (req, res, next) => {
    try {
        const {
            client,
            pickUpLocation,
            pickUpDate,
            materialCode,
            dropLocation,
            quantity,
            clientPartnerName,
            loadNumber
        } = req.body;
            const response = await loadModel.insertMany([{
                client,
                pickUpLocation,
                pickUpDate,
                materialCode,
                dropLocation,
                quantity,
                clientPartnerName,
                loadNumber
            }, ]);
            res.status(200).json({
                error: false,
                message: "Load Created added Successfully",
                response,
            });
    } catch (err) {
        next(err);
    }
};

const deleteLoad = async (req, res, next) => {
    try {
        await loadModel.deleteOne({
            _id: req.params.id,
        });
        res.status(200).json({
            error: false,
            message: "Load Deleted Successfully",
            _id: req.params.id,
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllLoads,
    createLoad,
    deleteLoad,
};