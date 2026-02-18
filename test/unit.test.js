const expect = require("chai").expect;
const converter = require("../converter");

describe("Värikonvertteri Unit Testit", () => {
  it("Muuntaa valkoisen (#ffffff) oikein", () => {
    const rgb = converter.hexToRgb("ffffff");
    expect(rgb).to.deep.equal({ r: 255, g: 255, b: 255 });
  });
});
