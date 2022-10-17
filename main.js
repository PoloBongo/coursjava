console.log("sa marche 1 2 3", true, false)

// ................

var test = "coucou";
const test1 = "coucou1";
let test2 = "coucou2";
test2="coucou3";

let maths = [10, 11, 12, 13];

console.log(maths)
console.log(maths[2])


let firstname = "Polo";
let lastname = "Bongo";

let message = 'Bonjour' + " " + firstname + " " + lastname;
console.log(message)

let money = (maths[0] + maths[1] + maths[2]) / maths.length;
console.log(money)

if (money >= 6) {
    console.log("super");
} else if (money >= 8) {;
console.log("bof")
}
else {
    console.log("t es naze")
}

let tableau = [14, 26, 36, 46];
console.log(tableau);

let tableau2 = (tableau[0] + tableau[1] + tableau[2] + tableau[3]) / tableau.length;
console.log(tableau2)

if (tableau2 < 36) {
    console.log("la personne est vielle");
}

let oui = document.querySelector('#js-oui');
console.log(oui);

let clickoui = oui.addEventListener('click', () => {
    let alerte = document.scripts;

    if (alerte.length) {
      alert('Voulez-vous vraiment allez sur cette page qui n\'ai pas sécuriser ?');
    }
    console.log("OUI")
})

let non = document.querySelector('#js-non');
console.log(non);

let clicknon = non.addEventListener('click', () => {
    let b = document.body;
    let newP = document.createElement('p')

    newP.textContent = 'paragraphe'

    b.prepend(newP)

    console.log("NON")
})

let field = document.getElementById("app-field");
let btn = document.getElementById("app-btn");
let listItems = document.getElementById("app-listItems");

btn.addEventListener("click", ()=> {
    let b = document.body;
    let text = field.value;
    let liste = document.createElement('ul');

    b.prepend("\n", text, liste);
    
    console.log(text);

    delete app-field;
})