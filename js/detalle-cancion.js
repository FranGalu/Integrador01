//El player para escuchar la canción.La posibilidad de agregar la canción a “mi playlist”.El link para ver la playlist personal.
//La información de cada página de detalles debe provenir de forma dinámica desde la API. Para acceder a cada página de detalle deberán incorporar query strings en la URL (indicando qué número de artist/album/track) para obtener los datos puntuales desde la API.
//Cada referencia en las páginas de detalle debe permitir navegación. Ejemplo: si en el detalle de canciones se ve el nombre de un artista al clickear sobre el nombre del artista el sitio debe llevarme al detalle del cantante.
//Las canciones seleccionadas como favoritas deben guardarse en el storage del navegador. Si la canción fue seleccionada debe indicarse la posibilidad de quitarla de la playlist.
window.addEventListener('load', function(){
  let loader = document.querySelector('.load');
  loader.style.display = 'none';

//Detalle de cada canción

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
              artist.href = `detalle-artista.html?id=${data.artist.id}`;
              artist.innerText = data.artist.name;
            
              let tapa = document.querySelector('.dakiti');
                        tapa.src = data.album.cover_big;

              let disco = document.querySelector('.album a'); 
                       disco.innerText = data.album.title;  
                       disco.href = `detalle-album.html?id=${data.album.id}`;

    //El player para escuchar la canción.
              let player = document.querySelector('.player');
                       player.innerHTML += `<iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${id}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`; 
             
            
        artist.style.color = "white";
        artist.style.fontSize = "20px"; 
           
        disco.style.color = "white";
        disco.style.fontSize = "20px";
            })
          
         .catch(function (error){
             console.log('El error fue: ' + error);})



   //La posibilidad de agregar la canción a “mi playlist”

     //Paso 1: necesitamos un array
             let favoritos = [];
    //Paso 8: Recuperar datos del Storage
            let recuperoStorage = localStorage.getItem('favoritos');
         

            //Creamos un if por si hay información en el Storage
          if(recuperoStorage != null){
            favoritos = JSON.parse(recuperoStorage);
          }
           //Paso 9: Chequear que el id este en el array y cambiar el texto
           if(favoritos.includes(id)){
             document.querySelector('.presione').innerText = "Quitar de mi playlist";
           }

    //Paso 2: Capturamos donde vamos a poder guardar la información en nuestra variable
            let presione = document.querySelector('.presione');
            console.log(presione);
          
                   presione.style.color = "white";
                    presione.style.fontSize = "25px";

    //Paso 3: Agregar al link un event listener con el evento click
            presione.addEventListener("click", function(e){
             //Paso 4: evitar comportamiento default
               e.preventDefault();

              if(favoritos.includes(id)){
                  let idASacar = favoritos.indexOf(id);
                  favoritos.splice(idASacar,1);
                  document.querySelector('.presione').innerText = "Agregar a mi playlist";
              } else{
                //Paso 5: Hacemos push para agregarle informacion a nuestro array
                  favoritos.push(id);
                  console.log(favoritos);
                  document.querySelector('.presione').innerText = "Quitar de mi playlist ";
            }
             
             //Paso 6: necesitamos guardar la informacion en el storage
              let presioneParaStorage = JSON.stringify(favoritos);
            //Paso 7: La metemos en el storage
              localStorage.setItem('favoritos', presioneParaStorage);
              console.log(localStorage);
             
            })
            
        
      



//Formulario
       
let formulario = document.querySelector('.buscador');
let buscador = document.querySelector('[name="buscar"]');
let alert = document.querySelector('.alerta');
let closeIcon = document.querySelector('.alIcono');



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

//limpiar el mensaje de error cuando el usario modifique el contenido del campo input.
buscador.addEventListener('input', function(){
alert.innerText = '';
closeIcon.style.display = 'none';
})
})

            
            
     
     
         
     
            
      
             
     