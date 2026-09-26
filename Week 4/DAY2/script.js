console.log("Day 2 Challenge 1, Age Check");
const age = "28"
if (age > 18){
    console.log("You can Register");
}else{
    console.log("You are too young to register");
}

console.log("Day 2 Challenge 2, Login Check");
const username = "Derrick";
const password = "123456";
if (username === "Derrick" && password === "123456"){
    console.log("Login successfull.");
}else{
    console.log("Invalid credentials");
}

console.log("Challenge 3, Study status");
const studyHours = 1;
if (studyHours >= 5)
    {
    console.log("Excellent study day");
}else if (studyHours >= 3 && studyHours <= 4 )
    {
    console.log("Good study day");
}else if(studyHours >= 1 && studyHours <= 2)
    {
    console.log("Keep improving");
}else
    {
        console.log("You need to focus");
}