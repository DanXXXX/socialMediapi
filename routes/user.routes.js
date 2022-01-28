const  router  = require("express").Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

// authentification
router.post('/register', authController.signUp);

// voir tous les utilisateurs
router.get('/', userController.getAllUsers);

router.get('/:id', userController.userInfo)


module.exports = router;