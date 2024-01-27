var elFindNumForm = document.querySelector(".js-form");
var elFindNumInput = elFindNumForm.querySelector(".js-input");
var elFindNumOutput = elFindNumForm.querySelector(".info-text");
var elText = document.querySelector(".js-text");
var attemptCount = 6;
var randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);
function findTheNumber(value) {
  // console.log(attemptCount);
  if (value == randomNumber) {
    elFindNumOutput.textContent = "Siz yutdingiz 🙂";
    elFindNumInput.disabled = true;
  }
  if (value > randomNumber) {
    elFindNumOutput.textContent = "Siz kiritgan son random sondan katta!";
    --attemptCount
  } if (value < randomNumber) {
    elFindNumOutput.textContent = "Siz kiritgan son random sondan kichik!";
    --attemptCount
  }
  if (attemptCount <= 0) {
    elFindNumOutput.textContent = "Urinishlar soni tugadi!";
    elFindNumInput.disabled = true;
    attemptCount = 0;
  }
  elText.textContent = attemptCount;
}

elFindNumForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  var elFindNumInputValue = Number(elFindNumInput.value);
  findTheNumber(elFindNumInputValue);
});
