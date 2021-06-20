//El player para escuchar la canción.La posibilidad de agregar la canción a “mi playlist”.El link para ver la playlist personal.
//La información de cada página de detalles debe provenir de forma dinámica desde la API. Para acceder a cada página de detalle deberán incorporar query strings en la URL (indicando qué número de artist/album/track) para obtener los datos puntuales desde la API.
//Cada referencia en las páginas de detalle debe permitir navegación. Ejemplo: si en el detalle de canciones se ve el nombre de un artista al clickear sobre el nombre del artista el sitio debe llevarme al detalle del cantante.
//Las canciones seleccionadas como favoritas deben guardarse en el storage del navegador. Si la canción fue seleccionada debe indicarse la posibilidad de quitarla de la playlist.
let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString);
let id = queryStringToObject.get('id');

let proxy = 'https://cors-anywhere.herokuapp.com/';
let dcancion = `https://api.deezer.com/track/3135556${id}`;
let url= proxy + dcancion; 

fetch (url)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
              console.log(data);  })
          
         .catch(function (error){
             console.log('El error fue: ' + error);})

            // let favoritos = [];
            // let fav = document.querySelector('.fav');
            // console.log(fav);



            let seccion  = document.querySelector('.detalleCancion');
            //  seccion.innerHTML += `<div class="D"> 
              
             // <a href="playlist.html" class="favorito"> 
             // <img  class=favorito src="./img/favorito.png" alt=""> </a>
             // <p class="presione">Presione aquí para agregar</p> 
            // </div> `
            
            
            
              let image = document.querySelector('.dakiti');
              let title = document.querySelector('.daki');
              let artist = document.querySelector('.artista');
              let tapa = document.querySelector('.album');
            
            let dcanciones = data.dcanciones.data;
             let lista = document.querySelector('.detalleCancion');
            
              image.src = data.cover_xl;
              title.innerText = data.title;
              artist.innerText = data.artist.name;
              tapa.innerText = data.release_date;
            
             // for(let i=0; i<dcanciones.length; i++){
              
                    //     lista.innerHTML += `section class="detalleCancion">
                     //   <img class="dakiti" src="img/el-ultimo-tour.del-mundo.png" alt="Dakiti">
                      //   <div>
                     
                //  <h1 class="daki">"Dakiti"</h1>  
                         
                 //          <div class="D"> 
                              
                 //             <a href="playlist.html" class="favorito"> 
                    //          <img  class=favorito src="./img/favorito.png" alt=""> </a>
                     //         <p class="presione">Presione aquí para agregar</p> 
                     //      </div>
                      
                       //      <h2> <a class="artista" href="detalle-artista.html"> Artista: Bad Bunny </a></h2> 
                       //      <h2> <a class="album" href="detalle-album.html"> Album: "El último tour del mundo" </a></h2>   
                       //      <iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/TmKh7lAwnBI" 
                       //              title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      //               allowfullscreen>
                      //       </iframe>
                         
                  //       </div> 
                 
              //   </section>
                          // `
                  
            
               //}
               
            
            
     
     
         
     
            
      
             
     