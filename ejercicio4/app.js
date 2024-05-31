// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click

buttonposition= document.querySelector('.click')
buttontoclick = document.createElement('button')
buttontoclick.id='btnToClick'
buttontoclick.innerText = 'BOTÓN'
let showevent = function(event) {
    console.log(event);
};
buttontoclick.addEventListener("click", showevent);
document.body.appendChild(buttontoclick)

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const input = document.querySelector('.focus')
showinput = function(variable){
    console.log((variable).value)
}
showinput(input)
input.value='aupa'
showinput(input)
input.addEventListener("focus", function () {
    showinput(input);
  },)

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const input2 = document.querySelector('.value')
console.log(input2)
input2.addEventListener("input", function () {
    showinput(input2);
  },)
//Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
//que imprima cada uno de los albums.


const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
  ];

  ul= document.createElement('ul')
  for (album of albums){
    li= document.createElement('li')
    li.innerText= album
    ul.appendChild(li)
  }
  document.body.appendChild(ul)