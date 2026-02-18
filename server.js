// Tuodaan tarvittavat työkalut
const express = require("express");
const converter = require("./converter");

// Luodaan sovellus
const app = express();

// Määritellään reitti (osoite), jota palvelin kuuntelee
app.get("/hex-to-rgb", (req, res) => {
  // Haetaan heksakoodi osoiteriviltä (esim. ?hex=ffffff)
  const hex = req.query.hex;

  // Tarkistetaan, että koodi on annettu
  if (!hex) {
    return res.status(400).json({ virhe: "Hex-koodi puuttuu osoitteesta" });
  }

  // Suoritetaan muunnos ja lähetetään vastaus
  try {
    const rgb = converter.hexToRgb(hex);
    res.json(rgb);
  } catch (e) {
    res.status(500).json({ virhe: "Muunnos epäonnistui" });
  }
});

// Kerrotaan palvelimelle, missä portissa sen pitää toimia
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Palvelin käynnissä osoitteessa http://localhost:${PORT}`);
});

// Viedään sovellus ulos, jotta testit voivat käyttää sitä
module.exports = app;
