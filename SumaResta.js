function sumar(){
    var numero1=document.getElementById('numero1').value;
    var numero2=document.getElementById('numero2').value;

    var resultado=parseInt(numero1)+parseInt(numero2);

    document.getElementById('resultado').innerHTML= resultado;
}

function restar(){
    var numero1=document.getElementById('numero1').value;
    var numero2=document.getElementById('numero2').value;

    var resultado=parseInt(numero1)-parseInt(numero2);

    document.getElementById('resultado').innerHTML=resultado;
}

window.addEventListener('DOMContentLoaded', () => {
    var divsuma=document.getElementById('suma');

    document.getElementById('suma').addEventListener('click',()=>{
        divsuma.addEventListener("click",sumar());
    });

    var divresta=document.getElementById('resta');
    document.getElementById('resta').addEventListener('click',()=>{
        divresta.addEventListener("click",restar());
    });
});