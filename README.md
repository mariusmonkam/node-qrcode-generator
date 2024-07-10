# node-qrcode-generator

This npm package facilitates easy generation of QR codes from URLs and allows you to save them as PNG images. Additionally, it offers an option to generate HTML for displaying the QR code on a web page.

## Installation

Install the package via npm:

```bash
npm install node-qrcode-generator
```

## Usage

1. **Import the package:**

   ```javascript
   const QrGeneratorModule = require("node-qrcode-generator");
   ```

2. **Generate QR code:**

   Configure and use the package to generate QR codes and save them as images and/or generate HTML for display.

   ```javascript
   const qrGenerator = new QrGeneratorModule({
     link: "https://www.example.com",
     width: 300, // Customize width (optional)
     generateHtml: true, // Optional: Generate HTML
   });

   qrGenerator
     .generateQRCode()
     .then(() => {
       console.log("QR code generation completed!");
     })
     .catch((error) => {
       console.error("Error generating QR code:", error);
     });
   ```

## Options

- `link`: (Required) The URL to encode into the QR code.
- `width`: (Optional) Sets the width of the generated QR code image in pixels.
- `generateHtml`: (Optional) Set to `true` to generate an HTML file with the QR code image embedded.

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please refer to the CONTRIBUTING.md file for guidelines.

## Example

The provided code snippet demonstrates how to use the package to generate a QR code from a URL, save it as an image, and optionally create an HTML page for displaying it.

```

### Summary of Changes

- **Introduction**: Updated to reflect the current functionality of generating QR codes and optional HTML generation.
- **Usage**: Updated usage instructions to utilize the `QrGeneratorModule` class directly with simplified configuration.
- **Options**: Detailed the options available (`link`, `width`, `generateHtml`) for configuring QR code generation.
- **Example**: Provided a comprehensive example demonstrating package usage for generating and saving QR codes.

```
