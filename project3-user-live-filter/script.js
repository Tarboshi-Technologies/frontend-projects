loadUsers();

document.getElementById("clickButton").addEventListener("click", (e) => {
  var searchValue = document.getElementById("search").value;
  loadUsers(searchValue);
  console.log(searchValue);
});

function loadUsers(searchValue = "") {
  var users = [];

  var mainElement = document.getElementById("mainSection");

  fetch("./user.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("users", data);

      if (searchValue) {
        users = data.filter(function (user) {
          return (
            user.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
            user.lastName.toLowerCase().includes(searchValue.toLowerCase()) ||
            user.city.toLowerCase().includes(searchValue.toLowerCase()) ||
            user.country.toLowerCase().includes(searchValue.toLowerCase())
          );
        });
        mainElement.innerHTML = "";
        console.log(users);
      } else {
        users = data;
      }

      for (let i = 0; i < users.length; i++) {
        var userDivString = `
        <figure class="figure">
          <img src="images/team.jpg" alt="football team">
          <article>${users[i].firstName} ${users[i].lastName}</article>
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

//display users on html
