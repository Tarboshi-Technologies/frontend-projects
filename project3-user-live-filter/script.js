//fetch users from jso file using Fetch

loadUsers();

document.getElementById("search").addEventListener("click", (e) => {
  var searchValue = e.target.value;
  loadUsers(searchValue);
});

function loadUsers(searchValue = "") {
  var users = [];

  searchValue = searchValue ? searchValue : "tesla";
  let url = `https://newsapi.org/v2/everything?q=${searchValue}&apiKey=886b5f9aaf0643f1be5a9134a255e56e`;

  var mainElement = document.getElementById("section");

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("users", data);

      if (searchValue) {
        users = data.articles;
        mainElement.innerHTML = "";
        console.log(users);
      } else {
        users = data.articles;
      }

      for (let i = 0; i < users.length; i++) {
        var userDivString = `
        <figure class="figure">
        <img src="${
          users[i].urlToImage ?? "images/team.jpg"
        }" alt="football team">
        <a href="${users[i].url}">${users[i].title}</a>
        <article>${users[i].description}</article>
        <figcaption>${users[i].content}</figcaption>
        <p>${new Date(users[i].publishedAt).toDateString()}</p>
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
