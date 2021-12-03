const {Router} = require("express");
const router = Router();
const { getUser, deleteUser, editUser } = require("../controllers/user");
const { getCat, addCate, deleteCategory, putCat } = require("../controllers/category");


// ALL USERS
router.get('/users', (req,res,next)=>{
    getUser()
      .then(result => res.json(result))
      .catch(err => next(err));
  });

// USER DELETE
router.delete('/users/:username',(req,res,next)=>{
    let { username } = req.params;
    deleteUser(username)
      .then(result => res.json(result))
      .catch(err => next(err));
  });

// EDIT USER
router.put('/users/:username',(req,res,next)=>{
    let { username } = req.params;
    let updateInfo = req.body;  // {Name, Mail, Password, type } = req.body
    editUser(username,updateInfo)
      .then(result => res.json(result))
      .catch(err => next(err));
  });

// ALL CATEGORIES
router.get('/categories', (req,res,next)=>{
    getCat()
      .then(result => res.json(result))
      .catch(err => next(err));
  });

// ADD CATEGORY
router.post('/category', (req,res,next)=>{
    let newCategory = req.body;
    addCate(newCategory)
      .then(result => res.json(result))
      .catch(err => next(err));
  });

// DELETE CATEGORY
router.delete('/category/:category',(req,res,next)=>{
  let { category } = req.params;
  deleteCategory(category)
    .then(result => res.json(result))
    .catch(err => next(err));
});

// EDIT CATEGORY
router.put('/category/:id',(req,res,next)=>{
  let { id } = req.params;
  let updateCategory = req.body;   // { name, technology, description, img_link } = req.body
  putCat(id, updateCategory)
    .then(result => res.json(result))
    .catch(err => next(err));
})


 module.exports = router;

