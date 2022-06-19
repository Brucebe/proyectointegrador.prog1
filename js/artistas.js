fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart')
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data.artists);
        document.querySelector('.artistas').innerHTML +=
        `
        <li>Nombre del Artista: ${data.data}</li>
                <li> 5 top tracks:
                    <ol>
                        <li><a href="https://www.youtube.com/watch?v=PivWY9wn5ps">Man in the Mirror</a></li>
                        <li><a href="https://www.youtube.com/watch?v=Zi_XLOBDo_Y">Billie Jean</a></li>
                        <li><a href="https://www.youtube.com/watch?v=4V90AmXnguw">Thriller</a></li>
                        <li><a href="https://www.youtube.com/watch?v=oRdxUFDoQe0">Beat it</a></li>
                        <li><a href="https://www.youtube.com/watch?v=h_D3VFfhvs4">Smooth Criminal</a></li>
                    </ol>
                </li>
        `


    })

    .catch(function(error){
        console.log(error);
    })
    