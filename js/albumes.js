let queryString = location.search;
let qsToObject = new URLSearchParams(queryString);
let idAlbumes = qsToObject.get('id');

fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/album/${idAlbumes}`)
    .then(function (response) {
        return response.json()
    })

    .then(function (data) {
        console.log(data);
        let nombreAlbum = document.querySelector('.nombreAlbum')
        let Artista = document.querySelector('.artista')
        let genero = document.querySelector('.tipoDeGenero')
        let publicacion = document.querySelector('.publicacion')
        let link = `./detalleartista.html${idAlbumes}`

        nombreAlbum.innerText = 'Nombre del disco: ' + data.title
        Artista.innerText = 'Artista: ' + data.artist.name 
        genero.innerText = 'Genero: ' + data.genres.data.name
        publicacion.innerText = 'Publicacion: ' + data.released_date
    })


    .catch(function (error) {
        console.log(error);
    })