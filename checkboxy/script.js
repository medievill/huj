function kolor(color){
    switch(color){
        case "white":
            if($("#bialy").is(":checked")){
                $('#colors').append("<div id='white'></div>");
                $("#white").css("background-color", "white");
            }else{
                $('#white').remove();
            }
            break;

        case "black":
            if($("#czarny").is(":checked")){
                $('#colors').append("<div id='black'></div>");
                $("#black").css("background-color", "black");
            }else{
                $('#black').remove();
            }
            break;
                    
        case "green":
            if($("#zielony").is(":checked")){
                $('#colors').append("<div id='green'></div>");
                $('#green').css("background-color", "green");
            }
            else{
                $('#green').remove();
            }
            break;
                    
        case "blue":
            if($("#niebieski").is(":checked")){
                $('#colors').append("<div id='blue'></div>");
                $('#blue').css("background-color", "blue");
            }else{
                $('#blue').remove();
            }
            break;
                    
        case "red":
            if($("#czerwony").is(":checked")){
                $('#colors').append("<div id='red'></div>");
                $('#red').css("background-color", "red");
            }else{
                $('#red').remove();
            }
            break;
    
        default:
            break;    
    }
    $('input[type="checkbox"]').change(function(){
        var checked = $("input[type='checkbox']:checked").length;
        $('#t').html("Zaznaczono " + checked + " kolor(ow)");
        });
}