const baseCors = require("cors");

const whitelistOrigins = ["http://localhost:3000"];
const cors = baseCors({
  origin: function (origin, callback) {
    if (!origin || whitelistOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
});

module.exports = { cors };
