const {Router} = require("express");
const router = Router();
const { getUser, deleteUser, editUser } = require("../controllers/user");

// GET ALL USERS
router.get('/users', (req,res,next)=>{
    getUser()
      .then(result => res.json(result))
      .catch(err => next(err));
  });

// USER DELETE
router.delete('/users/:username',(req,res,next)=>{
    let {username} = req.params;
    deleteUser(username)
      .then(result => res.json(result))
      .catch(err => next(err));
  });

// EDIT USER
router.put('/users/:username',(req,res,next)=>{
    let {username} = req.params;
    let updateInfo = req.body;  // {Name, Mail, Password, type } = req.body
    editUser(username,updateInfo)
      .then(result => res.json(result))
      .catch(err => next(err));
  });


module.exports = router;

