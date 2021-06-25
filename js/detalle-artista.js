
let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString);
let id = queryStringToObject.get('id');

//Definimos nuestros Endpoints.
let proxy = 'https://cors-anywhere.herokuapp.com/';
let artista = `https://api.deezer.com/artist/${id}`;
let albumesPopulares = `https://api.deezer.com/artist/${id}/albums?limit=5`
let tracklistCompleta = `https://api.deezer.com/artist/${id}/top?limit=10000`

let url = proxy + artista;
let url2 = proxy + albumesPopulares;
let url3 = proxy + tracklistCompleta;

//Hacemos 3 fetchs. 
fetch(url)
        .then( function(response){
            return response.json(); 
        })
        .then( function(data){
            console.log(data);

            //Para modificar el DOM primero capturamos la imagen y el titulo.
            let nombre = document.querySelector('.O');
            let imagen = document.querySelector('.ozuna');

            //Luego modificamos su contenido.                 
            imagen.src = data.picture_big;
            nombre.innerText = data.name
        })
     
        .catch(function (error){
            console.log('El error fue: ' + error);
        })

         
fetch(url2)
        .then( function(response){
            return response.json();
        })          
        .then( function(data){
            console.log(data);

            //Otra vez, vamos a capturar el elemento que queremos modificar luego.
            let trackContainer = document.querySelector('.re');
            let track = '';
       
            //Vamos a tener que reccorrer el array para obtener nuestra informacion
            for (let i=0; i<data.data.length; i++){
                
                //Agregamos la estrucutra aca ya que es variable la informacion que recolectemos.
                track += 
                        `<a class="blanco" href="detalle-album.html?id=${data.data[i].id}">
                            <li class="sin"> <p> ${data.data[i].title}</p>
                            </li>  
                        </a>`
            }
            
            //Finalmente modificamos su contenido. 
            trackContainer.innerHTML += track
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
                filas += 
                        `<li class="columna"> 
                            <p class="nombres"> ${data.data[i].title_short}</p> 
                            <a href="detalle-cancion.html?id=${data.data[i].id}">
                                <img class="principal" src="${data.data[i].album.cover_medium}" alt="">
                            </a>
                        </li>`    
            }
        
            filasContainer.innerHTML += filas
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