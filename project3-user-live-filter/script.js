function userLifeFilter() {
  const inputSearch = document.getElementById("search").value;

  if (inputSearch == "") {
    alert("Enter character to search");
  } else {
    const result = inputSearch.target.value;
  }
  console.log(inputSearch);
}
userLifeFilter();
