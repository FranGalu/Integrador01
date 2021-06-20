//El player para escuchar la canción.La posibilidad de agregar la canción a “mi playlist”.El link para ver la playlist personal.
//La información de cada página de detalles debe provenir de forma dinámica desde la API. Para acceder a cada página de detalle deberán incorporar query strings en la URL (indicando qué número de artist/album/track) para obtener los datos puntuales desde la API.
//Cada referencia en las páginas de detalle debe permitir navegación. Ejemplo: si en el detalle de canciones se ve el nombre de un artista al clickear sobre el nombre del artista el sitio debe llevarme al detalle del cantante.
//Las canciones seleccionadas como favoritas deben guardarse en el storage del navegador. Si la canción fue seleccionada debe indicarse la posibilidad de quitarla de la playlist.
let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString);
let id = queryStringToObject.get('id');

let proxy = 'https://cors-anywhere.herokuapp.com/';
let dcancion = `https://api.deezer.com/track/${id}`;
let url= proxy + dcancion; 

fetch (url)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
              console.log(data); 

              let title = document.querySelector('.daki');
              let artist = document.querySelector('.artista');
              let tapa = document.querySelector('.dakiti');
              let disco = document.querySelector('.album'); 
              
        
              
              title.innerText = data.title;
              artist.innerText = data.artist.name;
              tapa.src = data.album.cover_big;
              disco.innerText = data.album.title;  
              
               
        artist.style.color = "white";
        artist.style.fontSize = "40px"; 
           
        disco.style.color = "white";
        disco.style.fontSize = "40px";
            })
          
         .catch(function (error){
             console.log('El error fue: ' + error);})

            // let favoritos = [];
            // let fav = document.querySelector('.fav');
            // console.log(fav);



            
            
     
     
         
     
            
      
             
     