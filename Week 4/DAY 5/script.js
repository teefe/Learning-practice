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
function getGrade(){
    for (const student of students){
        if (student.score > 80){
            console.log(" Grade A");
        }else if (student.score > 70 && student.score < 79){
            console.log("Grade B");
        }else if (student.score > 60 && student.score < 69){
            console.log("Grade C");
        }else if (student.score > 50 && student.score < 59){
            console.log("Grade D");
        }else if (student.score < 50){
            console.log("Grade F");
        }
    }
}
displayStudents(students);
getGrade(students);