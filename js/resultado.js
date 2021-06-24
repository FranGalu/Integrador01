//La página deberá mostrar:
//El término buscado. Ejemplo: “Resultados de búsqueda para: término ingresado en el input.”
//La lista de resultados que coincidan con el término buscado.
//Los resultados deberán ser hipervínculos a las páginas de detalle correspondientes.
//Para el caso de no haber resultados que coincidan con el término buscado la página debe avisar al usuario que no hay coincidencias.
//Si la búsqueda tarda en cargar deberá aparecer un spinner, gif animado o mensaje que dé al usuario referencia de que el procesos se está ejecutando. El elemento debe ocultarse una vez que el contenido de la página haya cargado por completo.



let queryString = location.search
let queryStringToObject = new URLSearchParams(queryString)
let busqueda = queryStringToObject.get('buscar')

let buscado = document.querySelector('.buscado');
buscado.innerText = busqueda;

let proxy = 'https://cors-anywhere.herokuapp.com/';
let searchTrack = `https://api.deezer.com/search/track?q=${busqueda}`
let searchAlbum = `https://api.deezer.com/search/album?q=${busqueda}`
let searchArtist = `https://api.deezer.com/search/artist?q=${busqueda}`
let urlTrack = proxy + searchTrack
let urlAlbum = proxy + searchAlbum
let urlArtist = proxy + searchArtist

         fetch(urlTrack)
              .then(function(response){
                      return response.json(); 
              })
              .then(function(data){
                      console.log(data);

                      let lista = document.querySelector('.mini');
                      let devuelve = '';
                    
                      for(let i=0; i<data.data.length; i++){
                            
                              devuelve += `<a class="blanco" href="detalle-cancion.html?id=${data.data[i].id}">
                                          <li>
                                              <p>${data.data[i].title}</p>                                                                          
                                          </li>
                                          </a>` 

                                          
                      }

                      lista.innerHTML += devuelve


              })

              .catch(function (error){
                        console.log('El error fue: ' + error);
              })


          fetch(urlAlbum)
              .then(function(response){
                      return response.json(); 
              })
              .then(function(data){
                      console.log(data);

                      let lista = document.querySelector('.mino');
                      let devuelve = '';
                    
                      for(let i=0; i<data.data.length; i++){
                            
                              devuelve += `<a class="blanco" href="detalle-album.html?id=${data.data[i].id}">
                                          <li>
                                              <p>${data.data[i].title}</p>                                                                          
                                          </li>
                                          </a>` 

                                          
                      }

                      lista.innerHTML += devuelve


              })

              .catch(function (error){
                        console.log('El error fue: ' + error);
              })

          fetch(urlArtist)
              .then(function(response){
                      return response.json(); 
              })
              .then(function(data){
                      console.log(data);

                      let lista = document.querySelector('.minu');
                      let devuelve = '';
                    
                      for(let i=0; i<data.data.length; i++){

                        if (data.data[i].length = null) {
                        devuelve += '<p>No hay resultados para la busqueda de artistas  </p>'
                                
                        }

                        else (
                            
                              devuelve += `<a class="blanco" href="detalle-artista.html?id=${data.data[i].id}">
                                          <li>
                                              <p>${data.data[i].name}</p>                                                                          
                                          </li>
                                          <a/>` 
     
                        )}
                      
                      lista.innerHTML += devuelve
        


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

            