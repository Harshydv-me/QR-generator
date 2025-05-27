import express from "express";
import qr from "qr-image";
import fs from "fs";
import path from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

// Required to get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.post("/generate", (req, res) => {
  const url = req.body.url;

  if (!url || !url.startsWith("http")) {
    return res.status(400).send("Invalid URL");
  }

  // Save URL to text file
  fs.writeFileSync("URL.txt", url);

  // Generate QR code
  const qr_png = qr.image(url, { type: "png" });
  const filePath = path.join(__dirname, "public", "qr_img.png");
  const stream = fs.createWriteStream(filePath);

  qr_png.pipe(stream);

  stream.on("finish", () => {
    res.redirect("/?generated=true");
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
