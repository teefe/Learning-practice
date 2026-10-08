
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
   }
   else if (student1.score >= 90 ){
    return `${student1.name} --> ${student1.score} --> Outstanding`
   }
}
for(let i=0;i<=3;i++){
   console.log(getGrade(students,i));
}