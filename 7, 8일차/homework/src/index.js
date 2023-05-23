const numForm = document.querySelector("#numForm");
const defineNumRange = document.querySelector("#defineNumRange");
const tagetNum = document.querySelector("#tagetNum");

function userDefineNumber(event) {
  event.preventDefault();
  const numberRange = defineNumRange.value;
  tagetNum.max = numberRange;
}

function playSubmitInput(event) {
  event.preventDefault();
  const tagetN = tagetNum.value;
  const maxNumber = tagetNum.max;
  const machineNumber = Math.floor(Math.random() * maxNumber + 1);
  document.querySelector(
    "#statusNum"
  ).innerText = `You chose: ${tagetN}, the machine chose: ${machineNumber}`;
  if (parseInt(tagetN) === machineNumber) {
    document.querySelector("#winAndLost").innerText = "You win!";
  } else {
    document.querySelector("#winAndLost").innerText = "You lost!";
  }
}

tagetNum.addEventListener("click", userDefineNumber);
numForm.addEventListener("submit", playSubmitInput);
