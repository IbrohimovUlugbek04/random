var elFindNumForm = document.querySelector(".js-form");
var elFindNumInput = elFindNumForm.querySelector(".js-input");
var elFindNumOutput = elFindNumForm.querySelector(".info-text");
var elText = document.querySelector(".js-text");
var attemptCount = 6;
var randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);
function findTheNumber(value) {
  --attemptCount;
  if (value <= 0 || isNaN(value)) {
    elFindNumOutput.textContent = "0 katta son kiriting yokida raqam kiriting!";
  } else if (value == randomNumber) {
    elFindNumOutput.textContent = "Siz yutdingiz 🙂";
    elFindNumInput.disabled = true;
  } else if (attemptCount == 0) {
    elFindNumOutput.textContent = "Urinishlar soni tugadi!";
    elFindNumInput.disabled = true;
  } else if (value > randomNumber) {
    elFindNumOutput.textContent = "Siz kiritgan son random sondan katta!";
  } else {
    elFindNumOutput.textContent = "Siz kiritgan son random sondan kichik!";
  }
  elText.textContent = attemptCount;
}

elFindNumForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  var elFindNumInputValue = Number(elFindNumInput.value);
  findTheNumber(elFindNumInputValue);
});
