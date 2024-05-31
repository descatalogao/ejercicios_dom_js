//Insertamos la lista con las Ciudades
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ul = document.createElement('ul')
for (country of countries){
    const li = document.createElement('li')
    li.innerText= country
    ul.appendChild(li)
}
document.body.appendChild(ul)

//Eliminamos la clase fn-remove-me
document.body.removeChild(document.querySelector('.fn-remove-me'))

//Creamos el listado de Coches
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corolla'];
const ourdiv= document.querySelector('div[data-function=printHere]')

const ul2 = document.createElement('ul')
for (car of cars){
    const li = document.createElement('li')
    li.innerText= car
    ul2.appendChild(li)
}
ourdiv.appendChild(ul2)

//Título h4 e imagen
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

list= document.createElement('div')
list.className='list'
document.body.appendChild(list)
for (country of countries2){
    div= document.createElement('div')
    div.className='img'
    h4 = document.createElement('h4')
    img = document.createElement('img')
    h4.innerText = country.title
    img.src = country.imgUrl
    div.appendChild(h4)
    div.appendChild(img)
    list.appendChild(div)
}

// Botón para Eliminar el Mismo DIV
max= (list.childNodes.length)

for (let i = 0; i < max; i++){
    button = document.createElement('button')
    button.innerText = (i)
    buttonname= 'id'+ (i)
    button.id = buttonname 
    button.addEventListener('click',() =>{
        console.log(i)
        id = document.getElementById('id'+ (i))
        list.removeChild(id.parentNode)
    })

    list.childNodes[i].appendChild(button)
    
}


//Botón para Eliminar Último DIV

div = document.querySelector('.list')

button2=document.createElement('button')
document.body.appendChild(button2)
button2.innerText= 'PINCHA AQUÍ PARA BORRAR UN DIV'

button2.addEventListener('click', ()=>{
div.removeChild(document.querySelector('div.img:last-child'))
})


