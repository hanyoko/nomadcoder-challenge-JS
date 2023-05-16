const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// console.log(daysOfWeek[5]);
//array 안에 있는 텍스트를 불러오고 싶을 때, 배열의 순서를 []안에 적으면 출력된다.
//컴퓨터는 0부터 센다. 따라서 0,1,2,3,4,5 ... 로 배열의 순서가 적용된다.
//array 안에서 항목을 받아오기 / array에 항목 추가

//array에서 아이템 받아오기
console.log(daysOfWeek);

//array 안에 요일 더 추가하기
daysOfWeek.push("sun");
//push에서는 array에 하나를 더 추가하려고 할 때 사용

console.log(daysOfWeek);