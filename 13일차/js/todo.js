const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let todos = [];     //const를 let으로 수정
//why? const는 변경이 불가능하기때문에 let으로 바꿔준다.

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));   //todos의 배열을 localstorage에 담는 과정
    //JSON.stringify() : 텍스트를 배열로 만들어준다.
}

function deleteTodo(event){
    //console.log("lalala");  //하지만 어떤 버튼인지 알 수가 없다
    // console.dir(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    //console.log(li.id); //지우고자하는 todo의 id가 출력된다.
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));    //하지만 지워지지않는다.
    //why? li.id는 string 타입이고. todo.id는 number 타입이기 때문에 아예 다른 것으로 되어 아무것도 지워지지않는다.
    //그래서 li.id를 parseInt로 묶어준다.
    saveTodos();    //saveTodoe를 불러주지 않으면 localStorage에서 지워지지않아서 새로고침하면 다시 지운 값이 생긴다.
}

function paintTodo(newTodo){
    // console.log("I will paint", newTodo);
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;      //값이 text가 아닌 object object로 뜨는 것을 정상작동을 위해 .text를 붙여준다.
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    // console.log(li);
    todoList.appendChild(li);
    //여기까지 하면 지울 수 없다는 것과 새로고침하면 사라진다는 문제가 있다.
    //그래서 button을 만들었다.
}

function handleTodoSubmit(event){
    event.preventDefault();
    //console.log(todoInput.value);
    const newTodo = todoInput.value;    //input의 현재 value를 새로운 변수에 복사
    todoInput.value = "";
    // console.log(newTodo, todoInput.value);
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };      //Obj를 이용해서 랜덤 ID를 부여한다.
    todos.push(newTodoObj);     //newTodo에서 newTodoObj로 변경
    paintTodo(newTodoObj);     //newTodo에서 newTodoObj로 변경
    //설명 =>
    //사용자가 form을 submit 하면, 우리는 input을 비우고
    //그 텍스트(newTodo)를 todos array(배열)에 push 하고
    //그 다음에는, 화면에 todo를 그려주고
    saveTodos();
    //그러고 나서 바로 여기에서 saveTodos를 하면 된다. todo들을 저장해주는 것
    //임의로 a,b,c,d ... todo를 만들어주고 localstorage를 확인해보면 담겨있는 것을 확인할 수 있다.
    //하지만, 새로고침하면 화면에서는 사라지고 localstroage에는 담겨있다
    //또, 새롭게 a를 입력하면 기존의 항목은 사라지고 a만 localstorage에 담겨있는 것을 볼 수 있다.
    //
}

todoForm.addEventListener("submit", handleTodoSubmit);

//array의 각 item에 대해 하나의 function을 실행할 수 있는 첫번째방법
/*
function sayHello(item){
    console.log("this is the turn of", item);
}
*/
const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    //console.log(parsedTodos);
    //parsedTodos.forEach(sayHello);
    //array의 각 item에 대해 하나의 function을 실행할 수 있는 두번째방법
    //parsedTodos.forEach((item) => console.log("this is the turn of", item));
    
    todos = parsedTodos;    //todo 업데이트를 위해 추가해줬다.
    //이렇게 하면 todos는 빈 array였다가 이전 todos를 함께 저장하여 모든 element를 저장하는 todos가 된다.
    
    parsedTodos.forEach(paintTodo);
    //forEach가 실행되면 paintTodo가 실행된다.
    //ex) paintTodo({text: "a", id:121212})
}
//여기까지 이루어지면 input에 입력한 값이 localstorage에 저장은 되지만 새로운 텍스트를 입력하면 리셋이 되는 현상을 볼 수 있다.
//이것의 이유는 변수 todos를 보면 todos = []; 로 항상 비어있기 때문이다.
//newTodo를 작성하고 form을 submit 할 때마다 newTodo를 todos array(빈 array)에 그냥 push 하게 된다.
//그리고 todo를 저장할 때 새로운 todo들만 포함하고 있는 array를 저장하기 때문이다.
//이때 전에 있던 todo들은 갖고 있지 않다.
//따라서, 우리가 갖고있던 todos의 이전 복사본을 잊어버리고 있다는 뜻이다.
//todos를 수정한다.
//해결방법 ->
//appalication이 시작될 때 todos array를 빈값으로 시작하는 대신에
//const를 let으로 변경하여 업데이트가 가등하도록 만들고
//localstorage에 todo들이 있으면, todos에 parsedTodos를 넣어서 전에 있던 todo들을 복원한다.

// function filter(){

// }
// [1,2,3,4].filter(filter)

// filter(1) = 1
// filter(2) = 2
// filter(3) x 
// filter(4) = 4
// 만약, 3에서 false가 나오면 1,2,4만 유지된다