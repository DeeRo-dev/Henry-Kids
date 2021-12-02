
const { Router } = require("express");
const {
  createUser,
  getUserId,
  deleteUser,
  editUser,
  getUser,
  getType
} = require("../controllers/user");


const router = Router();


router.get("/", getUser);
router.post("/", createUser);
router.get("/:id", getUserId);
router.delete("/:id", deleteUser);
router.put("/:id", editUser);
router.get("/typo/:id",getType)

module.exports = router;
