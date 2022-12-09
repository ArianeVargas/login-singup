document.getElementById("btn-registrarse").addEventListener("click", singup);
document.getElementById("btn-iniciar-secion").addEventListener("click", login);
window.addEventListener("resize", anchoPagina);

//declaracion de variables
var contenedor_login_singup = document.querySelector(".contenedor-login-singup")
var formulario_login = document.querySelector(".formulario-login")
var formulario_singup = document.querySelector(".formulario-singup")
var caja_trasera_login = document.querySelector(".caja-trasera-login")
var caja_trasera_singup = document.querySelector(".caja-trasera-singup")

function anchoPagina(){
    if(window.innerWidth > 850){
    caja_trasera_login.style.display = "block";
    caja_trasera_singup.style.display = "block";
    }else{
        caja_trasera_singup.style.display = "block";
        caja_trasera_singup.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_singup.style.display = "none";
        contenedor_login_singup.style.left = "0px";
    }
}

anchoPagina();

function login(){
    if(window.innerWidth > 850){
    formulario_singup.style.display = "none";
    contenedor_login_singup.style.left = "10px";
    formulario_login.style.display = "block";
    caja_trasera_singup.style.opacity = "1";
    caja_trasera_login.style.opacity = "0";
    }else{
    formulario_singup.style.display = "none";
    contenedor_login_singup.style.left = "0px";
    formulario_login.style.display = "block";
    caja_trasera_singup.style.display = "block";
    caja_trasera_login.style.display = "none";
    }
}
function singup(){
    if (window.innerWidth > 850){
    formulario_singup.style.display = "block";
    contenedor_login_singup.style.left = "410px";
    formulario_login.style.display = "none";
    caja_trasera_singup.style.opacity = "0";
    caja_trasera_login.style.opacity = "1";
    }else{
    formulario_singup.style.display = "block";
    contenedor_login_singup.style.left = "0px";
    formulario_login.style.display = "none";
    caja_trasera_singup.style.display= "none";
    caja_trasera_login.style.opacity = "block";
    caja_trasera_login.style.opacity = "1";
    }
}