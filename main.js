let field = document.getElementById("app-field");
let btn = document.getElementById("app-btn");
let listItems = document.getElementById("app-listItems");

btn.addEventListener("click", ()=> {
    let text = field.value;
    let liste = document.createElement("li");
    let textnode = document.createTextNode(text);
    liste.appendChild(textnode);
    document.getElementById("app-listItems").appendChild(liste);

    console.log(text)

})

var input = document.getElementById("app-field"); // id qui renvoie le la valeur dans l'input

input.addEventListener("keypress", function(event) { // event key pressé
    if (event.key === "Enter") { // si l'utilisateur appuie sur entrer
        event.preventDefault();
        document.getElementById("app-btn").click();
    }
});

window.addEventListener('DOMContentLoaded', function(){
    var f = document.getElementById('data');
  
    colors = ['catégorie 1', 'catégorie 2', 'catégorie 3', 'catégorie 4'];
  
    var combo = document.createElement('select');
  
    while(colors.length)
    {
        var couleur = colors.pop();
        var opt = new Option(couleur, couleur);
        combo.options[combo.options.length] = opt;
    }
    f.appendChild(combo);
  });