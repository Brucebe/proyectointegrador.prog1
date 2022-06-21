
let queryString = location.search; 
let qsToObject = new URLSearchParams(queryString); 
let idCancion = qsToObject.get('id'); 

let urlDetalleCancion = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${idCancion}`

fetch(urlDetalleCancion)
 .then(function(response){
     return response.json();  
 })
 .then(function(data){
    console.log(data);
    let detalleimg = document.querySelector('.detalleimg') 
    let nombrecancion = document.querySelector('.nombrecancion');
    let nombreartista = document.querySelector('.nombreartista')
    let nombredisco = document.querySelector('.nombredisco')
    let playercancion = document.querySelector('.player')

    detalleimg.src = `https://e-cdns-images.dzcdn.net/images/cover/${data.md5_image}/528x528-000000-80-0-0.jpg`;
    nombrecancion.innerText = 'Nombre de la canción: ' + data.title;
    nombreartista.innerText = 'Nombre del artista: ' + data.artist.name;
    nombredisco.innerText = 'Nombre del album: ' + data.album.title; 
    playercancion.src = `https://widget.deezer.com/widget/dark/track/${idCancion}`
    
   

    //Guardar favoritos 
    let favoritos = [];

    
    let recuperoStorage = localStorage.getItem("favoritos");  //primero traigo los datos, no importa si hay o no algo. una propiedad de localstorage q permite recuperar algo (get item), dentro de esta indicar cual es la posicion que queremos recuperar (favoritos)


    if(recuperoStorage) { // si este if cuando pregunta tiene un null o undefined => esas dos situaciones van a evaluar en el if como false // si tiene una variable, lo q devuleve es true 
        let favoritosToArray = JSON.parse(recuperoStorage)
        favoritos = favoritosToArray
    } // le preguntamos si recupero storage es distinto de undefined. si es distinto de undefines quiero q se quede osea lo tengo q pasar a parse (transformar una cadena de texto en formato de json a escuwn dato), y eso q recupere lo quiero guardar en mi array de favoritos 


    let link= document.querySelector(".addplaylist");

    if(favoritos.includes(idCancion)){
        //cambiarle el mensaje al usuario
        link.innerText = "Sacar de la playlist"
    } // pregunto si el id esta, le voy a cambiar el texto

    //Definir evento para el link 
    link.addEventListener("click", function(evento){    // evento es un parametro, cuando lo use adentro hay q respetar lo q pusimos aca
        //evitar default del link
        evento.preventDefault()  // frenar el link

        if(favoritos.includes(idCancion)){
            //Sacar el id del array
            let gifASacar = favoritos.indexOf(idCancion) // un gif a sacar que sabemos q esta en esta posicion 
            favoritos.splice(gifASacar, 1);     // splice es el metodo que saca, gifASacar es la posicion que encontramos y cuantos queremos sacar

            link.innerText = "Agregar a playlist"

        } else {
            //Agregar un data al array 
            favoritos.push(idCancion)
            //cambiarle el mensaje al usuario
            link.innerText = "Sacar de la playlist"
        } // cuando haga click en el link voy a preguntar si tengo el id adentro del array, si esta, el codigo lo va a sacar y le va a volver a cambiar el texto a agregar a fav, y si no, se pushea adentro del array 


        //Agregar el array a localStorage. Antes hay que pasarlo a string //por fuera del else, lo q va a pasar siempre es q voy a stringifear lo q sea q tenga en el array y gurdarlo en local storage
        let cancionFavoritosToString = JSON.stringify(favoritos); // siempre vamos aestrigifiear el array, osea pasarlo a JSON, y despues lo guardamos en local sotrage en la posicion q querramos, en este caso en favoritos 
        localStorage.setItem('favoritos', cancionFavoritosToString) //el favoritos es= dentro de mi objeto literal donde lo voy a guardar, y el segundo parametro son los datos 
 
        console.log(localStorage);
    })

 })
 .catch(function(error){
     console.log(error);
 })