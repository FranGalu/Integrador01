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
        let title = document.querySelector('.tld');
        let artist = document.querySelector('.Artista');
        let date = document.querySelector('.date');

        let tracks = data.tracks.data;
        let lista = document.querySelector('.cancionesdon');

        image.src = data.cover_xl;
        title.innerText = data.title;
        artist.innerText = data.artist.name;
        date.innerText = data.release_date;
   
        for(let i=0; i<tracks.length; i++){
        
                   lista.innerHTML += `
                    <div class="don3">
                        <div class="dondon">
                            
        
                            <li class="don1">${tracks[i].title}</li>
        
                          
                        </div>  
                        
                    </div>      `
            
    
         }
         

    })
    .catch(function (error){
        console.log('El error fue: ' + error);})
             


    

       
 
        
