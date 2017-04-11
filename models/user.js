const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our Modal
const userSchema = new Schema({
    email:  { type: String, unique: true },
    password: String
});

// Create the modal class
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;