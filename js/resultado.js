//La página deberá mostrar:
//El término buscado. Ejemplo: “Resultados de búsqueda para: término ingresado en el input.”
//La lista de resultados que coincidan con el término buscado.
//Los resultados deberán ser hipervínculos a las páginas de detalle correspondientes.
//Para el caso de no haber resultados que coincidan con el término buscado la página debe avisar al usuario que no hay coincidencias.
//Si la búsqueda tarda en cargar deberá aparecer un spinner, gif animado o mensaje que dé al usuario referencia de que el procesos se está ejecutando. El elemento debe ocultarse una vez que el contenido de la página haya cargado por completo.



let queryString = location.search
let queryStringToObject = new URLSearchParams(queryString);
let busqueda = queryStringToObject.get('buscar');

let buscado = document.querySelector('.buscado');
buscado.innerText = busqueda;

let proxy = 'https://cors-anywhere.herokuapp.com/';
let search = `https://api.deezer.com/search?q=${busqueda}`
let url = proxy + search

fetch(url)
.then(function(response){
    return response.json(); 
})
.then(function(data){
    console.log(data);

    let lista = document.querySelector('.mini');
    let devuelve = '';

    for(let i=0; i<data.data.length; i++){
           
            devuelve += `<li>
                            <p>${data.data[i].title}</p>                                                    
                         </li>` 

                         
    }

    lista.innerHTML += devuelve


  })

    .catch(function (error){
      console.log('El error fue: ' + error);
   })