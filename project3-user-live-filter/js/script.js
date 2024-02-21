loadUsers();

$("#clickButton").on("click", function (e) {
  var searchValue = $("#search").val();
  loadUsers(searchValue);
  console.log("search value", searchValue);
});

async function loadUsers(searchValue = "") {
  var users = [];

  var mainElement = $("#mainSection");

  $.get("js/user.json", function (data, status) {
    console.log(data, status);

    if (searchValue) {
      users = data.filter(function (user) {
        return (
          user.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
          user.lastName.toLowerCase().includes(searchValue.toLowerCase()) ||
          user.city.toLowerCase().includes(searchValue.toLowerCase()) ||
          user.country.toLowerCase().includes(searchValue.toLowerCase())
        );
      });
      mainElement.html("");
    } else {
      users = data;
    }

    for (let i = 0; i < users.length; i++) {
      var userDivString = `
        
      <figure class="border-b-2 py-10 mb-5">
      <img class="w-70 h-20 me-3 rounded-md ms-5" src="${users[i].image}" alt="football team">
      <article class="font-bold text-lg">${users[i].firstName} ${users[i].lastName}</article>
      <figcaption>${users[i].city} ${users[i].country}</figcaption>
    </figure>
        
    `;

      const parser = new DOMParser();
      var userDiv = parser.parseFromString(userDivString, "text/html").body
        .firstChild;
      mainElement.append(userDiv);
    }
  });
}
