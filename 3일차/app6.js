// const days = [1, 2, false, true, null, undefined, "text", me];
// array 안에 데이터 담기

const toBuy = ["potato", "tomato", "pizza"];

console.log(toBuy); //(3) ['potato', 'tomato', 'pizza']
toBuy[2] = "water"; //[2] 배열의 값 변경하기
console.log(toBuy); //(3) ['potato', 'tomato', 'water']
toBuy.push("meat"); //배열에 meat 추가하기
console.log(toBuy);