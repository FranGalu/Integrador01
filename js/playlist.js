//La lista de temas debe recuperarse desde el storage del navegador y presentarse al usuario. Cada tema será un link que lleve a su correspondiente página de detalle.

let recuperoStorage = localStorage.getItem('favoritos');
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
            
            let otra = document.querySelector('.otra a') 
            otra.innerText = data.name;
            otra.href = `detalle-cancion.html?id=${data.name.id}`; 
            

            otra.innerHTML += ` 
            
        <p class="tul">${data.title} </p>
            <a href=""><img class= "imgs" src="${data.artist.picture_medium}" ></a>
            `
        

          } ) 
          .catch(function (error){
              console.log(error);
          })
        
        }