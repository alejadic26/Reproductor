class Cancion{
    constructor(id,nombreCancion,nombreArtista,album,anio,genero,duracion,caratula,musica){
        this.id = id;
        this.nombreCancion=nombreCancion;
        this.nombreArtista=nombreArtista;
        this.album=album;
        this.anio=anio;
        this.genero=genero;
        this.duracion=duracion;
        this.caratula = caratula;
        this.musica = musica;
    }
}
class Catalogo{
    constructor(){
        this.cancionesGeneral=[];
        this.cancionesFavoritos = [];
        this.cancionesPlaylist = [];
        this.inputBuscador = document.getElementById("search");
        this.botonBuscar = document.getElementById("btnBuscar");
        this.botonBuscar.addEventListener('click', ()=> this.buscarCancion());
        
    }
    
    agregarCancionGeneral(cancion){
        this.cancionesGeneral.push(cancion);
        this.mostrarCancionesGeneral();
    }
    agregarCancionFavoritos(cancion){
        if(!this.cancionesFavoritos.some(valor => valor.nombreCancion == cancion.nombreCancion || valor.nombreArtista == cancion.nombreArtista|| valor.anio == cancion.anio)){
            this.cancionesFavoritos.push(cancion);
            this.mostrarCancionesFavoritos();
        }
    }
    agregarCancionPlaylist(cancion){
        if(!this.cancionesPlaylist.some(valor => valor.nombreCancion == cancion.nombreCancion || valor.nombreArtista == cancion.nombreArtista|| valor.anio == cancion.anio)){
            this.cancionesPlaylist.push(cancion);
            this.mostrarCancionesPlaylist();
        }
    }
    quitarCancionFavoritos(cancion){
        this.cancionesFavoritos.splice(cancion,1);
        this.mostrarCancionesFavoritos();
    }
    quitarCancionPlaylist(cancion){
        this.cancionesPlaylist.splice(cancion,1);
        this.mostrarCancionesPlaylist();
    }

    siguienteCancion(id_cancion,id_lista){
        let id_siguientecancion=-1
        let newIndex=-1
        if(id_lista=="lista_general"){
             newIndex = this.cancionesGeneral.findIndex((element) => element.id==id_cancion);
             console.log(newIndex)
             console.log("lista"+id_lista)
             console.log("cancion"+id_cancion)
             id_siguientecancion=newIndex+1
             if(id_siguientecancion>=0 && id_siguientecancion<this.cancionesGeneral.length){
                const nombreCancion = document.getElementById("nombre_cancion");
                    const artistaCancion = document.getElementById("artista_cancion");
                    const albumCancion = document.getElementById("album_cancion");
                    const duracionCancion = document.getElementById("duracion_cancion");
                    const anioCancion = document.getElementById("anio_cancion");
                    const generoCancion = document.getElementById("genero_cancion");
                    const imagen = document.getElementById("imagen_reproductor");
                    const urlAudio = document.getElementById("audio_reproductor")
                    const id_cancion = document.getElementById("id_cancion")
                    const id_lista = document.getElementById("lista_reproduccion")
                    nombreCancion.innerText = this.cancionesGeneral[id_siguientecancion].nombreCancion;
                    artistaCancion.innerText =this.cancionesGeneral[id_siguientecancion].nombreArtista;
                    albumCancion.innerText = this.cancionesGeneral[id_siguientecancion].album;
                    duracionCancion.innerText = this.cancionesGeneral[id_siguientecancion].duracion;
                    anioCancion.innerText = this.cancionesGeneral[id_siguientecancion].anio;
                    generoCancion.innerText = this.cancionesGeneral[id_siguientecancion].genero;
                    imagen.src = this.cancionesGeneral[id_siguientecancion].caratula;
                    urlAudio.src = this.cancionesGeneral[id_siguientecancion].musica;   
                    id_cancion.innerHTML=this.cancionesGeneral[id_siguientecancion].id
                    id_lista.innerHTML="lista_general" 

             }else{
                alert("Se terminó las canciones de la lista de reporducción...!!")
             }
        }else if(id_lista=="lista_playlist"){
            newIndex = this.cancionesPlaylist.findIndex((element) => element.id==id_cancion);
            id_siguientecancion=newIndex+1
            if(id_siguientecancion>=0 && id_siguientecancion<this.cancionesPlaylist.length){
                const nombreCancion = document.getElementById("nombre_cancion");
                    const artistaCancion = document.getElementById("artista_cancion");
                    const albumCancion = document.getElementById("album_cancion");
                    const duracionCancion = document.getElementById("duracion_cancion");
                    const anioCancion = document.getElementById("anio_cancion");
                    const generoCancion = document.getElementById("genero_cancion");
                    const imagen = document.getElementById("imagen_reproductor");
                    const urlAudio = document.getElementById("audio_reproductor")
                    const id_cancion = document.getElementById("id_cancion")
                    const id_lista = document.getElementById("lista_reproduccion")
                    nombreCancion.innerText = this.cancionesPlaylist[id_siguientecancion].nombreCancion;
                    artistaCancion.innerText =this.cancionesPlaylist[id_siguientecancion].nombreArtista;
                    albumCancion.innerText = this.cancionesPlaylist[id_siguientecancion].album;
                    duracionCancion.innerText = this.cancionesPlaylist[id_siguientecancion].duracion;
                    anioCancion.innerText = this.cancionesPlaylist[id_siguientecancion].anio;
                    generoCancion.innerText = this.cancionesPlaylist[id_siguientecancion].genero;
                    imagen.src = this.cancionesPlaylist[id_siguientecancion].caratula;
                    urlAudio.src = this.cancionesPlaylist[id_siguientecancion].musica;   
                    id_cancion.innerHTML=this.cancionesPlaylist[id_siguientecancion].id
                    id_lista.innerHTML="lista_playlist" 
             }else{
                alert("Se terminó las canciones de la Playlist...!!")
             }
        }else if(id_lista=="lista_favorita"){
            newIndex = this.cancionesFavoritos.findIndex((element) => element.id==id_cancion);
            id_siguientecancion=newIndex+1
            if(id_siguientecancion>=0 && id_siguientecancion<this.cancionesFavoritos.length){
                const nombreCancion = document.getElementById("nombre_cancion");
                    const artistaCancion = document.getElementById("artista_cancion");
                    const albumCancion = document.getElementById("album_cancion");
                    const duracionCancion = document.getElementById("duracion_cancion");
                    const anioCancion = document.getElementById("anio_cancion");
                    const generoCancion = document.getElementById("genero_cancion");
                    const imagen = document.getElementById("imagen_reproductor");
                    const urlAudio = document.getElementById("audio_reproductor")
                    const id_cancion = document.getElementById("id_cancion")
                    const id_lista = document.getElementById("lista_reproduccion")
                    nombreCancion.innerText = this.cancionesFavoritos[id_siguientecancion].nombreCancion;
                    artistaCancion.innerText =this.cancionesFavoritos[id_siguientecancion].nombreArtista;
                    albumCancion.innerText = this.cancionesFavoritos[id_siguientecancion].album;
                    duracionCancion.innerText = this.cancionesFavoritos[id_siguientecancion].duracion;
                    anioCancion.innerText = this.cancionesFavoritos[id_siguientecancion].anio;
                    generoCancion.innerText = this.cancionesFavoritos[id_siguientecancion].genero;
                    imagen.src = this.cancionesFavoritos[id_siguientecancion].caratula;
                    urlAudio.src = this.cancionesFavoritos[id_siguientecancion].musica;   
                    id_cancion.innerHTML=this.cancionesFavoritos[id_siguientecancion].id
                    id_lista.innerHTML="lista_favorita" 
             }else{
                alert("Se terminó las canciones de la lista de Favoritos...!!")
             }
        }
    }

    retrocederCancion(id_cancion,id_lista){
        let id_siguientecancion=-1
        let newIndex=-1
        if(id_lista=="lista_general"){
             newIndex = this.cancionesGeneral.findIndex((element) => element.id==id_cancion);
             console.log(newIndex)
             console.log("lista"+id_lista)
             console.log("cancion"+id_cancion)
             id_siguientecancion=newIndex-1
             if(id_siguientecancion>=0 && id_siguientecancion<this.cancionesGeneral.length){
                const nombreCancion = document.getElementById("nombre_cancion");
                    const artistaCancion = document.getElementById("artista_cancion");
                    const albumCancion = document.getElementById("album_cancion");
                    const duracionCancion = document.getElementById("duracion_cancion");
                    const anioCancion = document.getElementById("anio_cancion");
                    const generoCancion = document.getElementById("genero_cancion");
                    const imagen = document.getElementById("imagen_reproductor");
                    const urlAudio = document.getElementById("audio_reproductor")
                    const id_cancion = document.getElementById("id_cancion")
                    const id_lista = document.getElementById("lista_reproduccion")
                    nombreCancion.innerText = this.cancionesGeneral[id_siguientecancion].nombreCancion;
                    artistaCancion.innerText =this.cancionesGeneral[id_siguientecancion].nombreArtista;
                    albumCancion.innerText = this.cancionesGeneral[id_siguientecancion].album;
                    duracionCancion.innerText = this.cancionesGeneral[id_siguientecancion].duracion;
                    anioCancion.innerText = this.cancionesGeneral[id_siguientecancion].anio;
                    generoCancion.innerText = this.cancionesGeneral[id_siguientecancion].genero;
                    imagen.src = this.cancionesGeneral[id_siguientecancion].caratula;
                    urlAudio.src = this.cancionesGeneral[id_siguientecancion].musica;   
                    id_cancion.innerHTML=this.cancionesGeneral[id_siguientecancion].id
                    id_lista.innerHTML="lista_general" 
             }else{
                alert("Se terminó las canciones de la lista de canciones...!!")
             }
        }else if(id_lista=="lista_playlist"){
            newIndex = this.cancionesPlaylist.findIndex((element) => element.id==id_cancion);
            id_siguientecancion=newIndex-1
            if(id_siguientecancion>=0 && id_siguientecancion<this.cancionesPlaylist.length){
                const nombreCancion = document.getElementById("nombre_cancion");
                    const artistaCancion = document.getElementById("artista_cancion");
                    const albumCancion = document.getElementById("album_cancion");
                    const duracionCancion = document.getElementById("duracion_cancion");
                    const anioCancion = document.getElementById("anio_cancion");
                    const generoCancion = document.getElementById("genero_cancion");
                    const imagen = document.getElementById("imagen_reproductor");
                    const urlAudio = document.getElementById("audio_reproductor")
                    const id_cancion = document.getElementById("id_cancion")
                    const id_lista = document.getElementById("lista_reproduccion")
                    nombreCancion.innerText = this.cancionesPlaylist[id_siguientecancion].nombreCancion;
                    artistaCancion.innerText =this.cancionesPlaylist[id_siguientecancion].nombreArtista;
                    albumCancion.innerText = this.cancionesPlaylist[id_siguientecancion].album;
                    duracionCancion.innerText = this.cancionesPlaylist[id_siguientecancion].duracion;
                    anioCancion.innerText = this.cancionesPlaylist[id_siguientecancion].anio;
                    generoCancion.innerText = this.cancionesPlaylist[id_siguientecancion].genero;
                    imagen.src = this.cancionesPlaylist[id_siguientecancion].caratula;
                    urlAudio.src = this.cancionesPlaylist[id_siguientecancion].musica;   
                    id_cancion.innerHTML=this.cancionesPlaylist[id_siguientecancion].id
                    id_lista.innerHTML="lista_playlist" 
             }else{
                alert("Se terminó las canciones de la Playlist...!!")
             }
        }else if(id_lista=="lista_favorita"){
            newIndex = this.cancionesFavoritos.findIndex((element) => element.id==id_cancion);
            id_siguientecancion=newIndex-1
            if(id_siguientecancion>=0 && id_siguientecancion<this.cancionesFavoritos.length){
                const nombreCancion = document.getElementById("nombre_cancion");
                    const artistaCancion = document.getElementById("artista_cancion");
                    const albumCancion = document.getElementById("album_cancion");
                    const duracionCancion = document.getElementById("duracion_cancion");
                    const anioCancion = document.getElementById("anio_cancion");
                    const generoCancion = document.getElementById("genero_cancion");
                    const imagen = document.getElementById("imagen_reproductor");
                    const urlAudio = document.getElementById("audio_reproductor")
                    const id_cancion = document.getElementById("id_cancion")
                    const id_lista = document.getElementById("lista_reproduccion")
                    nombreCancion.innerText = this.cancionesFavoritos[id_siguientecancion].nombreCancion;
                    artistaCancion.innerText =this.cancionesFavoritos[id_siguientecancion].nombreArtista;
                    albumCancion.innerText = this.cancionesFavoritos[id_siguientecancion].album;
                    duracionCancion.innerText = this.cancionesFavoritos[id_siguientecancion].duracion;
                    anioCancion.innerText = this.cancionesFavoritos[id_siguientecancion].anio;
                    generoCancion.innerText = this.cancionesFavoritos[id_siguientecancion].genero;
                    imagen.src = this.cancionesFavoritos[id_siguientecancion].caratula;
                    urlAudio.src = this.cancionesFavoritos[id_siguientecancion].musica;   
                    id_cancion.innerHTML=this.cancionesFavoritos[id_siguientecancion].id
                    id_lista.innerHTML="lista_favorita" 
             }else{
                alert("Se terminó las canciones de la lista de Favoritos...!!")
             }
        }
    }

    mostrarCancionesGeneral(){
        const elementosul=document.getElementById("resultado_buscador");
        elementosul.innerHTML = ''; //limpiar la lista
        this.cancionesGeneral.forEach(cancion =>{
            const elementosli=document.createElement("li");
            elementosli.textContent=`${cancion.nombreCancion} - ${cancion.nombreArtista} - ${cancion.anio} `
            //ICONO DE REPRODUCIR
            const iconoReproducir = document.createElement("span");
                iconoReproducir.style.fontSize= "15px";
                iconoReproducir.style.cursor = "pointer";
                iconoReproducir.innerHTML = "&#9658;";
                iconoReproducir.addEventListener('click', (event)=> {
                    event.stopPropagation();
                    const nombreCancion = document.getElementById("nombre_cancion");
                    const artistaCancion = document.getElementById("artista_cancion");
                    const albumCancion = document.getElementById("album_cancion");
                    const duracionCancion = document.getElementById("duracion_cancion");
                    const anioCancion = document.getElementById("anio_cancion");
                    const generoCancion = document.getElementById("genero_cancion");
                    const imagen = document.getElementById("imagen_reproductor");
                    const urlAudio = document.getElementById("audio_reproductor")
                    const id_cancion = document.getElementById("id_cancion")
                    const id_lista = document.getElementById("lista_reproduccion")
                    nombreCancion.innerText = cancion.nombreCancion;
                    artistaCancion.innerText =cancion.nombreArtista;
                    albumCancion.innerText = cancion.album;
                    duracionCancion.innerText = cancion.duracion;
                    anioCancion.innerText = cancion.anio;
                    generoCancion.innerText = cancion.genero;
                    imagen.src = cancion.caratula;
                    urlAudio.src = cancion.musica;   
                    id_cancion.innerHTML=cancion.id
                    id_lista.innerHTML="lista_general" 
            }) 
            //ICONO DE CORAZON
                const iconoFavorito = document.createElement("span");
                    iconoFavorito.style.fontSize= "15px";
                    iconoFavorito.style.cursor = "pointer";
                    iconoFavorito.innerHTML = "&#10084;";
                    iconoFavorito.addEventListener('click', (event)=> {
                        event.stopPropagation();
                        this.agregarCancionFavoritos(cancion);
                
            }) 
            //ICONO DE AGREGAR A PLAYLIST
            const iconoPlaylist = document.createElement("span");
                iconoPlaylist.style.fontSize= "15px";
                iconoPlaylist.style.cursor = "pointer";
                iconoPlaylist.innerHTML = "&#43;";
                iconoPlaylist.addEventListener('click', (event)=> {
                    event.stopPropagation();
                    this.agregarCancionPlaylist(cancion);   
            })   
            elementosul.appendChild(elementosli)
            elementosli.appendChild(iconoReproducir)
            elementosli.appendChild(iconoFavorito)
            elementosli.appendChild(iconoPlaylist)   
        });
    }
    mostrarCancionesGeneralFiltradas(cancionesFiltro){
            const elementosul=document.getElementById("resultado_buscador");
                elementosul.innerHTML = ''; //limpiar la lista
                cancionesFiltro.forEach(cancion =>{
                    const elementosli=document.createElement("li")
                    elementosli.textContent=`${cancion.nombreCancion} - ${cancion.nombreArtista} - ${cancion.anio} `
                    //ICONO DE REPRODUCIR
                    const iconoReproducir = document.createElement("span");
                    iconoReproducir.style.fontSize= "15px";
                    iconoReproducir.style.cursor = "pointer";
                    iconoReproducir.innerHTML = "&#9658;";
                    iconoReproducir.addEventListener('click', (event)=> {
                        event.stopPropagation();
                        const nombreCancion = document.getElementById("nombre_cancion");
                        const artistaCancion = document.getElementById("artista_cancion");
                        const albumCancion = document.getElementById("album_cancion");
                        const duracionCancion = document.getElementById("duracion_cancion");
                        const anioCancion = document.getElementById("anio_cancion");
                        const generoCancion = document.getElementById("genero_cancion");
                        const imagen = document.getElementById("imagen_reproductor");
                        const urlAudio = document.getElementById("audio_reproductor")
                        const id_cancion = document.getElementById("id_cancion")
                        const id_lista = document.getElementById("lista_reproduccion")
                        nombreCancion.innerText = cancion.nombreCancion;
                        artistaCancion.innerText =cancion.nombreArtista;
                        albumCancion.innerText = cancion.album;
                        duracionCancion.innerText = cancion.duracion;
                        anioCancion.innerText = cancion.anio;
                        generoCancion.innerText = cancion.genero;
                        imagen.src = cancion.caratula;
                        urlAudio.src = cancion.musica;
                        urlAudio.src = cancion.musica;
                        id_cancion.innerHTML=cancion.id
                        id_lista.innerHTML="lista_general"
                }
            ) 
            //ICONO DE CORAZON
            const iconoFavorito = document.createElement("span");
            iconoFavorito.style.fontSize= "15px";
            iconoFavorito.style.cursor = "pointer";
            iconoFavorito.innerHTML = "&#10084;";
            iconoFavorito.addEventListener('click', (event)=> {
               event.stopPropagation();
               this.agregarCancionFavoritos(cancion);
                
            }) 

            //ICONO DE AGREGAR A PLAYLIST
            const iconoPlaylist = document.createElement("span");
            iconoPlaylist.style.fontSize= "15px";
            iconoPlaylist.style.cursor = "pointer";
            iconoPlaylist.innerHTML = "&#43;";
            iconoPlaylist.addEventListener('click', (event)=> {
               event.stopPropagation();
               this.agregarCancionPlaylist(cancion);
                
            }) 
            elementosul.appendChild(elementosli)
            elementosli.appendChild(iconoReproducir)
            elementosli.appendChild(iconoFavorito)
            elementosli.appendChild(iconoPlaylist)
            
        });   
    }
    buscarCancion(){
        const terminoBusqueda = this.inputBuscador.value.trim().toLowerCase();
        let cancionesFiltradas = [];
        if(terminoBusqueda ===""){
            cancionesFiltradas = this.cancionesGeneral;
        }else{
            cancionesFiltradas= this.cancionesGeneral.filter(cancion=> {
                return cancion.nombreCancion.toLowerCase().includes(terminoBusqueda) || cancion.nombreArtista.toLowerCase().includes(terminoBusqueda)|| cancion.anio.toLowerCase().includes(terminoBusqueda)
            })
        }
        this.mostrarCancionesGeneralFiltradas(cancionesFiltradas)
        }
    mostrarCancionesPlaylist(){
        const elementosul=document.getElementById("playlist_lista");
        elementosul.innerHTML = ''; //limpiar la lista
        this.cancionesPlaylist.forEach(cancion =>{
            const elementosli=document.createElement("li");
            elementosli.textContent=`${cancion.nombreCancion} - ${cancion.nombreArtista} - ${cancion.anio} `
            //ICONO DE REPRODUCIR
            const iconoReproducir = document.createElement("span");
            iconoReproducir.style.fontSize= "15px";
            iconoReproducir.style.cursor = "pointer";
            iconoReproducir.innerHTML = "&#9658;";
            iconoReproducir.addEventListener('click', (event)=> {
                event.stopPropagation();
                const nombreCancion = document.getElementById("nombre_cancion");
                const artistaCancion = document.getElementById("artista_cancion");
                const albumCancion = document.getElementById("album_cancion");
                const duracionCancion = document.getElementById("duracion_cancion");
                const anioCancion = document.getElementById("anio_cancion");
                const generoCancion = document.getElementById("genero_cancion");
                const imagen = document.getElementById("imagen_reproductor");
                const urlAudio = document.getElementById("audio_reproductor")
                const id_cancion = document.getElementById("id_cancion")
                const id_lista = document.getElementById("lista_reproduccion")
                nombreCancion.innerText = cancion.nombreCancion;
                artistaCancion.innerText =cancion.nombreArtista;
                albumCancion.innerText = cancion.album;
                duracionCancion.innerText = cancion.duracion;
                anioCancion.innerText = cancion.anio;
                generoCancion.innerText = cancion.genero;
                imagen.src = cancion.caratula;
                urlAudio.src = cancion.musica;
               id_cancion.innerHTML=cancion.id
               id_lista.innerHTML="lista_playlist"
                
            }) 
             //ICONO DE CORAZON
             const iconoFavorito = document.createElement("span");
             iconoFavorito.style.fontSize= "15px";
             iconoFavorito.style.cursor = "pointer";
             iconoFavorito.innerHTML = "&#10084;";
             iconoFavorito.addEventListener('click', (event)=> {
                event.stopPropagation();
                this.agregarCancionFavoritos(cancion);
                 
             }) 
      
            //ICONO DE ELIMINAR
            const iconoEliminar = document.createElement("span");
            iconoEliminar.style.fontSize= "15px";
            iconoEliminar.style.cursor = "pointer";
            iconoEliminar.innerHTML = "&#10006;";
            iconoEliminar.addEventListener('click', (event)=> {
               event.stopPropagation();
               this.quitarCancionPlaylist(cancion);
                
            }) 
            
            elementosul.appendChild(elementosli)
            elementosli.appendChild(iconoReproducir)
            elementosli.appendChild(iconoFavorito)
            elementosli.appendChild(iconoEliminar)
            console.log("la cancion es de playlist:" +cancion.id)
        });
        
    }
    mostrarCancionesFavoritos(){
        const elementosul=document.getElementById("favoritos_lista");
        elementosul.innerHTML = ''; //limpiar la lista
       
        this.cancionesFavoritos.forEach(cancion =>{
            const elementosli=document.createElement("li");
        
            elementosli.textContent=`${cancion.nombreCancion} - ${cancion.nombreArtista} - ${cancion.anio} `
            //ICONO DE REPRODUCIR
            const iconoReproducir = document.createElement("span");
            iconoReproducir.style.fontSize= "15px";
            iconoReproducir.style.cursor = "pointer";
            iconoReproducir.innerHTML = "&#9658;";
            iconoReproducir.addEventListener('click', (event)=> {
                event.stopPropagation();
                const nombreCancion = document.getElementById("nombre_cancion");
                const artistaCancion = document.getElementById("artista_cancion");
                const albumCancion = document.getElementById("album_cancion");
                const duracionCancion = document.getElementById("duracion_cancion");
                const anioCancion = document.getElementById("anio_cancion");
                const generoCancion = document.getElementById("genero_cancion");
                const imagen = document.getElementById("imagen_reproductor");
                const urlAudio = document.getElementById("audio_reproductor")
                const id_cancion = document.getElementById("id_cancion")
                const id_lista = document.getElementById("lista_reproduccion")
                nombreCancion.innerText = cancion.nombreCancion;
                artistaCancion.innerText =cancion.nombreArtista;
                albumCancion.innerText = cancion.album;
                duracionCancion.innerText = cancion.duracion;
                anioCancion.innerText = cancion.anio;
                generoCancion.innerText = cancion.genero;
                imagen.src = cancion.caratula;
                urlAudio.src = cancion.musica;     
                id_cancion.innerHTML=cancion.id
                id_lista.innerHTML="lista_favorita"
            }) 
            //ICONO DE AGREGAR A PLAYLIST
            const iconoPlaylist = document.createElement("span");
            iconoPlaylist.style.fontSize= "15px";
            iconoPlaylist.style.cursor = "pointer";
            iconoPlaylist.innerHTML = "&#43;";
            iconoPlaylist.style.borderRightColor = "red;";
            iconoPlaylist.addEventListener('click', (event)=> {
               event.stopPropagation();
               this.agregarCancionPlaylist(cancion);   
                      
            }) 
      
            //ICONO DE ELIMINAR
            const iconoEliminar = document.createElement("span");
            iconoEliminar.style.fontSize= "15px";
            iconoEliminar.style.cursor = "pointer";
            iconoEliminar.innerHTML = "&#10006;";
            iconoEliminar.addEventListener('click', (event)=> {
               event.stopPropagation();
               this.quitarCancionFavoritos(cancion);   
            }) 
            elementosul.appendChild(elementosli)
            elementosli.appendChild(iconoReproducir)
            elementosli.appendChild(iconoPlaylist)
            elementosli.appendChild(iconoEliminar)
            console.log("la cancion es de fav :" +cancion.id)
        });
        
    }
}


class Reproductor{
    constructor(cancion){
        this.cancion=cancion;
    }
    
    reproducirCancion(){
        const audio = document.getElementById("audio_reproductor");
       //audio.currentTime=235
        audio.play();
        
    }
    detenerCancion(){
        const audio = document.getElementById("audio_reproductor")
        audio.pause()

    }
    mutearCancion(){
        const audio = document.getElementById("audio_reproductor")
        audio.muted = !audio.muted;
    }
    
  

    barraProgresoCancion(){
        const audio = document.getElementById("audio_reproductor")
        const barra = document.getElementById("barra_reproductor")
        const numero = document.getElementById("numero_barra")
        audio.addEventListener("timeupdate",function(){
            var tiempoActual = audio.currentTime;
            var minutos = Math.floor(tiempoActual / 60);
            var segundos =  Math.floor(tiempoActual % 60);
            numero.textContent = "0"+minutos + ":" + segundos;
            var porcentaje = audio.currentTime / audio.duration
            barra.value = porcentaje;
        });
    }
}



let catalogo = new Catalogo()


let reproductor = new Reproductor()

//CANCIONES   (identificador,nombreCancion,nombreArtista,ALBUM,GENERO,DURACION,URL IMAGEN, URL AUDIO)
catalogo.agregarCancionGeneral(new Cancion("can1","Robarte un beso","Carlos Vives","Vives","2017","Pop/rock","03:08","../IMG/Robarte un beso.JPG","../MUSIC/Robarte un beso.mp3"));
catalogo.agregarCancionGeneral(new Cancion("can2","Shape of you","Ed Sheeran","÷ (Divide) ","2017","Pop","03:50","../IMG/Shape of you.JPG","../MUSIC/Shape of you.mp3"));
catalogo.agregarCancionGeneral(new Cancion("can3","Vivo pensando en ti","Felipe Pelaez","Vivo pensando en ti ","2017","Urbano","03:52","../IMG/Vivo pensando en ti.JPG","../MUSIC/Vivo pensando en ti.mp3"));
catalogo.agregarCancionGeneral(new Cancion("can4","Ya no me duele mas","Silvestre Dangond","Gente Valiente","2017","Vallenato","03:45","../IMG/Ya no me dueles.JPG","../MUSIC/Ya no me duele mas.mp3"));
catalogo.agregarCancionGeneral(new Cancion("can5","Despacito","Luis Fonsi","Vida","2019","Pop Latino","03:47","../IMG/Despacito.JPG","../MUSIC/Despacito.mp3"));
catalogo.agregarCancionGeneral(new Cancion("can6","Claridad","Menudo","Fuego","1981","Pop Latino","04:09","../IMG/Claridad.JPG","../MUSIC/Claridad.mp3"));
catalogo.agregarCancionGeneral(new Cancion("can7","Creo en ti","Reik","Peligro","2012","Pop Latino","02:40","../IMG/Creo en ti.JPG","../MUSIC/Creo en ti.mp3"));
catalogo.agregarCancionGeneral(new Cancion("can8","Como te atreves","Morat","Sobre el amor y sus efectos secundarios","2015","Pop-folk","03:54","../IMG/Como te atreves.JPG","../MUSIC/Como te atreves.mp3"));
catalogo.agregarCancionGeneral(new Cancion("can9","Una Lady como tu","Manuel Turizo","ADN","2016","Urbano","03:48","../IMG/Una Lady como tu.JPG","../MUSIC/Una Lady como tu.mp3"));
catalogo.agregarCancionGeneral(new Cancion("can10","Vacaciones","Wisin","Victory","2016","Urbano","03:58","../IMG/Vacaciones.JPG","../MUSIC/Vacaciones.mp3"));
catalogo.agregarCancionGeneral(new Cancion("can11","Vivir mi vida","Marc Anthony","3.0","2013","Salsa","04:12","../IMG/Vivir mi vida.JPG","../MUSIC/Vivir mi vida.mp3"));
catalogo.agregarCancionGeneral(new Cancion("can12","Attention","Charlie Puth","Voicenotes","2017","Pop Rock","03:28","../IMG/Attention.JPG","../MUSIC/Attention.mp3"));
catalogo.agregarCancionGeneral(new Cancion("can13","Déjala Que Baile ","Melendi, Alejandro Sanz, Arkano "," Ahora ","2018"," SpanishPop","03:39","../IMG/Déjala Que Baile.jpg","../MUSIC/Déjala Que Baile.mp3"));
catalogo.agregarCancionGeneral(new Cancion("can14","Me Gusta la Vida","Funambulista","Animal","2021","Pop","02:54","../IMG/Me Gusta la Vida.jpg","../MUSIC/Me Gusta la Vida .mp3"));
catalogo.agregarCancionGeneral(new Cancion("can15","Mi Día Favorito","Ha Ash","Haashtag","2022","Pop","03:32","../IMG/Mi Día Favorito.jpg","../MUSIC/Mi Día Favorito.mp3"));
catalogo.agregarCancionGeneral(new Cancion("can16","Mi Niña Hermosa","PabloLacadiere","Albúm 2060","2021"," Pop Balada","03:08","../IMG/Mi Niña Hermosa.jpg","../MUSIC/Mi Niña Hermosa.mp3"));
catalogo.agregarCancionGeneral(new Cancion("can17","Mi Regalo","MartaAlbarracin","Canciones Para Mi Familia","2023","Pop","03:01","../IMG/Mi Regalo.jpg","../MUSIC/Mi Regalo.mp3"));
catalogo.agregarCancionGeneral(new Cancion("can18","Verano Azul"," Juan Magan"," We Love Asere","2023","Pop","03:10","../IMG/Verano Azul.jpg","../MUSIC/Verano Azul.mp3"));
catalogo.agregarCancionGeneral(new Cancion("can19","Ayudala","MariTrini","Espejismos","1992","Balada Romantica","04:14","../IMG/Ayudala.JPG","../MUSIC/Ayudala.mp3"));
catalogo.agregarCancionGeneral(new Cancion("can20","Juego de Ajedrez","Ricky Martin","Munecos de papel","1992","Balada Romantica","04:14","../IMG/Juegos de Ajedrez.JPG","../MUSIC/Juego De Ajedrez.mp3"));
catalogo.agregarCancionGeneral(new Cancion("can21","Te voy a amar","Axel","Un nuevo Sol","2011","Balada","04:11","../IMG/Te voy a amar.JPG","../MUSIC/Te Voy A Amar.mp3"));
catalogo.agregarCancionGeneral(new Cancion("can22","Ahora","Franco de Vita","Fantasia","1984","Pop","03:51","../IMG/Ahora.JPG","../MUSIC/Ahora.mp3"));
catalogo.agregarCancionGeneral(new Cancion("can23","Como yo te amo","Raphael","Y sigo mi camino","1980","Balada","04:39","../IMG/Como yo te amo.JPG","../MUSIC/Como yo te amo.mp3"));
catalogo.agregarCancionGeneral(new Cancion("can24","Guitarra toca otra vez","Buddy Richard","Mis mas grandes exitos","1995","Balada","03:41","../IMG/Guitarra toca otra vez.JPG","../MUSIC/Guitarra Toca Otra Vez.mp3"));
catalogo.agregarCancionGeneral(new Cancion("can25","Mil calles llevan hacia ti","Leo Segarra","Fantasia","2006","Pop","03:44","../IMG/Mil calles llevan hacia ti.JPG","../MUSIC/Mis Calles Llevan Hacia Ti.mp3"));
catalogo.agregarCancionGeneral(new Cancion("can26","Morir de amor","Bose","Lo esencial de Miguel Bose","1978","Regional mexicana","04:02","../IMG/Morir de amor.JPG","../MUSIC/Morir de amor.mp3"));
catalogo.agregarCancionGeneral(new Cancion("can27","Que hermosa noche","Leo Dan","La historia","2006","Pop","03:34","../IMG/Que hermosa noche.JPG","../MUSIC/Que hermosa noche.mp3"));
catalogo.agregarCancionGeneral(new Cancion("can28","Yo se que te acordaras","Los briosi","Iden","1992","Balada Pop","03:11","../IMG/Te acordaras de mi.JPG","../MUSIC/Te acordaras de mi.mp3"));
catalogo.agregarCancionGeneral(new Cancion("can29","A las puertas del cielo","Gigliola Cinquetti","Iden","1973","Balada Romántica","03:39","../IMG/A las puertas del cielo.JPG","../MUSIC/A Las Puertas Del Cielo.mp3"));
catalogo.agregarCancionGeneral(new Cancion("can30","Y que","Axel","Un nuevo Sol","2011","Balada","03:25","../IMG/Y que.JPG","../MUSIC/Y que.mp3"));

let botonReproducir=document.getElementById("reproducir_cancion");

botonReproducir.addEventListener('click', (event) => {
    reproductor.reproducirCancion()
    botonReproducir.style.color="blue"
    botonDetener.style.color="rgb(107, 105, 105)"; 
})

let botonDetener=document.getElementById("detener_cancion");
botonDetener.addEventListener('click', (event) => {
    reproductor.detenerCancion()
    botonReproducir.style.color="rgb(107, 105, 105)"; 
    botonDetener.style.color="blue"; 
})

let botonAdelantar=document.getElementById("adelantar_cancion");
    
    botonAdelantar.addEventListener('click', (event) => {
    let id_cancion=document.getElementById("id_cancion").innerText
    let lista_reproduccion=document.getElementById("lista_reproduccion").innerText
    catalogo.siguienteCancion(id_cancion,lista_reproduccion)
  
})


let botonRegresar=document.getElementById("regresar_cancion");
    
botonRegresar.addEventListener('click', (event) => {
    let id_cancion=document.getElementById("id_cancion").innerText
    let lista_reproduccion=document.getElementById("lista_reproduccion").innerText
    catalogo.retrocederCancion(id_cancion,lista_reproduccion)

})



let botonMutear=document.getElementById("mutear_cancion");
    botonMutear.addEventListener('click', (event) => {
    reproductor.mutearCancion()
    botonMutear.style.color="blue"
    botonReproducir.style.color="blue"
    botonMutear.style.color="rgb(107, 105, 107)"; 
})

reproductor.barraProgresoCancion();

