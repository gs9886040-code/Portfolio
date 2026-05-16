const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// dotenv config
dotenv.config();

// rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());



// routes
// Routes removed as email functionality moved to frontend EmailJS

// port
const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, () => {
  console.log(`Server Running on PORT ${PORT}`);
});
