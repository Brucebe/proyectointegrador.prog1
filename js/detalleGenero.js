let queryString = location.search; 
let qsToObject = new URLSearchParams(queryString); 
let idGenero = qsToObject.get('id');

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${idGenero}`)
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data);
        let nombreGenero = data.name
        document.querySelector('.tituloDeGenero').innerHTML = nombreGenero + '  <i class="fa-solid fa-music"></i>'

        fetch (`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${idGenero}/artists`)
            .then(function(response){
                return response.json()
            })

            .then(function(data){
                console.log(data);
                for(i=0; i<5; i++){
                    let nombreArtista = data.data[i].name
                    let fotoDelArtista = data.data[i].picture
                    let link = `./detalleartistas.html?id=${data.data[i].id}`

                    document.querySelector('.generos').innerHTML+=
                    `
                    <li>
                    <a class="index" href="${link}">
                        <h4>${nombreArtista}</h4>
                        <img src="${fotoDelArtista}" alt="foto21">
                    </a>
                </li>
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