const mongoose = require('mongoose');

const teacherSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    academicBackground: {
        type: String,
        required: true,
    },
    researchProjects: [String],
    patents: [String],
    ratings: [Number],
});

const Teacher = mongoose.model('Teacher', teacherSchema);
module.exports = Teacher;
