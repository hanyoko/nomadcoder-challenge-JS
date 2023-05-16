//object

const playerName = "yohan";
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little bit";

// const player = ["yohan", 1212, false, "little bit"]

const player = {
    name: "yohan",
    points: 10,
    fat: true,
};
console.log(player);
console.log(player.name);
console.log(player["name"]);        //console.log(player.name);와 같은 출력방법
player.lastName = "ko";             //player의 object 안에 lastName 추가
player.points = 15;                 //player의 points를 15로 수정
console.log(player);

player.points = player.points + 15; //player.points에 값 더하기
console.log(player);

//object 안과 밖의 규칙은 다르다.
//
