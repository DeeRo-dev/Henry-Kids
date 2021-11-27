const { Router } = require("express");
const { createUser, getUserId, getUser } = require("../controllers/user");

const router = Router();

router.post("/", createUser);
router.get("/:id", getUserId);
router.get("/", getUser);


module.exports = router;
