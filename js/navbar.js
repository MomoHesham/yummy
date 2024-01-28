import { Area } from "./area.js";
import { Category } from "./categories.js";
import { ContactUs } from "./contactUs.js";
import { Ingredients } from "./ingredients.js";
import { Search } from "./search.js";





export function navbar() {
    $(window).ready(function () {
        let menuBox = $("#navbar .menuBox").outerWidth();

        $("#navbar .menubar").animate({
            left: `-${menuBox}`
        }, 500, function () {
            $("#navbar .menuBox").css("opacity", 1);
        });
        $("#navbar .menubar #openIcon").on("click", function () {


            openMenu()
            $("#navbar .menubar #openIcon").fadeOut(100, function () {
                $("#navbar .menubar #closeIcon").fadeIn(100);
            });
            $("li.menuItem span").addClass("open")
        });


        $("#navbar .menubar #closeIcon").on("click", function () {

            $("#navbar .menubar #closeIcon").fadeOut(100, function () {
                $("#navbar .menubar #openIcon").fadeIn(100);
            });
            $("#navbar .menubar").animate({
                left: `-${menuBox}`
            }, 1000);

            
            $("li.menuItem span").removeClass("open")
          
        });
        let searchItem = $("#navbar .menubar .menuBox .menuItems .menuItem").eq(0);
        let categorieItem = $("#navbar .menubar .menuBox .menuItems .menuItem").eq(1);
        let areaItem = $("#navbar .menubar .menuBox .menuItems .menuItem").eq(2);
        let ingredientItem = $("#navbar .menubar .menuBox .menuItems .menuItem").eq(3);
        let contactItem = $("#navbar .menubar .menuBox .menuItems .menuItem").eq(4);

        searchItem.on("click", function () {
            $("#contacUs").fadeOut(500).siblings().fadeIn(500);
            $("#navbar .menubar #closeIcon").fadeOut(100, function () {
                $("#navbar .menubar #openIcon").fadeIn(100);
            });
            $("#navbar .menubar").animate({
                left: `-${menuBox}`
            }, 1000);
            $("li.menuItem span").removeClass("open")
            $(".searchContainer").fadeIn(500);
            $(".rowData").html("  ")
            let s = new Search
            $("#name").val("") 
            $("#email").val("") 
            $("#age").val("")  
            $("#phone").val("") 
            $("#password").val("") 
            $("#repassword").val("")
            $('#submitBtn').addClass("disabled");

        })
        contactItem.on("click", function () {
            
            $("#contacUs").fadeIn(500).siblings().fadeOut(500);
      
            $("#navbar .menubar #closeIcon").fadeOut(100, function () {
                $("#navbar .menubar #openIcon").fadeIn(100);
            });
            $("#navbar .menubar").animate({
                left: `-${menuBox}`
            }, 1000);
            $("li.menuItem span").removeClass("open")
            displayNoneSearch()
            let x = new ContactUs
          
        });
        areaItem.on("click", function () {
            $("#contacUs").fadeOut(500).siblings().fadeIn(500);
            $("#navbar .menubar #closeIcon").fadeOut(100, function () {
                $("#navbar .menubar #openIcon").fadeIn(100);
            });
            $("#navbar .menubar").animate({
                left: `-${menuBox}`
            }, 1000);
            $("li.menuItem span").removeClass("open")
            displayNoneSearch()
            let i = new Area
            $("#name").val("") 
            $("#email").val("") 
            $("#age").val("")  
            $("#phone").val("") 
            $("#password").val("") 
            $("#repassword").val("")
            $('#submitBtn').addClass("disabled");
        })
        ingredientItem.on("click", function () {
            $("#contacUs").fadeOut(500).siblings().fadeIn(500);
            $("#navbar .menubar #closeIcon").fadeOut(100, function () {
                $("#navbar .menubar #openIcon").fadeIn(100);
            });
            $("#navbar .menubar").animate({
                left: `-${menuBox}`
            }, 1000);
            $("li.menuItem span").removeClass("open")
            displayNoneSearch()
            let i = new Ingredients
            $("#name").val("") 
            $("#email").val("") 
            $("#age").val("")  
            $("#phone").val("") 
            $("#password").val("") 
            $("#repassword").val("")
            $('#submitBtn').addClass("disabled");
        })
        categorieItem.on("click", function () {
            $("#contacUs").fadeOut(500).siblings().fadeIn(500);
            // $("#category").fadeIn(500).siblings().fadeOut(500);
            $("#navbar .menubar #closeIcon").fadeOut(100, function () {
                $("#navbar .menubar #openIcon").fadeIn(100);
            });
            $("#navbar .menubar").animate({
                left: `-${menuBox}`
            }, 1000);
            $("li.menuItem span").removeClass("open")
            displayNoneSearch();
            let c = new Category
            $("#name").val("") 
            $("#email").val("") 
            $("#age").val("")  
            $("#phone").val("") 
            $("#password").val("") 
            $("#repassword").val("")
            $('#submitBtn').addClass("disabled");

        });
    });
    function displayNoneSearch() {
        $(".searchContainer").fadeOut(500)
    }
    function openMenu() {
        $("#navbar .menubar").animate({
            left: 0
        }, 500);
    }
    // function closeMenu() {
    //     $("#navbar .menubar").animate({
    //         left: `-${menuBox}`
    //     }, 1000);
    // }
}
