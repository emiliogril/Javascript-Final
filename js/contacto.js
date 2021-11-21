//Selectores
let nombreUsuario = document.getElementById("nombre");
let apellidoUsuario = document.getElementById("apellido");
let emailUsuario = document.getElementById("email");
let mensajeUsuario = document.getElementById('msj');

//Guardo en consola los datos del usuario ingresado y una vez que
//se vuelve a cargar la pagina se reinician los datos

const formulario = document.getElementById("formulario");

//Guardo en consola los datos del usuario ingresado y una vez que
//se vuelve a cargar la pagina se reinician los datos
$("#formulario").submit(function (e) { 
e.preventDefault();
console.log(nombreUsuario.value);
console.log(apellidoUsuario.value);
console.log(emailUsuario.value);
console.log(mensajeUsuario.value);
e.target.reset();
});

//Se realiza lo mismo con la tecla ENTER
$('#formulario').keypress(function(e) {
if(e.which == 13) {
    e.preventDefault();
    console.log(nombreUsuario.value);
    console.log(apellidoUsuario.value);
    console.log(emailUsuario.value);
    console.log(mensajeUsuario.value);
    e.target.reset();
}
});

//Agrego un color gris cuando se completa el campo 

nombreUsuario.addEventListener("focusin", () => {
nombreUsuario.style.backgroundColor = "#E3E4E5"});
apellidoUsuario.addEventListener("focusin",() => {
apellidoUsuario.style.backgroundColor = "#E3E4E5"});
emailUsuario.addEventListener("focusin",() => {
emailUsuario.style.backgroundColor = "#E3E4E5"});
mensajeUsuario.addEventListener("focusin",() => {
mensajeUsuario.style.backgroundColor = "#E3E4E5"});

//Agrego colores si el usuario escribe mas de 3 letras
$('#nombre').on('input', () => {
const val = $('#nombre').val().trim();

if ( val.length <= 3 ) {
    $('#nombre').addClass('invalido');
    $('#nombre').removeClass('valido');
} else {
    $('#nombre').addClass('valido');
    $('#nombre').removeClass('invalido');
}   
});

$('#apellido').on('input', () => {
const val = $('#apellido').val().trim();

if ( val.length <= 3 ) {
    $('#apellido').addClass('invalido');
    $('#apellido').removeClass('valido');
} else {
    $('#apellido').addClass('valido');
    $('#apellido').removeClass('invalido');
}   
});

$('#email').on('input', () => {
const val = $('#email').val().trim();

if ( val.length <= 3 ) {
    $('#email').addClass('invalido');
    $('#email').removeClass('valido');
} else {
    $('#email').addClass('valido');
    $('#email').removeClass('invalido');
}   
});

$('#msj').on('input', () => {
const val = $('#msj').val().trim();

if ( val.length <= 3 ) {
    $('#msj').addClass('invalido');
    $('#msj').removeClass('valido');
} else {
    $('#msj').addClass('valido');
    $('#msj').removeClass('invalido');
}   
});
