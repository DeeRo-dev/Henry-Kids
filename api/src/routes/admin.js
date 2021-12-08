const {Router} = require("express");
const router = Router();
const { getUser, deleteUser, editUser } = require("../controllers/user");
const { getCat, addCate, deleteCategory, putCat } = require("../controllers/category");
const { deleteClass, editClass } = require("../controllers/clases")


// ALL USERS
router.get('/admin/users', (req,res,next)=>{
    getUser()
      .then(result => res.json(result))
      .catch(err => next(err));
  });

// USER DELETE
router.delete('/admin/users/:username',(req,res,next)=>{
    let { username } = req.params;
    deleteUser(username)
      .then(result => res.json(result))
      .catch(err => next(err));
  });

// EDIT USER
router.put('/admin/users/:username',(req,res,next)=>{
    let { username } = req.params;
    let updateInfo = req.body;  // {Name, Mail, type } = req.body
    editUser(username, updateInfo)
      .then(result => res.json(result))
      .catch(err => next(err));
  });

// ALL CATEGORIES
router.get('/admin/categories', (req,res,next)=>{
    getCat()
      .then(result => res.json(result))
      .catch(err => next(err));
  });

// ADD CATEGORY
router.post('/admin/category', (req,res,next)=>{
    let newCategory = req.body;
    addCate(newCategory)
      .then(result => res.json(result))
      .catch(err => next(err));
  });

// DELETE CATEGORY
router.delete('/admin/category/:category',(req,res,next)=>{
  let { category } = req.params;
  deleteCategory(category)
    .then(result => res.json(result))
    .catch(err => next(err));
});

// EDIT CATEGORY
router.put('/admin/category/:id',(req,res,next)=>{
  let { id } = req.params;
  let updateCategory = req.body;   // { name, technology, description, img_link } = req.body
  putCat(id, updateCategory)
    .then(result => res.json(result))
    .catch(err => next(err));
})

// ALL CLASS
router.get('/admin/class', (req,res,next)=>{
  getClass()
    .then(result => res.json(result))
    .catch(err => next(err));
});

// DELETE CLASS
router.delete('/admin/:id',(req,res,next)=> {
  let { id } = req.params;
  deleteClass(id)
    .then(result => res.json(result))
    .catch(err => next(err));
});

// EDIT CLASS
router.put('/admin/:id',(req,res,next)=>{
  let { id } = req.params;
  let updateClass = req.body;   // { name, technology, description, img_link } = req.body
  editClass(id, updateClass)
    .then(result => res.json(result))
    .catch(err => next(err));
})

 module.exports = router;

