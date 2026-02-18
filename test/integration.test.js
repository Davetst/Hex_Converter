const request = require("supertest");
const app = require("../server");

describe("API Integraatiotestit", () => {
  it("Vastaa oikein reitissä /hex-to-rgb", async () => {
    await request(app)
      .get("/hex-to-rgb?hex=000000")
      .expect(200) // Odotetaan "OK" vastausta
      .expect("Content-Type", /json/); // Odotetaan JSON-vastausta
  });
});
