# QR Code Generator

A simple web application built with Node.js and Express that allows users to generate QR codes from URLs.

## Features

- **URL to QR Code:** Convert any valid URL (starting with http/https) into a scannable QR code.
- **Instant Generation:** Generates and displays the QR code immediately after submission.
- **Downloadable:** Provides a download link for the generated QR code in PNG format.
- **History:** Saves the most recently generated URL to a local `URL.txt` file.

## Technologies Used

- **Backend:** Node.js, Express
- **QR Generation:** `qr-image`
- **Middleware:** `body-parser`
- **Frontend:** HTML5, CSS3, JavaScript

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Harshydv-me/QR-generator.git
   cd QR-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage

1. Enter a valid URL (e.g., `https://google.com`) in the input field.
2. Click the **Generate QR** button.
3. Your QR code will appear on the right side.
4. Click **Download PNG** to save the QR code to your device.

## License

This project is licensed under the ISC License - see the [package.json](package.json) file for details.
