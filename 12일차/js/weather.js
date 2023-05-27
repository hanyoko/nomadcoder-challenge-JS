const API_KEY = "fe47bd82d2bf013b60f0a0cd0227ea20";
function onGeoOk(position){
    const lat = position.coords.latitude;   //위도
    const lng = position.coords.longitude;  //경도
    console.log("You live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child")
            const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });

    //fetch 작동하는법
    //fetch는 promise이다
    //promise는 당장 뭔가 일어나지 않고 시간이 좀 걸린 뒤에 일어나는 것
    //서버에 뭔가 물어봤는데 서버가 응답하는 데 5분 걸린다고 해보자, 그러면 서버의 응답을 기다려야한다.
    //그래서 then을 사용해야한다.
    //이제 어떤 일이 일어나냐면, URL을 fetch하고 .. 그 다음으로 response를 받아야한다.
    //그리고 response의 json을 받아야한다.
    //그리고 내용을 추출했으면 data를 얻을 것이다. 

}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
