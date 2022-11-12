function comprobar(){
    var numero=document.getElementById('numero').value;
    var boton=document.getElementById('boton');
    
    if(numero >=0){
        document.getElementById('boton').addEventListener('click',()=>{
            boton.addEventListener("click", factorial());
        });
    }
    else{
        document.getElementById('boton').addEventListener('click',()=>{
            document.getElementById('resultado').innerHTML="No se ha realizado el calculo";

        });
    }
}

function factorial(){
    var numero=document.getElementById('numero').value;
    var resultado=1;
    for(i=1;i<=numero;i++){
        resultado=resultado*i;
    }
    document.getElementById('resultado').innerHTML=resultado;
}