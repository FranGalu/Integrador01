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
                          title.innerText = data.title;    

              let artist= document.querySelector ('.artist a');
                          artist.href = `detalle-artista.html?id=${data.artist.id}`
                          artist.innerText = data.artist.name;
            
              let tapa = document.querySelector('.dakiti');
                        tapa.src = data.album.cover_big;

              let disco = document.querySelector('.album a'); 
                       disco.innerText = data.album.title;  
                       disco.href = `detalle-album.html?id=${data.album.id}`;

              let player = document.querySelector('.player');
                         player.innerHTML += `<iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${id}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`; 
             
            

    

       

        artist.style.color = "white";
        artist.style.fontSize = "40px"; 
           
        disco.style.color = "white";
        disco.style.fontSize = "40px";
            })
          
         .catch(function (error){
             console.log('El error fue: ' + error);})

             //AGREGAR la lista de playlist de favoritos
             //necesitamos un array
             let favoritos = [];
            //Recuperar datos del Storage
            let recuperoStorage = localStorage.getItem('favoritos');
          //AGREGAR info del local Storage en el array
          if(recuperoStorage != null){
            favoritos = JSON.parse(recuperoStorage);
          }
           //Quitar favoritos
           if(favoritos.includes(id)){
             document.querySelector('.presione').innerText = "Quitar de mi playlist de favoritos";
           }


            let presione = document.querySelector('.presione');
            console.log(presione);
          
            presione.style.color = "white";
            presione.style.fontSize = "25px";

            presione.addEventListener("click", function(e){
              e.preventDefault();

              if(favoritos.includes(id)){
                  let idASacar = favoritos.indexOf(id);
                  favoritos.splice(idASacar,1);
                  document.querySelector('.presione').innerText = "Agregar a mi playlist de favoritos";
              } else{
                  favoritos.push(id);
                  console.log(favoritos);
                  document.querySelector('.presione').innerText = "Quitar de mi playlist de favoritos";
            }
             
             //necesitamos guardar la informacion en el storage
              let presioneParaStorage = JSON.stringify(favoritos);

              localStorage.setItem('favoritos', presioneParaStorage);
              console.log(localStorage);
             
            })



            
            
     
     
         
     
            
      
             
     