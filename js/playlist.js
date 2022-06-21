// guardar ids en algun lugar. Cual va a ser ese lugar? array y lo guardo en local storage. Porque si lo guardamos en session storage, cuando cierre el navegador desaparece. Y yo lo que quiero hacer es que cada vez que abra el navegador, este array que tiene adentro los ids de mis favoritos, los pueda recuperar.
// Primero identificar id
// Meterlo en un array
// Guardarlo en local storage 

let favoritos = [];
//recuperar el array del storage 
let recuperoStorage = localStorage.getItem("favoritos");
let recuperoStorageToArray = JSON.parse(recuperoStorage);

favoritos = recuperoStorageToArray

//antes del for, capturar la seleccion para completar con datos 
let section = document.querySelector(".cancionesplaylist")
let contenidoSection  = ""

//pedir a la api los datos de las canciones 
for(let i=0; i<favoritos.length ; i++){
    //fetch
    let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${favoritos[i]}`

    fetch(url)  // necesito remplazar ese id por algo 
    .then(function(response){
        return response.json()
    })
    .then(function(data){
    //aca trabajo con los datos 
        contenidoSection += `<article>
                                <a class="playlist" href="./detallecanciones.html?id=${data.id}">
                                <h4>${data.title}</h4>
    
                                <img class= "tamanoimg" src= "https://e-cdns-images.dzcdn.net/images/cover/${data.md5_image}/528x528-000000-80-0-0.jpg">
                                </a>
                            </article>`
                            section.innerHTML = contenidoSection //pasar todos los datos al dom
    })
    .catch(function(error){
    // el q nos va a mostrar los errores 
        console.log(error);
    })
} // tengo un for, que va a pasar por cada pocision de mi array, cada vez q yo pase por una posicion del array voy a ir creando la url, esa url va a pedir datos y me los va a retornar adentro del fetch. y despues quiero guardar cada dato del fetch.
// antes del for-->, adentro del for rellenarla, y al final pasar todos los datos al DOM



//necesitamos ejecutar este fetch, adentro de un bucle, porque tengo q ir remplazando los ids por cada uno que tengo en el array .
//por ende, antes de todo necesito un for que recorra mi array. osea i=0 , despues pasarle i menor a recuperostoragetoarray.length, y por ultimo i++
