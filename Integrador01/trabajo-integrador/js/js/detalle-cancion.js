//El player para escuchar la canción.La posibilidad de agregar la canción a “mi playlist”.El link para ver la playlist personal.
//La información de cada página de detalles debe provenir de forma dinámica desde la API. Para acceder a cada página de detalle deberán incorporar query strings en la URL (indicando qué número de artist/album/track) para obtener los datos puntuales desde la API.
//Cada referencia en las páginas de detalle debe permitir navegación. Ejemplo: si en el detalle de canciones se ve el nombre de un artista al clickear sobre el nombre del artista el sitio debe llevarme al detalle del cantante.
//Las canciones seleccionadas como favoritas deben guardarse en el storage del navegador. Si la canción fue seleccionada debe indicarse la posibilidad de quitarla de la playlist.
//Agregar gif a lista de favoritos.
let favoritos = [];

//Cuando el usuario haga click en "agregar favoritos" agregar id del gif dentro del array
let fav = document.querySelector ('.fav');
console.log (fav);
 fav.addEventListener('click', function (event){
    fav.preventDefault ();
    console.log(event);
//Guardamos el id en el array
    favoritos.push(id);
    console.log (favoritos);
    //Armamos un string
    let favParaStorage = JSON.stringify(favoritos);

    localStorage.setItem ('favoritos', favParaStorage); 
    console.log(localStorage); 
})
