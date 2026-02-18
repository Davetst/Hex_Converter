// converter.js
exports.hexToRgb = (hex) => {
  const cleanHex = hex.replace("#", "");

  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);

  // Tarkistetaan, onko jokin arvoista "Not a Number" (NaN)
  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    throw new Error("Invalid Hex format");
  }

  return { r, g, b };
};
