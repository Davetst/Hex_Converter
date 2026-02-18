# Hex-to-RGB converter (REST API)

Tämä on node.js-pohjainen REST API, joka muuntaa heksadesimaalivärit (esim. #ffffff) RGB-muotoon.

## Ohjeet

1. Aja `npm install`
2. Käynnistä palvelin: `node server.js`
3. Testaa: http://localhost:3000/hex-to-rgb?hex=ffffff

## Testit

Testit ajetaan komennolla `npx mocha --exit`.

## Tiedostot

- `server.js` (API ja reitit)
- `converter.js` (laskenta)
- `test/` (yksikkö- ja integraatiotestit)
