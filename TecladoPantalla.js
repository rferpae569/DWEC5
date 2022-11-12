function teclado(evt){
    if(evt.target.hasAttribute("data-num")){
        document.getElementById("resultado").innerHTML+=evt.target.dataset.num;
    }
}

window.addEventListener("load", function(event) {
    document.getElementById("contenedor").addEventListener("click",teclado);
});