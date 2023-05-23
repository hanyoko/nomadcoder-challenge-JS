const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();
    //기본행동이란 어떤 function에 대해 브라우저가 기본적으로 수행하는 동작
    //누군가 form을 submit 하면 브라우저는 기본적으로 페이지를 새로고침한다.
    //preventDefault()를 추가함으로써 그 기본동작을 막는다.
    
    console.log(loginInput.value);
}

function handleLinkClick(event) {
    //alert("clicked !");
    //모든 것들이 막혀있다가 alert의 확인을 누르면(click하면) 실행된다.
    event.preventDefault();
    console.dir(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
//addEventListner를 사용하는 것은 function을 바로 사용하려는 것이 아니다.
//그래서 onLoginSubmit() 과 같이 함수 실행을 적으면 안 된다.
//지정된 값이 있을 때만 실행시킨다.
link.addEventListener("click", handleLinkClick);