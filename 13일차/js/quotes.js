const quotes = [
    {
        quote: "노력 없이 얻는 것은 성취감이 없다.",
        author: "Thomas Edison"
    },
    {
        quote: "목표를 세우고 그 목표를 이루기 위해 최선을 다하라. 당신이 할 수 있다고 믿을 때, 당신은 이미 반 이상 성공한 것이다.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "성공은 결코 최종 목표가 아니라, 실패에서 실패로 걸어가는 과정에서 온다.",
        author: "Winston Churchill"
    },
    {
        quote: "당신이 세상을 변화시키려고 기다린다면, 당신은 아무것도 이룰 수 없다. 변화는 당신으로부터 시작되어야 한다.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "가장 훌륭한 시간은 언제인가? 10년 전이었다. 다음으로 좋은 시간은 오늘이다.",
        author: "Yohan Ko"
    },
    {
        quote: "중요한 것은 사랑을 받는 것이 아니라 사랑을 하는 것이었다.",
        author: "William Somerset Maugham"
    },
    {
        quote: "한 방향으로 깊이 사랑하면 다른 방향으로의 사랑도 깊어진다.",
        author: "Anne-Sophie Swetchine"
    },
    {
        quote: "사랑 받고 싶다면 사랑하라, 그리고 사랑스럽게 행동하라.",
        author: "Benjamin Franlin"
    },
    {
        quote: "20대에는 의지, 30대에는 기지, 40대에는 판단이 지배한다.",
        author: "Benjamin Franklin"
    },
    {
        quote: "인생은 거울과 같으니, 비친 것을 밖에서 들여다 보기 보다 먼저 자신의 내면을 살펴야 한다.",
        author: "Wally Famous Amos"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;