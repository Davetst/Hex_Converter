const request = require("supertest");
const app = require("../server");
const expect = require("chai").expect;

describe("API Integraatiotestit (Hex to RGB)", () => {
  // 1. TESTI: ONNISTUNUT MUUNNOS
  it("Pitäisi palauttaa 200 OK ja oikeat RGB-arvot vihreälle (#00ff00)", async () => {
    const response = await request(app)
      .get("/hex-to-rgb?hex=00ff00")
      .expect(200)
      .expect("Content-Type", /json/);

    // Tarkistetaan, että lasku meni oikein
    expect(response.body).to.deep.equal({ r: 0, g: 255, b: 0 });
  });

  // 2. TESTI: PUUTTUVA PARAMETRI (400)
  it("Pitäisi palauttaa 400, jos hex-parametri puuttuu osoitteesta", async () => {
    const response = await request(app)
      .get("/hex-to-rgb") // Ei ?hex= kohtaa ollenkaan
      .expect(400);

    expect(response.body.virhe).to.equal("Hex-koodi puuttuu");
  });

  // 3. TESTI: VIALLINEN SYÖTE (500)
  it("Pitäisi palauttaa 500, jos heksakoodi on virheellisessä muodossa", async () => {
    const response = await request(app)
      .get("/hex-to-rgb?hex=tämäeioleväri")
      .expect(500);

    expect(response.body.virhe).to.equal("Palvelinvirhe muunnoksessa");
  });
});
