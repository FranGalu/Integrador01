
//(Atentos! Van a necesitar explorar un poco más en detalle la API)
//La información debe provenir de forma dinámica desde la API. Al hacer click sobre un artista la página debe llevarnos al detalle del artista seleccionado. Para acceder a cada página de detalle deberán incorporar query strings en la URL (indicando qué número de género) para obtener los datos puntuales desde la API.

let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString);
let id = queryStringToObject.get('id');

let proxy = 'https://cors-anywhere.herokuapp.com/';
let genre = `https://api.deezer.com/genre/${id}/artists`;
let url1 = proxy + genre;

let genre2 = `https://api.deezer.com/genre/${id}`;
let url2 = proxy + genre2;

fetch(url2)
      .then(function(response){
          return response.json(); 
      })
      .then(function(data){
          console.log(data);

          let nombre = document.querySelector('.cualca')
          let imagen = document.querySelector('.image')
          nombre.innerText = data.name
          imagen.src = data.picture_medium
        })
      
          .catch(function (error){
            console.log('El error fue: ' + error);
         })



fetch(url1)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let generosContainer = document.querySelector('.sacar');
        let generos = ''
        

       
        
      for(let i=0; i<data.data.length; i++){
            generos += `
                         <li class="generos"> <p class="agrandar"> ${data.data[i].name}</p> 
                            <a href="detalle-artista.html?id=${data.data[i].id}">
                            <img class="imagenes" src="${data.data[i].picture_medium}" alt="">
                            </a>
                        </li>`
        }

        generosContainer.innerHTML += generos
    })


    .catch(function(error){
        console.log(error);
    })

