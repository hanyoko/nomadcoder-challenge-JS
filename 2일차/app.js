// const a = 5;
// const b = 2;
// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// but, const가 없다면
//  console.log(5 + 2);
//  console.log(5 * 2);
//  console.log(5 / 2);
// 숫자를 변경할 때 6번을 바꿔야한다.
// const 설정을 통해 한번에 const에 담긴 값만 변경하면 따로 변경하지않아도 된다.

const a = 5;
const b = 2;
let myName = "yohan";
 console.log(a + b);
 console.log(a * b);
 console.log(a / b);
 console.log("hello" + myName);

 myName = "yohanko";
 //여기서부터 myName은  yohan이 아니라 yohanko로 변경된다.
 //let을 사용하면 저장된 veriable을 변경할 수 있다는 말 !
 //하지만, const를 사용한다면 아래에서 저장된 값을 변경할 수 없다 ! 그것이 차이점 !
 //이를 해석하면, 여기서부터 myName의 값은 변경되었구나 라고 해석가능
 //variable을 업데이트 !
 
 console.log("your new name is " + myName);

//그러면 let만 사용할까 ? 아니면 const를 사용해야할까?
//보통의 프로그래머들은 const를 사용하지만 변수를 업데이트 하고 싶을 때 let을 사용한다.
//기본적으로는 cosnt를 사용, 필요할 때는 let을 사용한다고 기억 !

var c = 1;
var d = 9;

//처음에는 var을 사용했지만, 값을 보호받지 못해서 const와 let이 생기게 되었다.
//물론, var을 사용하는 것은 출력에 문제가 되지 않지만 새롭고 더 나은 것을 따른 것이 더 좋다 !

//규칙 : 기본적으로 const를 쓰고 필요할 때만 let을 쓰되, var은 쓰지 말 것
//=> 항상 const, 가끔 let, Never Use var