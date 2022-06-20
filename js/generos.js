fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre')
    .then(function (response) {
        return response.json()
    })

    .then(function (data) {
        console.log(data);

        for (i = 0; i < 5; i++)
            document.querySelector('.generos').innerHTML +=
    `<li>
    <a class="index" href="./detalledelgenero.html?id=${data.data[i].id}">
    <h4>${data.data[i].name}</h4>
    <img src="${data.data[i].picture}" alt="foto16">
    </a>
    </li>`
    })

    .catch(function (error) {
        console.log(error);
    })
