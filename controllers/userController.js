const UserModel = require("../models/user.model");
const ObjectId = require('mongoose').Types.ObjectId;

module.exports.getAllUsers = async (req, res) => {
    const users = await UserModel.find().select('-password');
    res.status(200).json(users);
}

module.exports.userInfo = (req, res) => {
    console.log(req.params);
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send('ID unknom : ' + req.params.id)
    }

    UserModel.findById(req.params.id, (err, docs) => {
        if (!err) {
        res.send(docs); 
        } else {
        console.error('ID unknom : ' + err); 
        }
    }).select('-password');
}
