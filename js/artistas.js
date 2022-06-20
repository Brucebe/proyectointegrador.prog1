let queryString = location.search; 
let qsToObject = new URLSearchParams(queryString); 
let idArtista = qsToObject.get('id'); 

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${idArtista}`)
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data);

    let fotoDelArtista = document.querySelector('.detalleimg')
    let nombreArtista = document.querySelector('.nombreArtista')
    let topTracks = document.querySelector('.topTracks')

    nombreArtista.innerText = 'Nombre del Artista: ' + data.name;

        fetch(`https://cors-anywhere.herokuapp.com/${data.tracklist}`)
        .then(function(response){
            return response.json()
        })

        .then(function(data){
            console.log(data);
            for(i=0; i<5; i++){
                let idCancion = data.data[i].id
                let titulo = data.data[i].title
                let link = `./detallecanciones.html?id=${idCancion}`
                topTracks.innerHTML+=
                `
                <li>
                <a href="${link}">${titulo}</a></li>
                `
            }
            
        })

        .catch(function(error){
            console.log(error);
        })
       

    })

    .catch(function(error){
        console.log(error);
    })
    