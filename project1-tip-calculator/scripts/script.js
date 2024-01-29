//initialize the values

// $(document).ready(function () {
//   alert("jquery is working");
// });

const billAmountinput = $("#amount");
const tipPercentageinput = $("#percent");
const billResult = $("#bill-result");
const calculateBtn = $("#calc-btn");

let billValid = false;
let percentValid = false;

$(billAmountinput).keyup(function (event) {
  let value = event.target.valueAsNumber;
  if (value < 0 || !value) {
    alert("enter positive number for bill amount");
    billAmountinput.value = "";
    billValid = false;
    disableCalculateButton();
    clearResult();
    return;
  }

  billValid = true;
  if (billValid == true && percentValid == true) {
    //enable calculate button
    enableCalculateButton();
  } else {
    billAmountinput = 0.0;
  }
});

$(tipPercentageinput).keyup(function (e) {
  let value = e.target.valueAsNumber;
  if (value < 0 || !value) {
    alert("enter positive value for tip percentage");
    tipPercentageinput.value = "";
    percentValid = false;
    disableCalculateButton();
    clearResult();
    return;
  }

  if (value > 100 || !value) {
    alert("please enter number less than 100");
    tipPercentageinput.value = "";
    percentValid = false;
    clearResult();
    return;
  }
  percentValid = true;
  if (percentValid == true && billValid == true) {
    // enable calculate button
    enableCalculateButton();
  } else {
    //percentValid == !true;
    //billResult = 0.0;
  }
});

function enableCalculateButton() {
  calculateBtn.removeAttribute("disabled");
  calculateBtn.style.background = "#07b007";
}

function disableCalculateButton() {
  calculateBtn.setAttribute("disabled", "");
  calculateBtn.style.background = "gray";
}

function clearResult() {
  billResult.innerHTML = "0.0";
}

function calculateTip() {
  //parse the values as float numbers
  const billAmount = parseFloat(billAmountinput.value);
  const tipPercentage = parseFloat(tipPercentageinput.value);

  //compute the total
  let total = (billAmount * tipPercentage) / 100;

  //display total
  billResult.innerHTML = "$ " + total; //` $ ${total}`;
}

$("#calc-btn").click(function () {}, calculateTip);

//1 make sure that a user cannot enter a negative value (DONE)
//2. convert the result to 2 decimal places
//3. tip percent should not be greater than 100 (DONE)
//4. calculate button should be disabled unles a user has entered valid values
//5. the color of the button should be gray when the button is disabled.
