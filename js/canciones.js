//Detalle de una canción  
let queryString = location.search; // Obtengo la qs
let qsToObject = new URLSearchParams(queryString); // Un objeto literal basado en la qs
let idCancion = qsToObject.get('id'); // Obtengo el id de la cancion  


fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/track/3135556')
 .then(function(response){
     return response.json()
 })
 .then(function(data){
    console.log(data);

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