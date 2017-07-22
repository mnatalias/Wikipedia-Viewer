$(document).ready(function(){
    //Buscar término al clickear en botón
    $("#boton").click(function(){
        
        var termino = $("#termino").val();
        var url = "https://es.wikipedia.org/w/api.php?action=opensearch&search=" + termino + "&format=json&callback=?";

        //Pedido ajax
        $.ajax({
            type: "GET",
            url: url,
            dataType: 'json',
            success: function(data){
                $("#resultado").html("");
                for(i=1; i<data[1].length; i++){
                    var name = data[1][i];
                    var desc = data[2][i];
                    var link = data[3][i];
                    $('#resultado').append('<div class="row link"><a href="' + link + '"' + 'target="_blank"' + '>' + name + '</a><div>');
                    $('#resultado').append('<div class="row desc">' + desc + '<div>');
                }
                $("#termino").val("");
                $("#resultado .link a").addClass("titulo");
                $("#resultado .desc").addClass("descStyle");
            }
        });//Fin pedido ajax
    });//Fin función click
    
    $("#termino").keypress(function(e){
        if (e.which == 13) {
            $("#boton").click();
        }
    });
});