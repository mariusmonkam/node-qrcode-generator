const qrcode = require("qrcode");
const isValidUrl = require("../utils/validation");

class QrGenerator {
  async generate(link, options = {}) {
    const defaultOptions = {
      size: 4, // Default size in modules (units)
      colorDark: "black",
      colorLight: "white",
      errorCorrectionLevel: "H", // Highest error correction
    };

    const mergedOptions = { ...defaultOptions, ...options };

    if (!isValidUrl(link)) {
      throw new Error("Invalid URL provided");
    }

    try {
      const qrCodeData = await qrcode.toBuffer(link, mergedOptions);

      if (!Buffer.isBuffer(qrCodeData)) {
        throw new Error("QR code generation did not return a buffer");
      }

      // Assuming you need to convert buffer to string
      const qrCodeString = qrCodeData.toString("base64");

      // Now you can perform operations like replace on qrCodeString
      const processedData = qrCodeString.replace("somePattern", "replacement");

      return processedData;
    } catch (error) {
      console.error("Failed to generate QR code:", error);
      throw new Error("Failed to generate QR code");
    }
  }
}

module.exports = QrGenerator;
