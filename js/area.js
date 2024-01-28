import { displayMeals } from "./display.js";

export class Area {
    constructor() {
        this.fetchApi();
    }
    async fetchApi() {
        let api = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
        let apiresult = await fetch(api);
        let apiresponses = await apiresult.json();
        apiresponses = apiresponses.meals
        console.log(apiresponses);
        this.showArea(apiresponses);
    }
    showArea(apiresponses) {
        let area = document.querySelector(".rowData");
     
        let box = ``;
        for (let i = 0; i < apiresponses.length; i++) {
            box += `    <div class="col-md-3 ">
            <div class="areaContent position-relative text-center text-white">
                <i class="fa-solid fa-house-laptop fa-4x"></i>
                <div class=" text-center">
                    <h2>${apiresponses[i].strArea}</h2>
                </div>
            </div>
        </div>`
            area.innerHTML = box;
            let AreaTitle = $("section .rowData .areaContent");

        

            AreaTitle.on("click", function (e) {
                let area = $(this).children("div").children("h2").text();
                showAreaInfo(area);
            })
        async function showAreaInfo(a) {
                let areaapiresult = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${a}`);
                let areaapiresponses = await areaapiresult.json();
                areaapiresponses = areaapiresponses.meals
            // console.log(catapiresponses);
            displayMeals(areaapiresponses)
            }
        }
    }
}