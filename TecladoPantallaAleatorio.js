function teclado(evt){
    document.getElementById("resultado").innerHTML+=evt.target.dataset.numeros;
}

function numeroaleatorio(){
    var i;
    var numeros=[0,1,2,3,4,5,6,7,8,9];
    for(i=0;i<=9;i++){
        var numero=Math.floor(Math.random()*numeros.length);
        var dato=numeros[numero];
        numeros.splice(numero,1);
        var div=document.createElement("div");
        div.dataset.numeros=numero;
        div.setAttribute("class","nuevos");

        div.appendChild(document.createTextNode(dato));
        document.getElementById("contenedor").appendChild(div);
    }
}

window.onload=function(){
numeroaleatorio();
document.getElementById("contenedor").addEventListener("click",teclado);
}