const express = require("express");
const router = express.Router()
const adminAuthorized = require("../middlewares/adminAuthorized")
const {admin} = require("../controllers/admin");

router.get("/admin", adminAuthorized , admin);

module.exports = router
