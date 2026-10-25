const student = {
    Name: "John",
    course: "Software Engineering",
    score: 85,
    grade: "A",
    Status: "Passed",
    attendance: 90
};

document.querySelector("#Name").textContent = student.Name;

document.querySelector("#course").textContent = student.course;
document.querySelector("#score").textContent = student.score;
document.querySelector("#grade").textContent = student.grade;
document.querySelector("#Status").textContent = student.Status;
document.querySelector("#Attend").textContent = student.attendance;