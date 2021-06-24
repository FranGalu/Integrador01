//La lista de temas debe recuperarse desde el storage del navegador y presentarse al usuario. Cada tema será un link que lleve a su correspondiente página de detalle.

//Recuperando storage
let recuperoStorage = localStorage.getItem('favoritos');
//Traigo el array
let favoritos = JSON.parse(recuperoStorage);
//Donde quiero los datos?
let otra = document.querySelector('.otra');
 
//Recorrer array

for (let i=0; i<favoritos.length; i++){
     buscarYMostrarFavoritos(favoritos[i]);
      }
function buscarYMostrarFavoritos(id){
let proxy = 'https://cors-anywhere.herokuapp.com/';
let playlist = `https://api.deezer.com/track/${id}`; 
let url = proxy + playlist;

     fetch(url)
       .then(function(response){
             return response.json();
        })
         .then(function (data){
           console.log(data)
           let resultados = '';
          otra.innerHTML += `
          <ul class= "favs"  >
            <li>
                <h2 class="tul">${data.title} </h2>
                <a href="detalle-cancion.html?id=${data.id}">  <img class= "imgs" src="${data.artist.picture_medium}"> </a>
                 </li> 

           </ul>`
             

         } ) 
       .catch(function (error){
           console.log(error);
         })
        
}
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
