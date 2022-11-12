window.addEventListener('DOMContentLoaded', () => {
    var div1=document.getElementById('div1');

    document.getElementById('div1').addEventListener('click',()=>{
    document.body.style.backgroundColor='red';
    }); 

    var div2=document.getElementById('div2');
    
    document.getElementById('div2').addEventListener('click',()=>{
        document.body.style.backgroundColor='orange';
    });

    var div3=document.getElementById('div3');

    document.getElementById('div3').addEventListener('click',()=>{
        document.body.style.backgroundColor='green';
    });

    var div4=document.getElementById('div4');

    document.getElementById('div4').addEventListener('click',()=>{
        document.body.style.backgroundColor='gray';
    });

    var div5=document.getElementById('div5');

    document.getElementById('div5').addEventListener('click',()=>{
        document.body.style.backgroundColor='purple';
    });

    var div6=document.getElementById('div6');

    document.getElementById('div6').addEventListener('click',()=>{
        document.body.style.backgroundColor='burlywood';
    });
});