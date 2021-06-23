//La información de cada página de detalles debe provenir de forma dinámica desde la API. Para acceder a cada página de detalle deberán incorporar query strings en la URL (indicando qué número de artist/album/track) para obtener los datos puntuales desde la API.
//Cada referencia en las páginas de detalle debe permitir navegación. Ejemplo: si en el detalle de canciones se ve el nombre de un artista al clickear sobre el nombre del artista el sitio debe llevarme al detalle del cantante.
//Las canciones seleccionadas como favoritas deben guardarse en el storage del navegador. Si la canción fue seleccionada debe indicarse la posibilidad de quitarla de la playlist.


let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString);
let id = queryStringToObject.get('id');

let proxy = 'https://cors-anywhere.herokuapp.com/';
let artista = `https://api.deezer.com/artist/${id}`;
let tracklist = `https://api.deezer.com/artist/${id}/albums?limit=5`
let tracklistCompleta = `https://api.deezer.com/artist/${id}/top?limit=100`

let url = proxy + artista;
let url2 = proxy + tracklist;
let url3 = proxy + tracklistCompleta;

   fetch(url)
      .then( function(response){
          return response.json(); 
      })
      .then( function(data){
          console.log(data);

         let nombre = document.querySelector('.O');
         let imagen = document.querySelector('.ozuna');
         let trackContainer = document.querySelector('.re');
         let track = '';
         
            fetch(url2)
                .then( function(response){
                    return response.json();
                })          
                .then( function(data){
                    console.log(data);
                        for (let i=0; i<data.data.length; i++){
                          track += `
                                        <a class="blanco" href="detalle-album.html?id=${data.data[i].id}">
                                        <li class="sin"> <p> ${data.data[i].title}</p>
                                        </li>  
                                        </a> 
                                        
                                    `

                        }
                   trackContainer.innerHTML += track
                })
                .catch(function (error){
                    console.log('El error fue: ' + error);
                    })
                            

         imagen.src = data.picture_big;
         nombre.innerText = data.name
         

      })
      .catch(function (error){
         console.log('El error fue: ' + error);
      })

fetch(url3)
      .then( function(response){
          return response.json(); 
      })
      .then( function(data){
          console.log(data);

          let filasContainer = document.querySelector('.filas')
          let filas = ''
          for (let i=0; i<data.data.length; i++){
              filas += `
                            <li class="columna"> 
                                <p class="nombres"> ${data.data[i].title_short}</p> 
                                <a href="detalle-cancion.html?id=${data.data[i].id}">
                                    <img class="principal" src="${data.data[i].album.cover_medium}" alt="">
                                </a>
                            </li>
                        `    
            }
        filasContainer.innerHTML += filas
        


      })
      .catch(function (error){
           console.log('El error fue: ' + error);
      })
      formulario.addEventListener('submit', function(e){
        e.preventDefault();

        if(buscador.value == ""){
          alert.innerText = 'el campo esta vacio master';
          closeIcon.style.display = 'inline'            
        } else if( buscador.value.length < 3){

          alert.innerText = 'te pido el favor de poner mas de 3 caracteres';
            closeIcon.style.display = 'inline'
        } else {
            this.submit();
        }
    })