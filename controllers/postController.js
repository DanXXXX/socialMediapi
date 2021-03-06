const PostModel = require('../models/postModel');
const UserModel = require('../models/user.model');
const ObjectID = require('mongoose').Types.ObjectId;

module.exports.readPost = (req, res) => {
    PostModel.find((err, docs) => {
        if (!err) {
            res.send(docs); 
        } else {
            console.error('Error to get data : ' + err);
        }
    })
}

module.exports.createPost = async (req, res) => {
    const newPost = new PostModel({
       posterId: req.body.posterId,
       message: req.body.message,
       video: req.body.video,
       likers: [],
       comments: [],
});

    try {
        const post = await newPost.save();
        return res.status(201).json(post);
    } catch (err) {
        return res.status(400).send(err)
    }
};

module.exports.updatePost = async (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send("ID unknown : " + req.params.id);
    }
    const updatedRecord = {
        message: req.body.message
    }

    PostModel.findByIdAndUpdate(
        req.params.id, {$set: updatedRecord},
        {new: true},
        (err, docs) => {
            if (!err) {
              res.send(docs)  
            } else {
                console.error("Update error : " + err);
            }
        }
    )
}

module.exports.deletePost = async (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send("ID unknown : " + req.params.id);
        
    }
    PostModel.findOneAndRemove(
        req.params.id,
        (err, docs) => {
            if (!err) {
                res.send(docs);
            } else {
                console.error("Delte error : " + err);
            }
        }
    )
}