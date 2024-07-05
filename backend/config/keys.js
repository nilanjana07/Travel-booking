module.exports = {
    mongoURI: 'mongodb://localhost:27017/travelbooking',
    jwtSecret: 'de51cc43e3ecc2c8585c668cb69a8e6f2b00c8e70e78a2acf7addeff9e9e2923',
    amadeus: {
      clientId: process.env.AMADEUS_CLIENT_ID,
      clientSecret: process.env.AMADEUS_CLIENT_SECRET
    }
  };
  