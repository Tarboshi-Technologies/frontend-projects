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
        });
        mainTag.html("");
      } else {
        snacks = data;
      }

      for (let i = 0; i < snacks.meals.length; i++) {
        var chopMainElement = `
  
         <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg shadow-gray-500/50 ... ">
         <img class="w-60 h-40" src="${snacks.meals[i].strMealThumb}" alt="" />
           <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">${snacks.meals[i].strMeal}</h5>
            </div>
            <div class="text-center">
            <button type="button" class="bg-yellow-600 py-2 px-4 text-white text-lg font-bold rounded-xl mb-2" data-te-toggle="modal"
             data-te-target="#modal-meal" id="delete-btn">Get Recipe</button>
           </div>
         </div>         
        </div>
        
        `;

        const parser = new DOMParser();
        var modalElement = parser.parseFromString(chopMainElement, "text/html")
          .body.firstChild;
        mainTag.append(modalElement);
      }
    });
  }
});
