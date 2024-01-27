const elFindNumForm = document.querySelector(".js-form");
const elFindNumInput = elFindNumForm.querySelector(".js-input");
const elFindNumOutput = elFindNumForm.querySelector(".info-text");
const elAddNumber = document.querySelector(".random-number__add-form");
const elCloseBtn = document.querySelector(".close-btn");
const elCloseBox = document.querySelector(".random-number__top");
const elText = document.querySelector(".js-text");

function findTheNumber(randomNumber, count) {
  console.log(randomNumber);
  elFindNumForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    count = count
    const elFindNumInputValue = Number(elFindNumInput.value);
    if (elFindNumInputValue == randomNumber) {
      elFindNumOutput.textContent = "Siz yutdingiz 🙂";
      elFindNumInput.disabled = true;
    }
    if (elFindNumInputValue > randomNumber) {
      elFindNumOutput.textContent = "Siz kiritgan son random sondan katta!";
      --count
      elFindNumInput.disabled = count === 0;
    } if (elFindNumInputValue < randomNumber) {
      elFindNumOutput.textContent = "Siz kiritgan son random sondan kichik!";
      --count
      elFindNumInput.disabled = count === 0;
    }
    if (count <= 0) {
      elFindNumOutput.textContent = "Urinishlar soni tugadi!";
      count = 0;
      elFindNumInput.disabled = count === 0;
    }
    elText.textContent = count;
  });
  elFindNumOutput.textContent = "..."
  elText.textContent = count;
  elFindNumInput.disabled = count === 0;
}
function randomNumberFn(start, end) {
  let num = Math.floor(Math.random() * (end - start + 1)) + start;
  return num;
}
elAddNumber.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const startInputValue = Number(evt.target[0].value);
  const endtInputValue = Number(evt.target[1].value);
  const outputText = evt.target[3];
  if (startInputValue < endtInputValue) {
    outputText.textContent = "0"
    let attemptCount = 10;
    elCloseBox.classList.toggle("random-number__top-block");
    elCloseBtn.textContent = (elCloseBtn.textContent === "Close") ? "Open" : "Close";
    findTheNumber(randomNumberFn(startInputValue, endtInputValue), attemptCount)
  } else {
    outputText.textContent = "Boshlanish raqamdan tugash raqami kotta bo'lishi kerak!"
  }
});
elCloseBtn.addEventListener("click", () => {
  elCloseBtn.textContent = (elCloseBtn.textContent === "Close") ? "Open" : "Close";
  elCloseBox.classList.toggle("random-number__top-block");
});