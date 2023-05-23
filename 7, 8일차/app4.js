const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit() {
    const username = loginInput.value;
    console.log(username);
}
loginForm.addEventListener("submit", onLoginSubmit);
//addEventListner를 사용하는 것은 function을 바로 사용하려는 것이 아니다.
//그래서 onLoginSubmit() 과 같이 함수 실행을 적으면 안 된다.
//지정된 값이 있을 때만 실행시킨다.
