//La información debe provenir de forma dinámica desde la API. Al hacer click sobre un género accederemos a la página de detalle con la información del género clickeado.


let proxy = 'https://cors-anywhere.herokuapp.com/';
let generos = 'https://api.deezer.com/genre';
let url = proxy + generos; 

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let generosContainer = document.querySelector('.sacar');
        let generos = ''
        
      for(let i=0; i<data.data.length; i++){
            generos += `<li class="generos"> <p class="agrandar"> ${data.data[i].name}</p> 
                            <a href="detalle-genero.html?id=${data.data[i].id}">
                            <img class="imagenes" src="${data.data[i].picture_medium}" alt="">
                            </a>
                        </li>`
        }

        generosContainer.innerHTML += generos
    })


    .catch(function(error){
        console.log(error);
    })

