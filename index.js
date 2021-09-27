const birthDate = document.querySelector("#birth-date");
const favouriteNumber = document.querySelector("#favourite-number");
const checkButton = document.querySelector("#btn-check");
const outputMessage = document.querySelector(".output-message");

const dateConverter = (dob) => {
  let convertedDate = Number(dob.replaceAll("-", ""));
  let sum = 0;
  for (let i = 0; i < convertedDate.length; i++) {}
  //   console.log(convertedDate);
  return sum;
};

let luckyOrNot = () => {
  //   console.log(birthDate.value, favouriteNumber.value);
  dateConverter(birthDate.value);
  checkLucky(sum, favouriteNumber.value);
};

const checkLucky = (convertedDate, num) => {
  // if()
};

checkButton.addEventListener("click", luckyOrNot);
