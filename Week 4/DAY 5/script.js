const students = [
    {
        id: 1,
        name: "John",
        age: 21,
        course: "Software Engineering",
        score: 85,
        attendance: "90%"
    },

    {
        id: 2,
        name: "Sarah",
        age: 22,
        course: "Computer Science",
        score: 92,
        attendance: "95%"
    },

    {
        id: 3,
        name: "David",
        age: 20,
        course: "Information Technology",
        score: 68,
        attendance: "72%"
    },

    {
        id: 4,
        name: "Mary",
        age: 23,
        course: "Software Engineering",
        score: 77,
        attendance: "88%"
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
            student.grade ="A";
        }else if (student.score > 70 && student.score < 79){
            student.grade ="B";
        }else if (student.score > 60 && student.score < 69){
            student.grade ="C";
        }else if (student.score > 50 && student.score < 59){
            student.grade ="D";
        }else if (student.score < 50){
            student.grade ="F";
        }
    }
}
function genereateStudentReport(student){
    for (const student of students){
       for (const [key,value] of Object.entries(student)){
            console.log(`${key} : ${value}`);
       }
    }
}
function findStudentById(students,id){
    for (const student of students){
        for (const [key,value] of Object.entries(student)){
            if (value === id){
                return student
            }
        }
    }
}

//displayStudents(students);
getGrade(students);
// genereateStudentReport(students);
console.log(findStudentById(students,3));