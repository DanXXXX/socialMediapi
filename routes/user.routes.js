const  router  = require("express").Router();
const authController = require("../controllers/authController");


// authentification
router.post('/register', authController.signUp);

module.exports = router;