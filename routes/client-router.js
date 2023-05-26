const express = require('express');
const router = express.Router();

const clientController = require('../controllers/client-controller');

router.get('/get-all-client', clientController.getAllClient);
router.get('/get-client/:id', clientController.getClient);
router.post('/add-client', clientController.addClient);
router.delete('/delete-client/:id', clientController.deleteClient);

module.exports = router;