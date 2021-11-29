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
    res.status(200).send(newUser);
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
async function getUser(req,res,next){
  if (req.query.title) {
    return User.findAll({
      attributes: ["id", "firstName", "lastName", "userName","type","photo","email","password"],
      where: {
        title: {
          [Op.iLike]: `%${req.query.title}%`,
        },
      },
    }).then((User) => {
      if (User.length === 0) {
        return res.send("Not class found");
      }
      res.send(User);
    });
  } else {
    return User.findAll({
      attributes: ["id", "firstName", "lastName", "userName","type","photo","email","password"],
    }).then((User) => {
      res.send(User);
    });
  }
}
module.exports = {
    createUser,
    getUserId,
    getUser
   
};