const Teacher = require('../models/Teacher');

// Get all teachers
const getAllTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find();
        res.json(teachers);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Add a new teacher
const addTeacher = async (req, res) => {
    try {
        const { name, academicBackground, researchProjects, patents, ratings } = req.body;
        const newTeacher = new Teacher({
            name,
            academicBackground,
            researchProjects,
            patents,
            ratings,
        });
        const savedTeacher = await newTeacher.save();
        res.status(201).json(savedTeacher);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { getAllTeachers, addTeacher };
