const express = require("express");
const converter = require("./converter");
const app = express();

app.get("/hex-to-rgb", (req, res) => {
  const hex = req.query.hex; // Haetaan hex-koodi osoiteriviltä
  if (!hex) return res.status(400).send("Hex-koodi puuttuu!");

  const rgb = converter.hexToRgb(hex);
  res.json(rgb); // Vastataan JSON-muodossa
});

module.exports = app; // Viedään app testausta varten
if (require.main === module) {
  app.listen(3000, () => console.log("Palvelin käynnissä portissa 3000"));
}
