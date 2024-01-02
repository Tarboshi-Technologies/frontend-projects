var userFilter = [
  {
    firstName: "Blake",
    lastName: "Gagnon",
    country: "Brockton, Canada",
  },
  {
    firstName: "Alvilde",
    lastName: "Madland",
    country: "Alvilde Madland",
  },
  {
    firstName: "Afsan",
    lastName: "Pocan",
    country: "Kirikkale Turkey",
  },
  {
    firstName: "Gordodum",
    lastName: "Nikolenko",
    country: "Turka, Ukraine",
  },
  {
    firstName: "Samson ",
    lastName: "Ogbonna",
    country: "Enugu, Nigeria",
  },
];
// console.log("hi");

var inputSearch = document.addEventListener("click", function () {
  let input = !undefined;
  input = document.getElementById("search");
  if (input == undefined || input == !userFilter) {
    alert("Enter available userfilter");
  } else {
    console.log(input.value);
  }
});
