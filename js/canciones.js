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

    detalleimg.src = data.album.md5_image;
    nombrecancion.innerText = data.title;
    nombreartista.innerText = data.artist.name;
    nombredisco.innerText = data.album.title; 


    //Guardar favoritos 
    let favoritos = [];

    let link= document.querySelector("a");  // revisar esto

    //Definir evento para el link 
    link.addEventListener("click", function(evento){    // evento es un parametro, cuando lo use adentro hay q respetar lo q pusimos aca
        //evitar default del link
        evento.preventDefault()

        //Agregar un data al array 
        let cancionFavoritos = favoritos.push(idCancion)

        //Agregar el array a localStorage. Antes hay que pasarlo a string
        let cancionFavoritosToString = JSON.stringify(cancionFavoritos)

        localStorage.setItem('favoritos', cancionFavoritosToString)
 
        console.log(localStorage);
        //Minuto 40 del video 
    })

 })
 .catch(function(error){
     console.log(error);
 })