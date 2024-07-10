const qrcode = require("qrcode");
const fs = require("fs").promises;

class QrGeneratorModule {
  constructor(config = {}) {
    if (!config.link) {
      throw new Error("Missing required parameter: link");
    }

    this.config = {
      link: config.link,
      width: config.width || 300,
      generateHtml: config.generateHtml || false,
    };
  }

  async generateQRCode() {
    try {
      // Generate QR code data as a base64 string
      const qrCodeData = await qrcode.toDataURL(this.config.link, {
        width: this.config.width,
      });

      // Save QR code as an image file
      await this.saveImage(qrCodeData);

      // Generate HTML if specified
      if (this.config.generateHtml) {
        await this.saveHtml(qrCodeData);
      }

      console.log("QR code generation completed successfully!");
    } catch (error) {
      console.error("Failed to generate QR code:", error);
      throw error; // Propagate error for handling
    }
  }

  async saveImage(qrCodeData) {
    try {
      const base64Data = qrCodeData.replace(/^data:image\/png;base64,/, "");
      await fs.writeFile("qr-code.png", base64Data, "base64");
      console.log("QR code image saved successfully!");
    } catch (error) {
      console.error("Failed to save QR code image:", error);
      throw error; // Propagate error for handling
    }
  }

  async saveHtml(qrCodeData) {
    try {
      const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>QR Code Generator</title>
        </head>
        <body>
          <h1>Generated QR Code</h1>
          <img src="${qrCodeData}" alt="QR Code" />
        </body>
        </html>
      `;

      await fs.writeFile("qr-code.html", html);
      console.log("QR code HTML saved successfully!");
    } catch (error) {
      console.error("Failed to save QR code HTML:", error);
      throw error; // Propagate error for handling
    }
  }
}

module.exports = QrGeneratorModule;
