import { displayMeals } from "./display.js";

export class Ingredients {
    constructor() {
        this.fetchApi();
    }
    async fetchApi() {
        $("#loading").fadeIn(500)
        let api = "https://www.themealdb.com/api/json/v1/1/list.php?i=list";
        let apiresult = await fetch(api);
        let apiresponses = await apiresult.json();
        $("#loading").fadeOut(500)
        apiresponses = apiresponses.meals
        console.log(apiresponses);
        this.showIngredients(apiresponses);
    }
    showIngredients(apiresponses) {
        let ingredients = document.querySelector(".rowData");
        // let CategoryTitle;
        let box = ``;
        for (let i = 0; i < 20; i++) {
            box += `    <div class="col-md-3 ">
            <div class="ingredientContent position-relative text-center">
                <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                <div class=" text-center">
                    <h2>${apiresponses[i].strIngredient}</h2>
                    <p class="p-2">${apiresponses[i].strDescription.slice(0,108)}</p>
                </div>
            </div>
        </div>`
            ingredients.innerHTML = box;
            let IngredientsTitle = $("section .rowData .ingredientContent");

        

            IngredientsTitle.on("click", function (e) {
                let ingredient = $(this).children("div").children("h2").text();
                showIngredientInfo(ingredient);
            })
        async function showIngredientInfo(int) {
                let ingapiresult = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${int}`);
                let ingapiresponses = await ingapiresult.json();
                ingapiresponses = ingapiresponses.meals
            // console.log(catapiresponses);
            displayMeals(ingapiresponses)
            }
        }
    }
}