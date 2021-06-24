//La información de los listados debe provenir de forma dinámica desde la API. Al hacer click sobre un elemento pasaremos a la página de detalle del elemento clickeado. Ejemplo: si hacemos click sobre una canción/ tema el sitio deberá llevarnos al detalle de de esa canción/ tema. Lo mismo debe suceder con los artistas y los álbumes/ discos.



//El buscador deberá validar:
//Que el campo no esté vacío. Si está vacío avisarle por pantalla al usuario.
//Que el término buscado tenga al menos 3 caracteres. Si no los tiene avisar por pantalla al usuario

window.addEventListener('load', function(){
  let loader = document.querySelector('.load');
  loader.style.display = 'none';

let proxy = 'https://cors-anywhere.herokuapp.com/';
let canciones = 'https://api.deezer.com/chart/0/tracks';
let url1 = proxy + canciones; 

fetch(url1)
      .then( function(response){
          return response.json(); 
      })
      .then( function(data){
          console.log(data);
          //Nos quedamos solo con el array de datos
          let info = data.data
           // Obtenermos contendor
           let lista = document.querySelector('.canciones');
           //Definimos variable para poner el contenido
           let canciones = '';
         //Bucle para recorrer los datos
         for(let i=0; i<info.length; i++){
             canciones += `<li class="lista">
                            <div class="achicar">
                              <div class="espacio">
                                <p class="nombres">  ${info[i].title}</p>                            
                                <p class= "nombres">Por: ${info[i].artist.name} </p>   
                              </div>                           
                              <a href="detalle-cancion.html?id=${info[i].id}"> 
                                <img class="principal" src="${info[i].album.cover_medium}" alt="foto" 
                            </a>
                            </div>
                            <a href="detalle-cancion.html?id=${info[i].id}"> 
                              <img class= "play" src="./img/play4.png" alt="">
                            </a>                            
                          </li>`
         }

         lista.innerHTML += canciones;
      })
      .catch(function (error){
         console.log('El error fue: ' + error);
      })
    


 let albumes = 'https://api.deezer.com/chart/0/albums';
 let url2 = proxy + albumes;

fetch (url2)
        .then(function (response){
             return response.json();
            })
        .then( function(data){
            console.log(data);
              let info = data.data
              let lista = document.querySelector('.album');
              let albumes = '';

        for(let i=0; i<info.length; i++){
                albumes +=`<li class="lista">
                            <div class="achicar">
                              <div class="espacio">
                                <p class="nombres">${info[i].title}</p>
                                <p class="nombres">Por: ${info[i].artist.name}</p>
                              </div>  
                              <a href="detalle-album.html?id=${info[i].id}">
                                <img class="principal" src="${info[i].cover_medium}" alt="foto">
                              </a>
                            </div>
                            <a href="detalle-album.html?id=${info[i].id}">    
                              <img class= play  src="./img/play4.png" alt="">
                            </a>
                          </li>`
                                }
                                    lista.innerHTML += albumes;
                                })

       .catch(function (error){
     console.log('El error fue: ' + error);
       })
   
let artistas = 'https://api.deezer.com/chart/0/artists';
let url3 = proxy + artistas;
fetch (url3)
           .then(function (response){
               return response.json();
           })
           .then(function (data){
             console.log(data);
               let info= data.data; 
               let lista= document.querySelector('.artistas');
               let artistas= '';
        
           for(let i=0; i<info.length; i++){
            artistas +=`<li class="lista">
                          <div class="achicar">
                            <div class="espacio">
                              <p class="nombres">${info[i].name}</p> 
                            </div>
                            <a href="detalle-artista.html?id=${info[i].id}"> 
                              <img class="principal" src="${info[i].picture_medium}" alt="foto">
                            </a>
                          </div>  
                          <a href="detalle-artista.html?id=${info[i].id}">               
                            <img class= play  src="./img/play4.png" alt="">
                          </a>
                        </li> `

                            }
                                lista.innerHTML += artistas;
                            })

    .catch(function (error){
  console.log('El error fue: ' + error);

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

let formulario = document.querySelector('form');
let campoBuscar = document.querySelector('[name="milanesa"]');
let alert = document.querySelector('.alert');
let closeIcon = document.querySelector('.closeIcon');


formulario.addEventListener('submit', function(e){
    e.preventDefault();

    if(campoBuscar.value == ""){
        alert.innerText = 'El campo no puede estar vacío';
        closeIcon.style.display = 'inline'            
    } else if( campoBuscar.value.length < 3){
        alert.innerText = 'Por favor ingrese más de 3 caracteres';
        closeIcon.style.display = 'inline'
    } else {
        this.submit();
    }
})

//limpiar el mensaje de error cuando el usario modifique el contenido del campo input.
campoBuscar.addEventListener('input', function(){
    alert.innerText = '';
    closeIcon.style.display = 'none';
})