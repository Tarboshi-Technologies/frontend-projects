$(document).ready(function () {
  loadRecipe();
  $("#icon-btn").on("click", function (e) {
    var inputRecipe = $("#input_search").val();
    loadRecipe(inputRecipe);
    console.log("searchvalue", inputRecipe);
  });
  async function loadRecipe(inputRecipe = "") {
    var snacks = {};

    var mainTag = $("#result-display");

    var url = "https://www.themealdb.com/api/json/v1/1/search.php?s=i";

    $.get(url, function (data, status) {
      console.log(data, status);

      if (inputRecipe) {
        snacks = data.meals.filter(function (chop) {
          return chop.meals.strMeal
            .toLowerCase()
            .includes(inputRecipe.toLowerCase());
          // chop.meals.strMealThumb
          //   .toLowerCase()
          //   .includes(inputRecipe.toLowerCase()) ||
          // chop.meals.strYoutube
          //   .toLowerCase()
          //   .includes(inputRecipe.toLowerCase()) ||
          // chop.meals.strSource
          //   .toLowerCase()
          //   .includes(inputRecipe.toLowerCase())
        });
        mainTag.html("");
      } else {
        snacks = data;
      }

      for (let i = 0; i < snacks.meals.length; i++) {
        // mainTag.css({
        //   display: "flex",
        //   "flex-direction": "row",
        // });

        var chopMainElement = `
        <div class="col-md-3 col-sm-12 col-lg-3  my-4">
            <div class="card">
                  <img src="${snacks.meals[i].strMealThumb}"
                      class="card-img-top" alt="food-image">
                  <div class="card-body">
                      <p class="card-text text-center fs-4 fw-bolder">${snacks.meals[i].strMeal}</p>
                      <div class="text-center">
                          <button type="button" class="btn btn-info fw-bold" data-bs-toggle="modal"
                              data-bs-target="#modal-meal" id ="clickBTN">Get Recipe</button>
                      </div>
                  </div>
            </div>
        </div>
                   `;

        const parser = new DOMParser();
        var mealElement = parser.parseFromString(chopMainElement, "text/html")
          .body.firstChild;
        mainTag.append(mealElement);
      }

      var modalBtn = $("#clickBTN");

      for (let i = 0; i < snacks.meals.strInstructions.length; i++) {
        var modalDisplay = `
         <div class="modal text-center" tabindex="-1" id="modal-meal">
        <div class="modal-dialog">
            <div class="modal-content bg-info">
                <div class="modal-header">
                    <h3 class="modal-title text-center text-white">${snacks.meals[i].strMeal}</h3>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="text center">
                    <h3 class="text-white">instructions:</h3>
                </div>
                <div class="modal-body">
                    <p>${snacks.meals[i].strInstructions}</p>
                </div>
                <div class="modal-footer">
                    <p class="bg-success px-4 py-2"><a class="text-center text-white"
                            href="${snacks.meals[i].strSource}">View
                            Meal</a></p>
                    <p class="bg-success px-4 py-2"><a class="link-offset-1 text-center text-white"
                            href="${snacks.meals[i].strYoutube}">watch
                            video</a></p>
                </div>
            </div>
        </div>
    </div>
        `;

        const parser = new DOMParser();
        var modalElement = parser.parseFromString(modalDisplay, "text/html")
          .body.firstChild;
        mainTag.append(modalElement);
      }

      modalBtn.on("click", function () {});
    });
  }
});
