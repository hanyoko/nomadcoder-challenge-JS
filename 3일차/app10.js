//if, else
const age = parseInt(prompt("How old are you ?"));

//console.log(isNaN(age));    //숫자는 false, 문자는 true
//isNaN은 boolean을 반환

// console.log(age, parseInt(age));

// console.log(typeof "15", typeof parseInt("15"));
//string number

// if(condition){  //condition 자리에는 true 또는 false만 가능하다.
//     //condition === true
// }else{
//     //condition === false
// }

// "lalalala"  = NaN
// 12


if(isNaN(age) || age < 0){
    console.log("Please write a real positive number");
}else if (age < 18) {
    console.log("You are too young.");
}else if (age >= 18 && age <= 50) { // && : AND. -> 둘 다 true여야 한다.
    console.log("You can drink.");
}//else if (age >= 18 || age <= 50) {   // || : OR -> 둘 중 하나만 true여도 된다.
//    console.log("You can drink")
//}
else if (age > 50 && age <= 80){
    console.log("You should exercise");
}else if (age > 80){
    console.log("You can do whatever you want.");
} else {
    console.log("You can't drink.");
}

//OR
// true || true === true
// false || true === true
// true || false === true
// false || false === false

//AND
// true && true === true
// false && true === false
// true && false === false
// false && false === false
