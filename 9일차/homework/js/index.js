const clockTitle = document.querySelector(".js-clock");

function clock() {
  const christmas = new Date("2023-12-25");
  const today = new Date();
  const date = christmas - today;

  const day = Math.floor(date / (1000 * 60 * 60 * 24));
  const hour = Math.floor((date / (1000 * 60 * 60)) % 24);
  const minute = Math.floor((date / (1000 * 60)) % 60);
  const second = Math.floor((date / 1000) % 60);

  clockTitle.innerText = `${day}d ${hour}h ${minute}m ${second}s`;
}

setInterval(clock, 1000);
