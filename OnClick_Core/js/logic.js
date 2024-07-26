// CAMBIAR SESION
let isesion= document.querySelector("#iniciar_sesion");
// DESAPARECER BOTON
let removerbtn= document.querySelector("#aggdef");
// ALERTA LIKES
let cat= document.getElementById("like_cat").addEventListener("click", alertcatlike);
let gog= document.getElementById("like_dog").addEventListener("click", alertdoglike);
// INCREMENTAR LIKES
let ncat= document.querySelector("#num_cat")
let ndog= document.querySelector("#num_dog")

// CAMBIAR SESION
isesion.addEventListener('click', (evento) => { 
    if (evento.target.innerText === "Iniciar Sesión"){
        evento.target.innerText = "Cerrar Sesión";
    }else{
        evento.target.innerText = "Iniciar Sesión";
    }})
// DESAPARECER BOTON
removerbtn.addEventListener("click", function(evento){
    removerbtn.remove()
})

// alerta like
function alertcatlike() {
    console.log("Documento enlazado exitosamente")
    alert("Gato Atigrado was liked")
    ncat.innerText ++;
}
function alertdoglike() {
    console.log("Documento enlazado exitosamente")
    alert("Golden Retriever was liked")
    ndog.innerText ++;
}

