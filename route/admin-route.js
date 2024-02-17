const express = require("express");
const adminController = require("../controllers/admin-controller");
const router = express.Router();

router.get('/user', adminController.getUser)

module.exports = router;