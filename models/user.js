const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs')

// Define our Modal
const userSchema = new Schema({
    email:  { type: String, unique: true },
    password: String
});

// On Save Hook, encrypt password
userSchema.pre('save', function (next) {
    const user = this;

    bcrypt.genSalt(10, function (err,salt) {
        if(err) {
            next(err);
        }

        bcrypt.hash(user.password, salt, null , function (err, hash) {
            if(err) {
                return next(err);
            }

            user.password = hash;
            next();
        })
    })
})

// Create the modal class
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;