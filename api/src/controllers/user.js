const { User } = require("../db.js");

async function createUser(req, res, next) {
  const { firstName, lastName, userName, type, photo, email, password } =
    req.body;

  try {
    const user = await User.create({
      firstName,
      lastName,
      userName,
      type,
      photo,
      email,
      password,
    });

    const newUser = await User.findOne({ where: { userName } });

    return res.send(newUser);
  } catch {
    (err) => err(next);
  }
}

async function getUserId(req,res,next){
  try {
    const { id } = req.params;
    const userDetail = await User.findAll({
      where: {
        id: id,
      },
    });
    res.send(userDetail);
  } catch (error) {
    next(error);
  }
}

module.exports = {
    createUser,
    getUserId,
   
};