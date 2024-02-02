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
      // console.log(users);
    } else {
      users = data;
    }

    for (let i = 0; i < users.length; i++) {
      var userDivString = `
        <figure class="figure border-bottom">
          <img class="figure-img img-fluid w-25 float-start me-3" src="images/team.jpg" alt="football team">
          <article>${users[i].firstName} ${users[i].lastName}</article>
          <figcaption class="figure-caption">${users[i].city} ${users[i].country}</figcaption>
        </figure>
        <hr>
        
    `;

      const parser = new DOMParser();
      var userDiv = parser.parseFromString(userDivString, "text/html").body
        .firstChild;
      mainElement.append(userDiv);
    }
  });
}
