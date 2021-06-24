
//Detalle de cada canción

let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString);
let id = queryStringToObject.get('id');

let proxy = 'https://cors-anywhere.herokuapp.com/';
let dcancion = `https://api.deezer.com/track/${id}`;
let url= proxy + dcancion; 

   fetch (url)
       .then(function(response){
           return response.json();
            })

       .then(function(data){
          console.log(data); 

         let title = document.querySelector('.daki');
          title.innerText = data.title;    

         let artist= document.querySelector ('.artist a');
              artist.href = `detalle-artista.html?id=${data.artist.id}`;
              artist.innerText = data.artist.name;
            
              let tapa = document.querySelector('.dakiti');
                        tapa.src = data.album.cover_big;

              let disco = document.querySelector('.album a'); 
                       disco.innerText = data.album.title;  
                       disco.href = `detalle-album.html?id=${data.album.id}`;

    //El player para escuchar la canción.La posibilidad de agregar la canción a “mi playlist”
              let player = document.querySelector('.player');
                       player.innerHTML += `<iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${id}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`; 
             
            
        artist.style.color = "white";
        artist.style.fontSize = "40px"; 
           
        disco.style.color = "white";
        disco.style.fontSize = "40px";
            })
          
         .catch(function (error){
             console.log('El error fue: ' + error);})



   //AGREGAR la lista de playlist de favoritos
     //necesitamos un array
             let favoritos = [];
    //Recuperar datos del Storage
            let recuperoStorage = localStorage.getItem('favoritos');
          //AGREGAR info del local Storage en el array
          if(recuperoStorage != null){
            favoritos = JSON.parse(recuperoStorage);
          }
           //Quitar favoritos
           if(favoritos.includes(id)){
             document.querySelector('.presione').innerText = "Quitar de mi playlist";
           }


            let presione = document.querySelector('.presione');
            console.log(presione);
          
            presione.style.color = "white";
            presione.style.fontSize = "25px";

            presione.addEventListener("click", function(e){
              e.preventDefault();

              if(favoritos.includes(id)){
                  let idASacar = favoritos.indexOf(id);
                  favoritos.splice(idASacar,1);
                  document.querySelector('.presione').innerText = "Agregar a mi playlist";
              } else{
                  favoritos.push(id);
                  console.log(favoritos);
                  document.querySelector('.presione').innerText = "Quitar de mi playlist ";
            }
             
             //necesitamos guardar la informacion en el storage
              let presioneParaStorage = JSON.stringify(favoritos);

              localStorage.setItem('favoritos', presioneParaStorage);
              console.log(localStorage);
             
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


            
            
     
     
         
     
            
      
             
     