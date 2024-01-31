//initialize the values

let billValid = false;
let percentValid = false;

$("#amount").keyup(function (event) {
  let value = event.target.valueAsNumber;
  if (value < 0 || !value) {
    alert("enter positive number for bill amount");
    $("#amount").val("");
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
    //billAmountinput.value = 0.0;
  }
});

$("#percent").keyup(function (event) {
  let value = event.target.valueAsNumber;
  if (value < 0 || !value) {
    alert("enter positive value for tip percentage");
    $("#percent").val("");
    percentValid = false;
    disableCalculateButton();
    clearResult();
    return;
  }

  if (value > 100 || !value) {
    alert("please enter number less than 100");
    $("#percent").val("");
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
  var calculateBtn = $("#calc-btn");
  calculateBtn.removeAttr("disabled");
  calculateBtn.css("background", "#07b007");
}

function disableCalculateButton() {
  var calculateBtn = $("#calc-btn");
  calculateBtn.attr("disabled", "");
  calculateBtn.css("background", "gray");
}

function clearResult() {
  $("#bill-result").html("0.0");
}

function calculateTip() {
  //parse the values as float numbers
  const billAmount = parseFloat($("#amount").val());
  const tipPercentage = parseFloat($("#percent").val());

  //compute the total
  let total = (billAmount * tipPercentage) / 100;

  //display total
  $("#bill-result").html("$ " + total); //` $ ${total}`;
}

$("#calc-btn").click(calculateTip);
//1 make sure that a user cannot enter a negative value (DONE)
//2. convert the result to 2 decimal places
//3. tip percent should not be greater than 100 (DONE)
//4. calculate button should be disabled unles a user has entered valid values
//5. the color of the button should be gray when the button is disabled.
