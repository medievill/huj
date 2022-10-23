$(document).ready(function(){
    $( "#info" ).click(function() {
        alert( "Autor: Michał lat 18, uczeń CKZIU elektryk elo benc" );
    });
});

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    window.getSelection("copy");
    $temp.remove();
  }