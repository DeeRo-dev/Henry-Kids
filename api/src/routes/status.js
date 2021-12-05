const { Router } = require("express");
const {createStatus} = require("../controllers/status.js");
const router = Router();


router.get("/", createStatus);


module.exports = router;