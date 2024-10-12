const express = require('express');
const router = express.Router();
const plateController = require('../controllers/plateController');

router.post('/plates', plateController.addPlate);
router.get('/plates', plateController.getPlates);
router.put('/plates/:id', plateController.updatePlate);
router.delete('/plates/:id', plateController.deletePlate);

module.exports = router;  // Burası doğru şekilde olmalı
