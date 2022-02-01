const  router  = require("express").Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

// authentification
router.post('/register', authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);

// voir tous les utilisateurs
router.get('/', userController.getAllUsers);
// voir un utilisateur
router.get('/:id', userController.userInfo);
//  update
router.put('/:id', userController.updateUser);
//  delete
router.delete('/:id', userController.deleteUser);
// follow
router.patch('/follow/:id', userController.follow);
// unfollow
router.patch('/unfollow/:id', userController.unfollow);

module.exports = router;