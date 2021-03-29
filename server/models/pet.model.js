const mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');


const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is Required"],
        minLength: [3, "Name must be 3 characters or more."],
        unique: true,
        uniqueCaseInsensitive: true,
    },
    type: {
        type: String,
        required: [true, "Pet type is required"],
        minLength: [3, "Pet type must be 3 characters or more."],
    },
    description: {
        type: String,
        required: [true, "Pet description is required"],
        minLength: [3, "Description must be 3 characters or more."],
    },
    skill1: {
        type: String,
        required: [false]
    },
    skill2: {
        type: String,
        required: [false]
    },
    skill3: {
        type: String,
        required: [false]
    },
    likes: {
        type: Number,
        required: [false]
    }
}, { timestamps: true })

PetSchema.plugin(uniqueValidator, {message: 'Name is already taken.'});

const Pet = mongoose.model("pet", PetSchema);


module.exports = Pet;
    