// Fetch and display teachers

    // Simulating backend data - to be replaced by actual API calls
const teachers = [
    { name: 'Dr. Alice Johnson', academicBackground: 'PhD in Computer Science', researchProjects: ['AI-based Systems', 'Blockchain Applications'], ratings: [4.5, 4.0, 4.8, 4.2] },
    { name: 'Dr. Bob Williams', academicBackground: 'PhD in Data Science', researchProjects: ['Big Data', 'Machine Learning'], ratings: [4.1, 4.3, 4.6, 4.0] },
    { name: 'Dr. Carol Lee', academicBackground: 'PhD in Software Engineering', researchProjects: ['Software Architecture', 'Cloud Computing'], ratings: [4.7, 4.2, 4.5, 4.8] }
];

// Function to populate teacher dropdown dynamically
function populateTeachers() {
    const teacherSelect = document.getElementById('teacher');
    
    teachers.forEach(teacher => {
        const option = document.createElement('option');
        option.value = teacher.name;
        option.textContent = teacher.name;
        teacherSelect.appendChild(option);
    });
}

// Event listener for teacher selection
document.getElementById('teacher').addEventListener('change', function() {
    const selectedTeacher = this.value;
    const teacherInfoDiv = document.getElementById('teacher-info');
    
    const teacher = teachers.find(t => t.name === selectedTeacher);
    
    if (teacher) {
        teacherInfoDiv.innerHTML = `
            <strong>Academic Background:</strong> ${teacher.academicBackground}<br>
            <strong>Research Projects:</strong> ${teacher.researchProjects.join(', ')}<br>
            <strong>Ratings (last 4 years):</strong> ${teacher.ratings.join(', ')}
        `;
    } else {
        teacherInfoDiv.textContent = 'Select a teacher to view their profile.';
    }
});

// Event listener for feedback submission
document.getElementById('teacher-selection-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const regNumber = document.getElementById('reg-number').value;
    const name = document.getElementById('name').value;
    const course = document.getElementById('course').value;
    const teacher = document.getElementById('teacher').value;
    const feedback = document.getElementById('feedback').value;
    
    if (teacher && feedback) {
        // Simulate backend submission (you would actually post this data to a backend API)
        console.log(`Register Number: ${regNumber}, Name: ${name}, Course: ${course}, Teacher: ${teacher}, Feedback: ${feedback}`);
        
        document.getElementById('confirmation-message').style.display = 'block';
        document.getElementById('confirmation-message').textContent = 'Feedback submitted successfully!';
        
        // Clear form fields
        document.getElementById('teacher-selection-form').reset();
        document.getElementById('teacher-info').textContent = 'Select a teacher to view their profile.';
    }
});

// Call function to populate teacher dropdown on page load
populateTeachers();
