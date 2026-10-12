
 const students = [
    {
        name: "Derrick",
        score: 84
    },
    {
        name: "Sarah",
        score: 92
    },
    {
        name: "John",
        score: 67
    },
    {
        name: "Mary",
        score: 45
    }
];
function getGrade(student,position){
   let student1 = student[position];
   if (student1.score >= 80 && student1.score < 90){
        return `${student1.name} --> ${student1.score} --> Excellent`;
   }else if (student1.score >= 90 ){
        return `${student1.name} --> ${student1.score} --> Outstanding`
   }else if(student1.score >= 60 && student1.score < 70){
        return `${student1.name} --> ${student1.score} --> Good`
   }else if(student1.score < 60){
        return`${student1.name} --> ${student1.score} --> Needs Improvement`
   }
}
for(let i=0; i<=students.length-1; i++){
   console.log(getGrade(students,i));
}