//déclaration des objets qui pointe sur les éléments de la page
let oMenuHTML = document.querySelector("#menualt");
let oaSectionHTML = document.querySelectorAll("#menualt  a");
let oaSectionTopHTML = document.querySelectorAll("#menutop  a");
console.log(oaSectionHTML, oaSectionTopHTML);
//fonction qui verifie la valeur de scrolly pour faire apparaitre et disparaitre le menu burger
function testScroll(){
    if(window.scrollY>900){
        oMenuHTML.classList.remove("hidden");
        
        
        console.log(oMenuHTML.className);
        
    }else if(window.scrollY<900){
        oMenuHTML.classList.add("hidden");
       
    }
}
//appel de testscroll sur window.onscroll
window.onscroll=testScroll;



