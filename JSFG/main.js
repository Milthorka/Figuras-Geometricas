function Fcirculo(){
    var selector = document.getElementById("figura");
    selector.className='';
    selector.classList.toggle("circulo");  


}

function Frombo(){
    var selector = document.getElementById("figura");
    selector.className='';
    selector.classList.toggle("rombo");
}

function Frectangulo1(){
    var selector = document.getElementById("figura");
    selector.className='';
    selector.classList.toggle("rectangulo1");
}

function Frectangulo2(){
    var selector = document.getElementById("figura");
    selector.className='';
    selector.classList.toggle("rectangulo2");
}

function arriba(){
    var selector = document.getElementById("figura");
    selector.className='';
    selector.classList.toggle("subir");
}

function derecha(){
    var selector = document.getElementById("figura");
    selector.className='';
    selector.classList.toggle("derecha");
}

function izquierda(){
    var selector = document.getElementById("figura");
    selector.className='';
    selector.classList.toggle("izquierda");
}

function diagonal(){
    var selector = document.getElementById("figura");
    selector.className='';
    selector.classList.toggle("diagonal");
}

function bajar(){
    var selector = document.getElementById("figura");
    selector.className='';
    selector.classList.toggle("bajar");
}

function operaciones(){
    var a = Number(document.getElementById("valor1").value);
    var b = Number(document.getElementById("valor2").value);
    var operacion = document.getElementById("operaciones").value;

    switch(operacion){
        case "+":
            resultado = a+b;
            document.getElementById("respuesta").value = resultado;
            break;
        case "-":    
            resultado = a-b;
            document.getElementById("respuesta").value = resultado;
            break;
        case "*":    
            resultado = a*b;
            document.getElementById("respuesta").value = resultado;
            break;
        case "/":    
            resultado = a/b;
            document.getElementById("respuesta").value = resultado;
            break;    
                     }
}

function chatActive(){
    var selector = document.getElementById("chat");
    selector.classList.toggle("active");
    var selector2 = document.getElementById("btnChat")
    selector2.classList.toggle("active");
}