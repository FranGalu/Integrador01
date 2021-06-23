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
           let resultados = '';
          otra.innerHTML += `
          <ul class= "favs"  >
            <li>
                <h2 class="tul">${data.title} </h2>
                <a href="">  <img class= "imgs" src="${data.artist.picture_medium}"> </a>
                 </li> 

           </ul>`
             

         } ) 
       .catch(function (error){
           console.log(error);
         })
        
}