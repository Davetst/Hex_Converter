// Tuodaan tarvittavat työkalut
const express = require("express");
const converter = require("./converter");

// Luodaan sovellus
const app = express();

// Määritellään reitti (osoite), jota palvelin kuuntelee
app.get("/hex-to-rgb", (req, res) => {
  const hex = req.query.hex;

  // 400 Bad Request: Käyttäjä unohti antaa hex-koodin
  if (!hex) {
    return res.status(400).json({ virhe: "Hex-koodi puuttuu" });
  }

  try {
    const rgb = converter.hexToRgb(hex);
    res.json(rgb);
  } catch (e) {
    // 500 Internal Server Error: Jotain odottamatonta hajosi palvelimella
    res.status(500).json({ virhe: "Palvelinvirhe muunnoksessa" });
  }
});

// Kerrotaan palvelimelle, missä portissa sen pitää toimia
if (require.main === module) {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Palvelin käynnissä osoitteessa http://localhost:${PORT}`);
  });
}

// Viedään sovellus ulos, jotta testit voivat käyttää sitä
module.exports = app;
