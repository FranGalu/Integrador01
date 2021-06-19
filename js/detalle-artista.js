//La información de cada página de detalles debe provenir de forma dinámica desde la API. Para acceder a cada página de detalle deberán incorporar query strings en la URL (indicando qué número de artist/album/track) para obtener los datos puntuales desde la API.
//Cada referencia en las páginas de detalle debe permitir navegación. Ejemplo: si en el detalle de canciones se ve el nombre de un artista al clickear sobre el nombre del artista el sitio debe llevarme al detalle del cantante.
//Las canciones seleccionadas como favoritas deben guardarse en el storage del navegador. Si la canción fue seleccionada debe indicarse la posibilidad de quitarla de la playlist.
fetch(url)
    .then( function(response){
        return response.json();
    })
    .then( function(data){
        console.log(data);
        let tracks = data.tracks.data;
        let lista = document.querySelector('.cancionesdon'); 

        for(let i=0; i<info.length; i++){
        
            album +=     `<a href="https://www.youtube.com/watch?v=roSnFm4zsPE"> <img class="don" src"${info[i].picture_medium}" alt="albumes"> </a>
            <div class="don2" >
                    <h1 class="tld">"${info[i].title}"</h1> 
                <div class="datos"> 
                    <h2> <a class="blanco" href="detalle-artista.html"> Artista: ${info[i].title} </a></h2>
                    <h2> <a class="blanco"href="detalle-genero.html"> Género: ${info[i].genres.data.name} </a></h2>
                    <h4>Publicación: ${info[i].release_date}</h4> 
                </div> 
            </div>          `          } 

          for(let i=0; i<tracks.name; i++){
                   lista.innerHTML += `
                     <div class="don3">
                        <div class="dondon">
                            
        
                            <li class="don1">${info[i].tracks.data.artist}</li>
        
                          
                        </div>  
                        <div class="dondon">
                            <ol type="a" start="8" class="cancionesdon">
                     
                            <li class="don1"></li>
        
                            </ol>
                        </div>
              
                    </div>      ` } 
             

                 }   )

    //Nos quedamos solo con el array de datos

        //let image = document.querySelector('img');
      //  let title = document.querySelector('.tld');
       // let artista = document.querySelector('.artista');
        //let año = document.querySelector('.año')
    // image.src = 
     //title.innerText = 
      //  artista.innerText = 
      //  año.innerText = 

      .catch(function (error){
        console.log('El error fue: ' + error);
      })