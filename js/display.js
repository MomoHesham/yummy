

export function displayMeals(apis) {
    let box = ``;
    let meals = document.querySelector(".rowData");
    if (apis != null) {
        for (let i = 0; i < apis.length; i++) {
            if (i < 20) {
                box += `  <div class="col-md-3 ">
                <div class="mealContent position-relative" mealId="${apis[i].idMeal}">
                    <img src="${apis[i].strMealThumb}" class="w-100" alt="">
                    <div class="imgoverlay  text-center d-flex justify-content-center align-items-center">
                        <h2>${apis[i].strMeal}</h2>
                    </div>
                </div>
            </div>`;
                meals.innerHTML = box;
                let mealTitle = $("section .rowData .mealContent");
                // apis[i] = mealTitle[i]
                // let id = apis[i].idMeal
    
                mealTitle.on("click", function (e) {
                    $("#loading").fadeIn(500)
                    let meal = $(this).attr("mealId");
                  
                    displayMealsData(meal)
                })
            }
        }
    } else {
        meals.innerHTML = ` `;
    }
    

}
async function displayMealsData(id) {
  
    let fetchApi = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    let dataresult = await fetchApi.json();
    $("#loading").fadeOut(500)
    dataresult = dataresult.meals[0]
    $(".searchContainer").fadeOut(100);
    displayMealsDetails(dataresult)
    // console.log(id);
}
function displayMealsDetails(api) {
    let meals = document.querySelector(".rowData");
    let ingredients = [
        api.strIngredient1,
        api.strIngredient2,
        api.strIngredient3,
        api.strIngredient4,
        api.strIngredient5,
        api.strIngredient6,
        api.strIngredient7,
        api.strIngredient8,
        api.strIngredient9,
        api.strIngredient10,
        api.strIngredient11,
        api.strIngredient12,
        api.strIngredient13,
        api.strIngredient14,
        api.strIngredient15,
        api.strIngredient16,
        api.strIngredient17,
        api.strIngredient18,
        api.strIngredient19,
        api.strIngredient20];
    let measurse = [
        api.strMeasure1,
        api.strMeasure2,
        api.strMeasure3,
        api.strMeasure4,
        api.strMeasure5,
        api.strMeasure6,
        api.strMeasure7,
        api.strMeasure8,
        api.strMeasure9,
        api.strMeasure10,
        api.strMeasure11,
        api.strMeasure12,
        api.strMeasure13,
        api.strMeasure14,
        api.strMeasure15,
        api.strMeasure16,
        api.strMeasure17,
        api.strMeasure18,
        api.strMeasure19,
        api.strMeasure20];
    let ingredientsBox = ``;
    let tagsBox = ``;
    let tags = api.strTags;
    if (tags != null) {
        tags = tags.split(",");
        for (let i = 0; i < tags.length; i++) {
            tagsBox += ` <div class="tag alert alert-danger p-1 m-2">
            ${tags[i]}
         </div>`
        }
    }


    console.log(tags);


    for (let i = 0; i < ingredients.length; i++) {
        if (measurse[i] && ingredients[i] || !measurse[i] && ingredients[i]) {
            ingredientsBox += ` <div class="recipe alert alert-info p-1 m-2">
            ${measurse[i]} ${ingredients[i]}
         </div>`
        }



    }
    let boxDetails = `<div class="col-md-4">
    <div class="imgsDetails text-white">
        <img src="${api.strMealThumb}" class="w-100 rounded-3" alt="">
        <h2 class="mt-2">
            ${api.strMeal}
        </h2>
    </div>
    </div>
    <div class="col-md-8">
    <div class="infoDetails text-white">
        <h2>
            Instructions
        </h2>
        <p>${api.strInstructions}</p>
            <h3>
                Area : <span>${api.strArea}</span>
            </h3>
            <h3>
                Category : <span>${api.strCategory}</span>
            </h3>
            <h3>
                Recipes : 
            </h3>
            <div class="recipesInfo d-flex flex-wrap mb-3">
            ${ingredientsBox}
            </div>
            <h3>
                Tags : 
            </h3>
            <div class="tagsInfo d-flex flex-wrap mb-3">
               ${tagsBox}
            </div>
            <button class="btn btn-success">
                <a href="${api.strSource}" class="text-decoration-none text-white" target="_blank"> Source</a>
            </button>
            <button class="btn btn-danger">
                <a href="${api.strYoutube}" class="text-decoration-none text-white"  target="_blank"> Youtube</a>
            </button>
    </div>
    </div>`;

    meals.innerHTML = boxDetails;
    console.log(api);
}


