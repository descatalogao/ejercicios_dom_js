// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const div = document.createElement("div");
div.innerText = "";
document.body.appendChild(div)

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const div2 = document.createElement("div");
const p2 = document.createElement("p");
p2.innerText = "Este es el 'p'";
document.body.appendChild(div2);
div2.appendChild(p2)

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
// 	loop con javascript.
const div3 = document.createElement("div");
for (let i=0; i<6; i++){
    const p3 = document.createElement("p");
    p3.innerText = "Este es el 'p con loop'";
    div3.appendChild(p3)
}
document.body.appendChild(div3);


// 2.4 Inserta dinamicamente con javascript en un html una p con el 
// 	texto 'Soy dinámico!'.
const p4 = document.createElement("p");
p4.innerText = 'Soy dinámico!';
document.body.appendChild(p4);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const title= document.querySelector('h2.fn-insert-here');
title.innerText = 'Wubba Lubba dub dub'

// 2.6 Basandote en el siguiente array crea una lista ul > li con 
// los textos del array.
const ul = document.createElement("ul");
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
for (app of apps){
    const li = document.createElement("li");
    li.innerText= (app);
    ul.appendChild(li)
}
document.body.appendChild(ul)

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
toremove = document.querySelectorAll('.fn-remove-me')
// for (item of toremove){
//     item.hidden=true
// }

for (let i=0; i<toremove.length; i++){
    document.body.removeChild(toremove[i].childNodes[0].parentElement)
}
// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.



// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
// 	.fn-insert-here