//La información de cada página de detalles debe provenir de forma dinámica desde la API. Para acceder a cada página de detalle deberán incorporar query strings en la URL (indicando qué número de artist/album/track) para obtener los datos puntuales desde la API.
//Cada referencia en las páginas de detalle debe permitir navegación. Ejemplo: si en el detalle de canciones se ve el nombre de un artista al clickear sobre el nombre del artista el sitio debe llevarme al detalle del cantante.
//Las canciones seleccionadas como favoritas deben guardarse en el storage del navegador. Si la canción fue seleccionada debe indicarse la posibilidad de quitarla de la playlist.

//console.log("Hola");

let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString);
let id = queryStringToObject.get('id');

let proxy = 'https://cors-anywhere.herokuapp.com/';
let artista = `https://api.deezer.com/artist/${id}`;
let url = proxy + artista

fetch(url)
      .then( function(response){
          return response.json(); 
      })
      .then( function(data){
          console.log(data);

         let nombre = document.querySelector('.O');
         let imagen = document.querySelector('.ozuna');
         let contenedor = document.querySelector('.re');
         
         imagen.src = data.picture_big;
         nombre.innerText = data.name

         


      })
      .catch(function (error){
         console.log('El error fue: ' + error);
      })