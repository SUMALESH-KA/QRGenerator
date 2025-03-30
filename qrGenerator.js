import inquirer from "inquirer"; // Use the default export
import qr from "qr-image"; // Use the default export
import fs from "fs"; // Import fs for file operations

inquirer
  .prompt([{ message: "Type the URL", name: "URL" }])
  .then((answers) => {
    const url = answers.URL; // Access the URL property from answers
    const qr_png = qr.image(url, { type: "png" }); // Generate QR code for the URL in PNG format
    qr_png.pipe(fs.createWriteStream("qr_code.png")); // Save the QR code as a PNG file
    console.log("QR code generated and saved as qr_code.png");
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment");
    } else {
      console.error("An error occurred:", error);
    }
  });