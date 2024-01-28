import { displayMeals } from "./display.js";

export class Search {
    constructor() {
        this.inputName = $("#byName");
        this.inputFirstLetter = $("#byFirstLetter");
        this.fetchname=this.fetchnameApi
        this.inputName.on("input", () => this.fetchnameApi(this.inputName.val()));
        this.inputFirstLetter.on("input", () => this.fetchfirstApi(this.inputFirstLetter.val()));
        $(".rowData").fadeIn(100)
    }

    async fetchnameApi(name) {
        $("#loading").fadeIn(500)
        let nameapiresult = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
        
        let nameapiresponses = await nameapiresult.json();
        nameapiresponses = nameapiresponses.meals
        $("#loading").fadeOut(500)
        console.log(nameapiresponses);
        displayMeals(nameapiresponses)
    }
    async fetchfirstApi(l) {
        $("#loading").fadeIn(500)
        console.log(this.inputFirstLetter.val());
        let letterapiresult;
        if (this.inputFirstLetter.val() == "") {
            letterapiresult = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
        } else {
            letterapiresult = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${l}`);
        }
         let letterapiresponses = await letterapiresult.json();
        letterapiresponses = letterapiresponses.meals
        $("#loading").fadeOut(500)
            console.log(letterapiresponses);
            displayMeals(letterapiresponses)
    }
}