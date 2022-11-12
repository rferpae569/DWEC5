function numeroaleatorio(){
    var i;
    var numeros=[0,1,2,3,4,5,6,7,8,9];
    var aleatorios="";

    for(i=0;i<=9;i++){
        var numero=Math.floor(Math.random()*numeros.length);
        var dato=numeros[numero];
        numeros.splice(numero,1);
        aleatorios+=dato;
    }

    return aleatorios;
}

window.addEventListener("load", function(event) {
    var aleatorios=numeroaleatorio();

    var divs=document.getElementsByClassName("numero");
    for(i=0;i<divs.length-1;i++){
        divs[i].innerHTML=aleatorios.charAt(i);
        divs[i].dataset.numero=aleatorios.charAt(i);
    }
});