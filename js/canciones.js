//Detalle de una canción  
let queryString = location.search; // Obtengo la qs, location es una propiedad de window y search me trae la qs
let qsToObject = new URLSearchParams(queryString); // Un objeto literal basado en la qs
let idCancion = qsToObject.get('id'); // Obtengo el id de la cancion  

let urlDetalleCancion = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${idCancion}`

fetch(urlDetalleCancion)
 .then(function(response){
     return response.json();  // Procesarlo y dejarlo en un objeto literal para que yo lo pueda trabajar 
 })
 .then(function(data){
    console.log(data);
    let detalleimg = document.querySelector('.detalleimg') 
    let nombrecancion = document.querySelector('.nombrecancion');
    let nombreartista = document.querySelector('.nombreartista')
    let nombredisco = document.querySelector('.nombredisco')
    let playercancion = document.querySelector('.player')

    detalleimg.src = `https://e-cdns-images.dzcdn.net/images/cover/${data.md5_image}/528x528-000000-80-0-0.jpg`;
    nombrecancion.innerText = data.title;
    nombreartista.innerText = data.artist.name;
    nombredisco.innerText = data.album.title; 
    playercancion.src = `https://widget.deezer.com/widget/dark/track/${idCancion}`
    
   

    //Guardar favoritos 
    let favoritos = [];

    //Chequear si hay algo en favoritos
    let recuperoStorage = localStorage.getItem("favoritos");  //primero traigo los datos, no importa si hay o no algo. una propiedad de localstorage q permite recuperar algo (get item), dentro de esta indicar cual es la posicion que queremos recuperar (favoritos)


    if(recuperoStorage) { // si este if cuando pregunta tiene un null o undefined => esas dos situaciones van a evaluar en el if como false // si tiene una variable, lo q devuleve es true 
        let favoritosToArray = JSON.parse(recuperoStorage)
        favoritos = favoritosToArray
    } // le preguntamos si recupero storage es distinto de undefined. si es distinto de undefines quiero q se quede osea lo tengo q pasar a parse (transformar una cadena de texto en formato de json a escuwn dato), y eso q recupere lo quiero guardar en mi array de favoritos 


    let link= document.querySelector(".addplaylist"); 

    //Definir evento para el link 
    link.addEventListener("click", function(evento){    // evento es un parametro, cuando lo use adentro hay q respetar lo q pusimos aca
        //evitar default del link
        evento.preventDefault()  // frenar el link

        //Agregar un data al array 
        favoritos.push(idCancion)

        //Agregar el array a localStorage. Antes hay que pasarlo a string
        let cancionFavoritosToString = JSON.stringify(favoritos);
        localStorage.setItem('favoritos', cancionFavoritosToString) //el favoritos es= dentro de mi objeto literal donde lo voy a guardar, y el segundo parametro son los datos 
 
        console.log(localStorage);
        //Minuto 40 del video 
    })

 })
 .catch(function(error){
     console.log(error);
 })