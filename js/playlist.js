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
            
<<<<<<< HEAD
            let otra = document.querySelector('.otra a'); 
           
      
            otra.innerHTML += ` 
            <a href=""></a>  
        <p class="tul">${data.title} </p>
            <img class= "imgs" src="${data.artist.picture_medium}" >
            `
=======
            let otra = document.querySelector('.otra a') 
            otra.innerText = data.title;
            
            

            for (let i = 0; i < favoritos.length; i++) {
                otra.innerHTML += ` 
            
        <p class="tul">${data.title} </p>
            <a href="detalle-cancion.html?id=${data.title}"><img class= "imgs" src="${data.artist.picture_medium}" ></a>`
                
            }
>>>>>>> 951e65b3af2133c687d3a21263fc808cd18afe91
        

          } ) 
          .catch(function (error){
              console.log(error);
          })
        
        }