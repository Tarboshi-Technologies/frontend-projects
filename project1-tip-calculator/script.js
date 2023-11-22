function calculatePercentage() {
  const amount1 = document.getElementById("amount").ariaValueMax.trim();
  const percent2 = document.getElementById("percent").ariaValueMax.trim();
  console.log("good");

  if (amount === "" || percent === "") {
    alert("please enter the number.");
  } else {
    const Percentage = math.floor(math.random() / 101);

    const total = document.getElementById("bill-result");
    console.log(total);

    result.innerHTML = `${amount} and ${percent} 's percentage:${Percentage}`;
  }
}
