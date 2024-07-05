const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
  const { bookingDetails } = req.body;
  try {
    const booking = new Booking({ user: req.user.id, bookingDetails });
    await booking.save();
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getBookingHistory = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
