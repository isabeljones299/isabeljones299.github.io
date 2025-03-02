const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  endpoint: process.env.PAYPAL_CLIENT_ID,
  masterKey: process.env.PAYPAL_CLIENT_SECRET,
};