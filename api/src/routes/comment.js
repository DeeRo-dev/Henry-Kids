const { Router } = require("express");
const { createComment, deleteComment} = require("../controllers/comments.js");
const router = Router();


router.post("/", createComment);
router.delete("/:id", deleteComment);


module.exports = router;
