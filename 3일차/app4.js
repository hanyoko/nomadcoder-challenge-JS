//playeer object 만들기
const player = {
    name: "yo",
    sayHello: function (otherPersonsName) {
        console.log("hello! " + otherPersonsName + " nice to meet you!");
    },
};

console.log(player.name);
player.sayHello("han");
player.sayHello("ko");

function plus(a, b){
    //function이 데이터를 받는 방법 
    console.log(a + b);
}

plus(5,5);
//데이터를 function 안으로 보내는 법