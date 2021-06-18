//La información de los listados debe provenir de forma dinámica desde la API. Al hacer click sobre un elemento pasaremos a la página de detalle del elemento clickeado. Ejemplo: si hacemos click sobre una canción/ tema el sitio deberá llevarnos al detalle de de esa canción/ tema. Lo mismo debe suceder con los artistas y los álbumes/ discos.



//El buscador deberá validar:
//Que el campo no esté vacío. Si está vacío avisarle por pantalla al usuario.
//Que el término buscado tenga al menos 3 caracteres. Si no los tiene avisar por pantalla al usuario

let proxy = 'https://cors-anywhere.herokuapp.com/';
let canciones = 'https://api.deezer.com/chart/0/tracks';
let url = proxy + albums; 

fetch(url)
      .then( function(response){
          return response.json(); 
      })
      .then( function(data){
          console.log(data);
          //Nos quedamos s
      })
      .catch


let mensaje = ""

if (TextoBuscador.value = null);
mensaje = "Che no escribiste nada en el buscador"
alert (mensaje)


