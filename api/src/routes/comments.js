const { Router } = require("express");
const { Class, Comment } = require("../db");
const { getComments} = require ("../controllers/comments.js")
const router = Router();

router.get('/', getComments);

module.exports = router;
