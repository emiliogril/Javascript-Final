//Animaciones para el loading
$(document).ready( () => {
    setTimeout( () => {
    $('.loading')
    .css({
    opacity: 0,
    visibility: "hidden"})
    }, 1000);
})

// Animaciones para el texto
$("#textoAnimado").fadeOut("slow", function(){
    $("#textoFade").fadeIn(9000);
});

$("#titulo").css("margin-top", "150px")
.slideUp(2000)
.slideDown(2000);

//Animacion para la imagen principal
$("#quienSoy").fadeIn(2000);

//Animacion para el texto de debajo
$("#textoanimado1").css("margin-top", "150px")
.slideUp(2000)
.slideDown(2000);
$("#textoanimado2")
.css("margin-top", "20px")
.slideUp(2000)
.slideDown(2000);