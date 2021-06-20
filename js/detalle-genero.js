//(Atentos! Van a necesitar explorar un poco más en detalle la API)
//La información debe provenir de forma dinámica desde la API. Al hacer click sobre un artista la página debe llevarnos al detalle del artista seleccionado. Para acceder a cada página de detalle deberán incorporar query strings en la URL (indicando qué número de género) para obtener los datos puntuales desde la API.

let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString);
let id = queryStringToObject.get('id');

let proxy = 'https://cors-anywhere.herokuapp.com/';
let genre = `https://api.deezer.com/genre/${id}`;
let url = proxy + genre;

fetch(url)
      .then(function(response){
          return response.json(); 
      })
      .then(function(data){
          console.log(data);

          let nombre = document.querySelector('.cualca')
          let imagen = document.querySelector('.image')
          nombre.innerText = data.name
          imagen.src = data.picture_big
        })
      
          .catch(function (error){
            console.log('El error fue: ' + error);
         })