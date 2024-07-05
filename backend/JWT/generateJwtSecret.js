const crypto = require('crypto');

// Generate a random string for JWT secret token
const generateJwtSecret = () => {
  return crypto.randomBytes(32).toString('hex');
};

// Output the generated JWT secret token
console.log(generateJwtSecret());
