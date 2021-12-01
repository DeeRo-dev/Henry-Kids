
const { Router } = require("express");
const {
  createUser,
  getUserId,
  deleteUser,
  editUser,
  getUser,
} = require("../controllers/user");
// const { Router } = require("express");
// const { createUser, getUserId, getUser } = require("../controllers/user");

const router = Router();


router.get("/", getUser);
router.post("/", createUser);
router.get("/:id", getUserId);
router.delete("/:id", deleteUser);
router.put("/:id", editUser);

module.exports = router;
