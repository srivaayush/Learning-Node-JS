var nam = "Max";
var age = 29;
var hasHobby = true;
const hobbies=['ches','ab','abc'];
const sumarise= (userName, userAge, userHasHobby)=> {
  return (
    "Name is " +
    userName +
    ",age is" +
    userAge +
    "and user has hobbies" +
    userHasHobby
  );
}

console.log(sumarise(nam, age, hasHobby));
