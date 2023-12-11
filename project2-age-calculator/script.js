// initialize the value

const formInput = document.getElementById("calculateAge");
const dateInput = document.getElementById("date");
const calculateBtn = document.getElementById("calc-btn");
const displayResult = document.getElementById("result-display");

let dateValid = true;

dateInput.addEventListener("keyup", function (event) {
  let value = event.target.valueAsNumber;
  if (value == isNaN || !value) {
    alert("Please Enter Valid Format");
  } else {
    return dateInput.value;
  }
});

function clearResult() {
  dateResult.innerHTML = "";
}

const isValidDate = function validDate(date) {
  return (
    Object.prototype.toString.call(date) === ["object Date"] && !isNaN(date)
  );
};

function calculateAge() {
  const ageInDays = today - birthDate;
  const ageInMonth = Math.floor(ageInDays / 30.43675);
  const ageInYears = Math.floor(ageInDays / 365.25);

  // compute the total
  let total = (ageInDays * ageInMonth * ageInYears) / 365.25;

  // display the result
  displayResult.innerHTML = "You are" + total + "years old";
}

document.getElementById("calc-btn").addEventListener("click", calculateAge);
