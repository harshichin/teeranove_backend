const express = require('express');
const router = express.Router();

const loadController = require('../controllers/load-controller');

router.get('/get-all-load', loadController.getAllLoads);
router.post('/create-load', loadController.createLoad);
router.delete('/delete-load/:id', loadController.deleteLoad);

module.exports = router;