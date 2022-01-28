const mongoose = require('mongoose'); // Erase if already required
const { isEmail} = require('validator');
const bcrypt = require('bcrypt');

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema(
    {
        pseudo:{
            type: String,
            required:true,
            minLength: 3,
            maxLength: 55,
            unique:true,
            trimp: true,
        },
        email:{
            type: String,
            required:true,
            validate: [isEmail] ,
            lowercase: true,
            trim: true,
            unique:true,
        },
        password:{
            type: String,
            required:true,
            max: 1024,
            minLength: 6
        },
        picture:{
            type: String,
            default: './uploads/profil/random-user.png',
        },
        bio:{
            type: String,
            max: 1024,
        },
        followers: {
            type: String
        },
        following: {
            type: String
        },
        likes: {
            type: String
        },
    },
    {
        timestamps: true
    }
);

// on sale le mot de passe dans une fonction
userSchema.pre("save", async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

//Export the model
const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;