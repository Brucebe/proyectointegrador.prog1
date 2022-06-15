fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/track/3135556')
 .then(function(response){
     return response.json()
 })
 .then(function(data){
    console.log(data);
 })
 .catch(function(error){
     console.log(error);
 })