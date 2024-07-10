// Helper function to be placed in a separate file (utils/validation.js)
const urlValidator = require("url-validator");

function isValidUrl(link) {
  return urlValidator(link); // Adjust based on correct usage
}

module.exports = isValidUrl;
