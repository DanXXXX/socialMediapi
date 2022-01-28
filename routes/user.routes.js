const  router  = require("express").Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

// authentification
router.post('/register', authController.signUp);

// voir tous les utilisateurs
router.get('/', userController.getAllUsers);
// voir un utilisateur
router.get('/:id', userController.userInfo);
//  update
router.put('/:id', userController.updateUser);
//  delete
router.delete('/:id', userController.deleteUser);

module.exports = router;