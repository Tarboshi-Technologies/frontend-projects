//fetch users from jso file using Fetch

loadUsers();

document.getElementById("search").addEventListener("keyup", (e) => {
  var searchValue = e.target.value;
  loadUsers(searchValue);
});

function loadUsers(searchValue = "") {
  var users = [];

  fetch("./user.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("users", data);

      if (searchValue) {
        users = data.filter(function (item) {
          return item.firstName.includes(searchValue);
        });
        console.log(users);
      } else {
        users = data;
      }

      var mainElement = document.getElementById("section");
      for (let i = 0; i < users.length; i++) {
        var userDivString = `
      <figure>
            <img src="images/${users[i].image}" alt="boy pic">
            <figcaption><b>${users[i].firstName} ${users[i].lastName}</b></figcaption>
            <span>${users[i].city}, ${users[i].country}</span>
            <hr>
      </figure>
  `;

        const parser = new DOMParser();
        var userDiv = parser.parseFromString(userDivString, "text/html").body
          .firstChild;
        mainElement.appendChild(userDiv);
      }
    });
}

//display users on html
