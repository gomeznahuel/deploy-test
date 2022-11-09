const { Router } = require("express");
const { welcomeMessage } = require("../controllers/welcome.controller");
const router = Router();

router.get("/", welcomeMessage);

module.exports = router;
