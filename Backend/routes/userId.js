const express = require("express");
const { userId } = require("../controllers/userId")

const router = express.Router();

router.post("/api/connexion", userId);

module.exports = router;
