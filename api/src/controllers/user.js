const axios = require("axios");
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


module.exports = {
    createUser
   
};