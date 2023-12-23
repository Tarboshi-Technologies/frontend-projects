// initialize the value

function calculateAge() {
  const dateInput = document.getElementById("date");
  const displayResult = document.getElementById("result-display");

  let dateValid = true;

  dateInput.addEventListener("change", function (event) {
    let value = event.target.value;
    console.log(value);
    if (!value) {
      alert("Please Enter Valid Format");
    } else {
      return;
    }
  });

  var dob = new Date(dateInput.value);
  if (dateInput.value == "" || dateInput.value == null) {
    alert("Enter a valid date");
    return;
  }

  if (dob >= new Date()) {
    alert("Can Not Display Future Date");
    return;
  }

  // calculate month difference from current date in time
  var month_diff = Date.now() - dob.getTime();

  //convert the calculated difference in date format
  var age_dt = new Date(month_diff);

  //extract year from date
  var year = age_dt.getUTCFullYear();

  //now calculate the age of the user
  var age = Math.abs(year - 1970);

  //display the calculated age

  let result = document.getElementById("result-display");
  result.innerHTML = "you are " + age + " " + "years old";
  return;
}
