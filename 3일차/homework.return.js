const calculator = {
    add: function (first, second){
        return first + second;
    },  //더하기
    minus: function (first, second){
        return first - second;
    },  //빼기
    times: function (first, second){
        return first * second;
    },  //곱하기
    divide: function (first, second){
        return first / second;
    },  //나누기
    power: function (first, second){
        return first ** second;
    }   //제곱
};

const addResult = calculator.add(2, 3);
const minusResult = calculator.minus(addResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, addResult);
const powerResult = calculator.power(divideResult, minusResult);

//그냥 console.log가 아니라 return을 해야하는 이유
//console.log는 콘솔에 결과를 보여주기 위한 것이다
//브라우저에 보여주는 alert 결과 처럼.
//하지만 a+b, a-b와 같은 value 값을 바로 받을 수가 없다.
//console.log로 작성하고 addResult를 출력하면 undefined가 출력된다.
//return은 function 외부에서도 value 값을 출력할 수 있도록 해준다.
//망고주스를 만든다고 치면, 믹서(function)에 망고를 넣고 망고주스를 만들었을 때 console.log는 만들어진 망고주스를 빼낼 수가 없다는 것이다.
//return을 하면, function은 작동을 멈추고 결과 값을 return 하고 끝나버린다.
// function(a, b){
//     console.log("hello");
//     return a+b;
//     console.log("bye bye");  return 뒤의 값은 출력되지않는다.
        //return하는순간 function이 종료되기때문이다.
// }
