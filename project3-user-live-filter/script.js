loadUsers();

document.getElementById("search").addEventListener("click", (e) => {
  var searchValue = e.target.value;
  loadUsers(searchValue);
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
        users = data;
        mainElement.innerHTML = "";
        console.log(users);
      } else {
        users = data;
      }

      for (let i = 0; i < users.length; i++) {
        var userDivString = `
        <figure class="figure">
        <img src="${users[i].image}" alt="football team">
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
