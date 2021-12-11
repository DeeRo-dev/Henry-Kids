const { Router } = require("express");
const { createComment, deleteComment, editComment} = require("../controllers/comments.js");
const router = Router();


router.post("/", createComment);
router.delete("/:id", deleteComment);
router.put("/:id", editComment);


module.exports = router;
