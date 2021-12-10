const { Class, User, Comment } = require("../db");
const Sequelize = require("sequelize");

async function createComment(req, res, next) {
  const { name, classId, userId } = req.body;
  try {
    const comment = await Comment.create({ name });
    await comment.setClass(parseInt(classId));
    await comment.setUser(userId);
    const verifiedComment = await Comment.findOne({ where: { name } });

    res.send(verifiedComment);
  } catch {
    (err) => next(err);
  }
}

async function getComments(req, res, next) {
  let result;
  try {
    const { id } = req.body;
    const electedClass = await Class.findOne({ where: { id } });
    if (!electedClass.comments.length) {
      result = "Esta clase no ha sido comentada todavía.";
    } else {
      result = electedClass.comments.map((item) => {
        return {
          id: item.id,
          name: item.name,
        };
      });
      res.send(result);
    }
  } catch {
    (err) => next(err);
  }
}

async function deleteComment(req, res, next) {
  try {
    const removeComment = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send("Comment was successfully removed");
  } catch (error) {
    return res.status(400).send({ error: "Something went wrong..." });
  }
}

module.exports = {
  createComment,
  getComments,
  deleteComment,
};
