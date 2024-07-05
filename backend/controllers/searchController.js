const Amadeus = require('amadeus');
const keys = require('../config/keys');

const amadeus = new Amadeus({
  clientId: keys.amadeus.clientId,
  clientSecret: keys.amadeus.clientSecret
});

exports.searchFlights = async (req, res) => {
  const { origin, destination, departureDate } = req.query;
  try {
    const response = await amadeus.shopping.flightOffersSearch.get({
      originLocationCode: origin,
      destinationLocationCode: destination,
      departureDate,
      adults: '1'
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
