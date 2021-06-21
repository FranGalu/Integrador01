//La información de los listados debe provenir de forma dinámica desde la API. Al hacer click sobre un elemento pasaremos a la página de detalle del elemento clickeado. Ejemplo: si hacemos click sobre una canción/ tema el sitio deberá llevarnos al detalle de de esa canción/ tema. Lo mismo debe suceder con los artistas y los álbumes/ discos.



//El buscador deberá validar:
//Que el campo no esté vacío. Si está vacío avisarle por pantalla al usuario.
//Que el término buscado tenga al menos 3 caracteres. Si no los tiene avisar por pantalla al usuario

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
             canciones += `<li class="lista"><p class="nombres">  ${info[i].title}</p>
                            <p class= "nombres"> ${info[i].artist.name}</p>
                               <a href="detalle-cancion.html"> <i><img class= "play" src="./img/play4.png" alt="" ></i> </a>
                             <a href="detalle-cancion.html?id=${info[i].id}"> 
                 <img class="principal" src="${info[i].album.cover_medium}" alt="foto">
                             </a>
                         </li> 
                                 `
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
                albumes +=`<li class="lista"><p class="nombres">${info[i].title}</p>
                                             <p class="nombres">${info[i].artist.name}</p>
                <a href="detalle-album.html?id=${info[i].id}"> <i><img class= play  src="./img/play4.png" alt=""></i>
               
                </a>
                <a href="detalle-album.html?id=${info[i].id}">
                    <img class="principal" src="${info[i].cover_medium}" alt="foto">
                    </a>
                </li>    `
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
            artistas +=`    <li class="lista">
                          <p class="nombres">${info[i].name}</p> 
            <a href="detalle-artista.html?id=${info[i].id}"> <i><img class= play  src="./img/play4.png" alt=""></i>
               </a>
               <a href="detalle-artista.html?id=${info[i].id}"> 
                <img class="principal" src="${info[i].picture_medium}" alt="foto">
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
    let closeIcon = document.querySelector('.closeIcon');


    formulario.addEventListener('submit', function(e){
        e.preventDefault();

        if(buscador.value == ""){
          Swal.fire('Any fool can use a computer');
          
        


            //closeIcon.style.display = 'inline'            
        } else if( buscador.value.length < 3){
            
            //closeIcon.style.display = 'inline'
        } else {
            this.submit();
        }
    })

   //limpiar el mensaje de error cuando el usario modifique el contenido del campo input.
   campoBuscar.addEventListener('input', function(){
    alert.innerText = '';
    closeIcon.style.display = 'none';
})
      
