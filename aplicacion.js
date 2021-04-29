$(document).ready(function(){

    var boton1 = $("#boton1")
    var titutlo= $("#links")
    var boton2 = $("#boton2")
    var alimentos = $("#segundo")
    var texto= $("#texto")
    var texto1= $("#primero")


    boton1.click(function(){
        $("#titulo").append(" (tiempos de COVID)")


    })


    boton2.click(function(){
        $("#segundo").hide()

    })



    texto.mouseenter(function(){
        $("#texto").fadeTo("fast",0.5)
    })
    texto.mouseleave(function(){
        $("#texto").fadeTo("slow",1)
    })


    texto1.mouseenter(function(){
        $("#primero").css("background","crimson");
    });
    texto1.mouseleave(function(){
        $("#primero").css("background","white");
    });




});