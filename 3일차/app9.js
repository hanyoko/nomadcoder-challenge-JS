const age = 96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
    //function 안에서 return을 하면 calculateKrAge(age) 이것을 대체한다.
}
//return
//

const krAge = calculateKrAge(age);



console.log(krAge);