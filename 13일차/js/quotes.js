const quotes = [
    {
        quote: "노력 없이 얻는 것은 성취감이 없다.",
        author: "Thomas Edison"
    },
    {
        quote: "목표를 세우고 그 목표를 이루기 위해 최선을 다하라.\n당신이 할 수 있다고 믿을 때, 당신은 이미 반 이상 성공한 것이다.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "성공은 결코 최종 목표가 아니라, 실패에서 실패로 걸어가는 과정에서 온다.",
        author: "Winston Churchill"
    },
    {
        quote: "당신이 세상을 변화시키려고 기다린다면, 당신은 아무것도 이룰 수 없다.\n변화는 당신으로부터 시작되어야 한다.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "가장 훌륭한 시간은 언제인가? 10년 전이었다.\n다음으로 좋은 시간은 오늘이다.",
        author: "Yohan Ko"
    },
    {
        quote: "모든 순간이 새로운 시작이다.",
        author: "T.S Eliot"
    },
    {
        quote: "네가 상상하는 모든 것이 현실이다.",
        author: "Pablo Picasso"
    },
    {
        quote: "단순함이 궁극적인 정교함이다.",
        author: "Leonardo da Vinci"
    },
    {
        quote: "20대에는 의지, 30대에는 기지, 40대에는 판단이 지배한다.",
        author: "Benjamin Franklin"
    },
    {
        quote: "인생은 거울과 같으니, 비친 것을 밖에서 들여다 보기 보다\n먼저 자신의 내면을 살펴야 한다.",
        author: "Wally Famous Amos"
    },
    {
        quote: "우리가 생각하는 것으로, 우린 된다.",
        author: "Buddha"
    },
    {
        quote: "문제는 정지 신호가 아니라 가이드라인이다.",
        author: "Rovert H. Schiuller"
    },
    {
        quote: "어제 너는 내일이라고 말했다. 그냥 해.",
        author: "Nike"
    },
    {
        quote: "난 쉬운 것이 아닌 가치 있는 것을 바란다.",
        author: "Lil Wayne"
    },
    {
        quote: "절대 너의 감정이 이성을 지배하게 두지 마라.",
        author: "Drake"
    },
    {
        quote: "영원히 지속되는 건 없다. 하지만, 적어도 추억을 얻는다.",
        author: "J. Cloe"
    },
    {
        quote: "누군가 구름 속 무지개가 되어보세요.",
        author: "Maya Angelou"
    },
    {
        quote: "그리고 여전히, 나는 일어선다.",
        author: "Maya Angelou"
    },
    {
        quote: "옳은 일을 하는 건 언제나 옳다.",
        author: "Martin Luther King Jr."
    },
    {
        quote: "게임에 휘둘리지 말고, 게임의 판을 바꿔라.",
        author: "Macklemore"
    },
    {
        quote: "성공을 위해서는 태도도 능력만큼 중요하다.",
        author: "Harry F. Banks"
    },
    {
        quote: "운은 준비된 자가 기회와 만날 때 생긴다.",
        author: "Seneca"
    },
    {
        quote: "쉬운 걸 바라지 마라. 네가 더 나아지길 바래라.",
        author: "Jim Rohn"
    },
];


const quote = document.querySelector("#quotes");
const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `${selectedQuote.quote} \n\n- ${selectedQuote.author} -`;