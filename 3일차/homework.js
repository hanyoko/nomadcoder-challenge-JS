const calculator = {
    add: function (first,second){
        console.log(first + second);
    },  //더하기
    minus: function (first, second){
        console.log(first - second);
    },  //빼기
    times: function (first, second){
        console.log(first * second);
    },  //곱하기
    divide: function (first, second){
        console.log(first / second);
    },  //나누기
    power: function (first, second){
        console.log(first ** second);
    }   //제곱
};

calculator.add(1, 3);
calculator.minus(5, 4);
calculator.times(10, 10);
calculator.divide(2, 4);
calculator.power(2, 2);