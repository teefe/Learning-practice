const students = [
    {
        id: 1,
        name: "John",
        age: 21,
        course: "Software Engineering",
        score: 85,
        attendance: 90
    },

    {
        id: 2,
        name: "Sarah",
        age: 22,
        course: "Computer Science",
        score: 92,
        attendance: 95
    },

    {
        id: 3,
        name: "David",
        age: 20,
        course: "Information Technology",
        score: 68,
        attendance: 72
    },

    {
        id: 4,
        name: "Mary",
        age: 23,
        course: "Software Engineering",
        score: 77,
        attendance: 88
    }
];
function displayStudents(students) {
    for (const student of students){
        console.log(`${student.name} --> ${student.score}`);
    }
}
displayStudents(students);
