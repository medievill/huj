$(document).ready(function(){
    $('#num').click(function(){
        var check = $("input:checkbox:checked").length;
        alert("Zaznaczono " + check + " checkboxow");
    });
    $('#white').click(function(){
        $('.white').css("background-color", "lightgray");
    });
    $('#black').click(function(){
        $('.black').css("background-color", "black");
        $('.black').css('color', 'white');
    });
    $('#green').click(function(){
        $('.green').css("background-color", "green");
    });
    $('#blue').click(function(){
        $('.blue').css("background-color", "blue");
        $('.blue').css('color', 'white');
    });
    $('#red').click(function(){
        $('.red').css("background-color", "red");
        $('.red').css('color', 'white');
    });
});