# Hex to RGB Converter (API & UI)

Projekti sisältää Node.js-pohjaisen REST API:n heksadesimaalivärien muuntamiseksi RGB-muotoon, HTML/JS-käyttöliittymän sekä kattavat yksikkö-, integraatio- ja käyttöliittymätestit.

## Projektin rakenne

- `server.js`: Express-palvelin ja rajapinnan reitit. Jakaa myös frontendin.
- `converter.js`: Muunnoslogiikka ja virheenkäsittely (heittää 500-virheen viallisesta datasta).
- `public/index.html`: Yksinkertainen selainkäyttöliittymä API:lle.
- `test/`: API:n yksikkö- ja integraatiotestit (Mocha & Chai).
- `test_frontend.py`: Käyttöliittymän automaatiotestit (Selenium & Pytest).
- `.gitignore`: Estää riippuvuuksien (`node_modules`, `venv`) päätymisen versionhallintaan.

---

## 1. Asennus ja käynnistys (Palvelin & UI)

Lataa projektin riippuvuudet ja käynnistä palvelin:

```bash
npm install
node server.js
```

- **`npm install`**: Lukee `package.json`-tiedoston ja lataa projektin tarvitsemat Node.js-kirjastot (Express, Mocha, Chai jne.) paikalliseen `node_modules`-kansioon.
- **`node server.js`**: Käynnistää taustapalvelimen porttiin 3000 ja tarjoilee `public`-kansion tiedostot selaimeen.

Sovellus on nyt käytettävissä selaimella osoitteessa: `http://localhost:3000`

---

## 2. API:n testaus (Backend)

Rajapinnan toimintalogiikka (statuskoodit 200, 400, 500 ja laskutoimitukset) on testattu Mocha-kehyksellä.

Aja testit terminaalissa:

```bash
npx mocha --exit
```

- **`npx mocha`**: Etsii ja suorittaa `test`-kansiossa olevat automaattiset JavaScript-testit.
- **`--exit`**: Pakottaa testiprosessin sulkeutumaan välittömästi testien päätyttyä. Tämä estää terminaalin jumiutumisen, jos palvelin jää "kuuntelemaan" taustalle (Active Handles).

---

## 3. Käyttöliittymän testaus (Frontend)

Selaimessa toimiva käyttöliittymä on testattu automaattisesti Selenium-kirjastolla. Tämä vaatii erillisen Python-virtuaaliympäristön.

Alusta ja aktivoi ympäristö projektin juuressa:

```bash
python3 -m venv venv
source venv/bin/activate
```

- **`python3 -m venv venv`**: Luo eristetyn hakemiston (`venv`) Python-paketeille. Tämä estää projektin kirjastoja menemästä sekaisin käyttöjärjestelmän muiden ohjelmien kanssa.
- **`source venv/bin/activate`**: Kytkee luodun virtuaaliympäristön päälle nykyisessä terminaali-ikkunassa.

Asenna testaustyökalut ja aja testit:

```bash
pip install pytest selenium webdriver-manager
pytest -s test_frontend.py
```

- **`pip install ...`**: Hakee ja asentaa Pythonin paketinhallinnasta käyttöliittymätestaukseen tarvittavat työkalut aktiiviseen virtuaaliympäristöön.
- **`pytest -s test_frontend.py`**: Suorittaa määritetyn Python-testitiedoston. `-s`-lippu ohjaa ohjelman tulostamaan mahdollisen konsolidatan (esim. print-komennot) suoraan terminaaliin testin ajon aikana.
