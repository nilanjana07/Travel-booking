const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const authMiddleware = require('../utils/authMiddleware');

router.post('/', authMiddleware, bookingController.createBooking);
router.get('/history', authMiddleware, bookingController.getBookingHistory);

module.exports = router;
