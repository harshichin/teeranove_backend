const express = require('express');
const router = express.Router();

const masterController = require('../controllers/master-controller');

// ---------------------- Location Route API ----------------------
router.get('/get-all-location', masterController.getAllLocation);
router.post('/add-location', masterController.addLocation);
router.put('/edit-location/:id', masterController.editLocation);
router.delete('/delete-location/:id', masterController.deleteLocation);


// ---------------------- Location Route API ----------------------
router.get('/get-all-material', masterController.getAllMaterialType);
router.post('/add-material', masterController.addMaterial);
router.put('/edit-material/:id', masterController.editMaterial);
router.delete('/delete-material/:id', masterController.deleteMaterial);

module.exports = router;