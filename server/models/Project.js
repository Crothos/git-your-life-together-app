const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const projectSchema = new Schema({
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
        maxlength: 70,
        trim: true
    },

    steps:[{
        type: Schema.Types.ObjectId,
        ref: 'Step'
    }],

    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
});

const Project = model('Project', projectSchema);

module.exports = Project;