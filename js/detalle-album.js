//La información de cada página de detalles debe provenir de forma dinámica desde la API. Para acceder a cada página de detalle deberán incorporar query strings en la URL (indicando qué número de artist/album/track) para obtener los datos puntuales desde la API.
//Cada referencia en las páginas de detalle debe permitir navegación. Ejemplo: si en el detalle de canciones se ve el nombre de un artista al clickear sobre el nombre del artista el sitio debe llevarme al detalle del cantante.
//Las canciones seleccionadas como favoritas deben guardarse en el storage del navegador. Si la canción fue seleccionada debe indicarse la posibilidad de quitarla de la playlist.
let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString);
let id = queryStringToObject.get('id');

let proxy = 'https://cors-anywhere.herokuapp.com/';
let album = `https://api.deezer.com/album/${id}`;
let url = proxy + album;

   fetch(url)
    .then( function(response){
        return response.json();
    })

    .then( function(data){
        console.log(data);

        let image = document.querySelector('.don');
        image.src = data.cover_xl;

        let title = document.querySelector('.tld');
        title.innerText = data.title;

        
        let artist = document.querySelector('.artista a');
        artist.innerText += data.artist.name;
        artist.href =  `detalle-artista.html?id=${data.artist.id}`


        let date = document.querySelector('.date');
        date.innerText = 'Fecha de lanzamiento: '+ data.release_date;

        let genero = document.querySelector('.genero')
        let genres = data.genres.data
        
        for (let i = 0; i < genres.length; i++) {
            genero.innerHTML += `Genero: <a href="detalle-genero.html?id=${genres[i].id}"> ${genres[i].name}</a> ` 
            
        }

        let tracks = data.tracks.data;
        let lista = document.querySelector('.cancionesdon');

        
    
   
        for(let i=0; i<tracks.length; i++){
        
                   lista.innerHTML += `
                    <div class="don3">
                    <a class="blanco" href="detalle-cancion.html?id=${tracks[i].id}">
                        <li class="don1"> 
                        ${tracks[i].title} </li>
                   
                    </a> 
                    </div>      `

                  
         }
         

    })
    .catch(function (error){
        console.log('El error fue: ' + error);})
             


    

       
 
        