
import { displayMeals } from "./display.js";

export class Category {
    constructor() {

        this.CategoryInfo = $("#category.categoryInfo");

        this.fetchApi();

        // this.x= new Displayinfo

    }
    async fetchApi() {
        let api = "https://www.themealdb.com/api/json/v1/1/categories.php";
        let apiresult = await fetch(api);
        let apiresponses = await apiresult.json();
        apiresponses = apiresponses.categories
        console.log(apiresponses);
        this.showCategories(apiresponses);

    }
    showCategories(apiresponses) {
        let categories = document.querySelector(".rowData");

        let box = ``;
        for (let i = 0; i < apiresponses.length; i++) {

            box += `  <div class="col-md-3 ">
       <div class="categoryContent position-relative">
           <img src="${apiresponses[i].strCategoryThumb}" class="w-100" alt="">
           <div class="imgoverlay text-center">
               <h2>${apiresponses[i].strCategory}</h2>
               <p class="p-3">${apiresponses[i].strCategoryDescription}</p>
           </div>
       </div>
   </div>`
            categories.innerHTML = box;
            let CategoryTitle = $("section .rowData .categoryContent");

            // for (let y = 0; y < apiresponses.length; y++) {
            //     if (i === y) {

            //     }
            // }
            // console.log(CategoryTitle[i]);
            CategoryTitle.on("click", function (e) {
                let category = $(this).children("div").children("h2").text();
                showCategoriesInfo(category);
            })
        async function showCategoriesInfo(cat) {
                let catapiresult = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`);
                let catapiresponses = await catapiresult.json();
            catapiresponses = catapiresponses.meals
            console.log(catapiresponses);
            displayMeals(catapiresponses)
            }
        }
    }



}


