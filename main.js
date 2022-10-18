console.log("Exercice 3")

 let field = document.getElementById("app-field");
 let btn = document.getElementById("app-btn");
 let listItems = document.getElementById("app-listItems");
 let listItems2 = document.getElementById("app-listItems2");
 let listItems3 = document.getElementById("app-listItems3");
 let check = document.getElementById("check");
 let check2 = document.getElementById("check2");
 let check3 = document.getElementById("check3");
// On gère l'event clic
// btn.addEventListener("click", ()=> {
//     //on récupère le text de l'input
//     //on récupère la valeur de l'input
//     console.log(check);
//     console.log(check2);
//     console.log(check3);
//     if (check == check) {
//         let text = field.value;
    
    
    
//     //apres il faut penser à utiliser .createElement()
    
    
    
//         let newLi = document.createElement("li");
//         newLi.textContent = text;
//         //on ajoute le nouvel Li à la list
//         listItems.appendChild(newLi);
//         // On veut supprimer le text de l'input
//         field.value = "";
//         //on crée un Li avec le bon contenu
//     }
//     else if (check2 == check2) {
//         let text = field.value;
    
    
//     //apres il faut penser à utiliser .createElement()
    
    
    
//         let newLi = document.createElement("li");
//         newLi.textContent = text;
//         //on ajoute le nouvel Li à la list
//         listItems2.appendChild(newLi);
//         // On veut supprimer le text de l'input
//         field.value = "";
//         //on crée un Li avec le bon contenu
//     }
//     else if (check3 !== check3) {
//         let text = field.value;
    
    
    
//     //apres il faut penser à utiliser .createElement()
    
    
    
//         let newLi = document.createElement("li");
//         newLi.textContent = text;
//         //on ajoute le nouvel Li à la list
//         listItems3.appendChild(newLi);
//         // On veut supprimer le text de l'input
//         field.value = "";
//         //on crée un Li avec le bon contenu
//     }
// })

check.addEventListener("click", ()=> {
    //on récupère le text de l'input
    //on récupère la valeur de l'input
    console.log(check);
    if (check == check) {
        let text = field.value;
    
    
    //apres il faut penser à utiliser .createElement()
    
    
    
        let newLi = document.createElement("li");
        newLi.textContent = text;
        //on ajoute le nouvel Li à la list
        listItems.appendChild(newLi);
        // On veut supprimer le text de l'input
        field.value = "";
        //on crée un Li avec le bon contenu
    }
})

check2.addEventListener("click", ()=> {
    //on récupère le text de l'input
    //on récupère la valeur de l'input
    console.log(check2);
    if (check2 == check2) {
        let text = field.value;
    
    
    //apres il faut penser à utiliser .createElement()
    
    
    
        let newLi = document.createElement("li");
        newLi.textContent = text;
        //on ajoute le nouvel Li à la list
        listItems2.appendChild(newLi);
        // On veut supprimer le text de l'input
        field.value = "";
        //on crée un Li avec le bon contenu
    }
})

check3.addEventListener("click", ()=> {
    //on récupère le text de l'input
    //on récupère la valeur de l'input
    console.log(check3);
    if (check3 == check3) {
        let text = field.value;
    
    
    //apres il faut penser à utiliser .createElement()
    
    
    
        let newLi = document.createElement("li");
        newLi.textContent = text;
        //on ajoute le nouvel Li à la list
        listItems3.appendChild(newLi);
        // On veut supprimer le text de l'input
        field.value = "";
        //on crée un Li avec le bon contenu
    }
})

// on crée le fait d'appuyer pour entrer pour envoyer le texte
var input = document.getElementById("app-field"); // id qui renvoie le la valeur dans l'input

input.addEventListener("keypress", function(event) { // event key pressé
    if (event.key === "Enter") { // si l'utilisateur appuie sur entrer
        event.preventDefault();
        document.getElementById("app-btn").click();  // permet que quand l'utilisateur appuie sur entrer, sa ouvre le dropdown
    }
});