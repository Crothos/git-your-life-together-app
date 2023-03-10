const { Schema, model } = require('mongoose');

//const dateFormat = require('../utils/dateFormat');

const stepSchema = new Schema({
    title:{
        type: String,
        required: 'You must have a title',
        minlength: 1,
        maxlength: 70,
        trim: true
    },

    description:{
        required: 'You must have a description',
        minlength: 1,
        maxlength: 500,
        trim: true
    },


});

const Step = model('Step', stepSchema);

module.exports = Step;