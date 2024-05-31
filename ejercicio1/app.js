//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const button = document.querySelector(".showme");
console.log(button.innerText)

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const title = document.querySelector("#pillado");
console.log(title.innerText)

//1.3 Usa querySelector para mostrar por consola todos los p
const paragraphs = document.querySelectorAll("p");
for (p of paragraphs){
    console.log(p.innerText)
}

// 1.4 Usa querySelector para mostrar por consola todos los elementos con 
// 	la clase.pokemon
const pokemon = document.querySelectorAll(".pokemon");
for (poke of pokemon){
    console.log(poke.innerText)
}

// 1.5 Usa querySelector para mostrar por consola todos los elementos con 
// el atributo data-function="testMe".
const testme = document.querySelectorAll("*[data-function='testMe']");
for (test of testme){
    console.log(test.innerText)
}

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe".
console.log(testme[2].innerText)
