//Canciones populares
fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        for (let i = 0; i < 5; i++) {

            document.getElementById('canciones').querySelector('ul').innerHTML +=
                `
        <li>
        <a class="index" href="./detallecanciones.html?id=${data.tracks.data[i].id}">
            <h4>${data.tracks.data[i].title}</h4>
        
        <img class= "tamanoimg" src= "https://e-cdns-images.dzcdn.net/images/cover/${data.tracks.data[i].md5_image}/528x528-000000-80-0-0.jpg">
        </a>
        </li>
        `
        }
        //Albumes populares

        for (let i = 0; i < 5; i++) {

            document.getElementById('albumes').querySelector('ul').innerHTML +=
                `
       <li>
       <a class="index" href="./detallealbumes.html?id=${data.albums.data[i].id}">
           <h4>${data.albums.data[i].title}</h4>
       
       <img class= "tamanoimg" src= "https://e-cdns-images.dzcdn.net/images/cover/${data.albums.data[i].md5_image}/528x528-000000-80-0-0.jpg">
       </a>
       </li>
       `
        }

        //Artistas populares
        for (let i = 0; i < 5; i++) {

            document.getElementById('artistas').querySelector('ul').innerHTML +=
                `
           <li>
           <a class="index" href="./detalleartistas.html?id=${data.artists.data[i].id}">
               <h4>${data.artists.data[i].name}</h4>
           <img class= "tamanoimg" src= "${data.artists.data[i].picture}">
           </a>
           </li>
           `
        }

    })

    .catch(function(error) {
        
        console.log(error);
    })