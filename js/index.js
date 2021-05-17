
var foto = document.querySelectorAll(".foto");
var fotos = new Array();
var clipboard = null;

for (var i = 0; i < foto.length; i++) {
    var srcFoto = foto[i].children[0].getAttribute('src');
    var nombreFoto = foto[i].dataset.nombre;
    fotos.push(new Array(nombreFoto,srcFoto));
    console.log(fotos);
    foto[i].addEventListener("click", mostrarInformacion);
}

document.querySelectorAll('.cuadrado').forEach(cuadrado =>{
    cuadrado.addEventListener('click',moverImagen);
});

function moverImagen(){
    console.log(this.getAttribute('id'));
    var cuadradoSeleccionado = this.getAttribute('id');
    if(clipboard != null){
        fotos.forEach(foto => {
            if(foto[0] == clipboard){
                document.getElementById(cuadradoSeleccionado).innerHTML = `<img src="${foto[1]}">`;
            }
        });
    }
    clipboard = null;
}

function mostrarInformacion() {
    var nombre = this.dataset.nombre;
    clipboard=nombre;
    var parrafoCreado = document.createElement("p");
    parrafoCreado.classList.add("activado")
    parrafoCreado.innerText = "Seleccionaste la imagen de "+nombre;
    var lugarColocacion = document.querySelector("div");
    lugarColocacion.appendChild(parrafoCreado);
    var parrafoVisible = document.querySelector("p.activado")
    parrafoVisible.classList.remove("activado");
}
