
//Detalle de cada Genero

let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString);
let id = queryStringToObject.get('id');


let proxy = 'https://cors-anywhere.herokuapp.com/';
let genre = `https://api.deezer.com/genre/${id}/artists`;
let url1 = proxy + genre;

let genre2 = `https://api.deezer.com/genre/${id}`;
let url2 = proxy + genre2;

  fetch(url2)
      .then(function(response){
          return response.json(); 
      })
      .then(function(data){
          console.log(data);

          let nombre = document.querySelector('.cualca');
          let imagen = document.querySelector('.image');
          nombre.innerText = data.name;
          imagen.src = data.picture_medium;
        })
      
      .catch(function (error){
            console.log('El error fue: ' + error);
         })
  


   fetch(url1)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let generosContainer = document.querySelector('.sacar');
        let generos = '';
        

       
        
      for(let i=0; i<data.data.length; i++){
            generos += `
                         <li class="generos"> <p class="agrandar"> ${data.data[i].name}</p> 
                            <a href="detalle-artista.html?id=${data.data[i].id}">
                            <img class="imagenes" src="${data.data[i].picture_medium}" alt="">
                            </a>
                        </li>`
        }

        generosContainer.innerHTML += generos;
    })


      .catch(function(error){
         console.log(error);
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
    

