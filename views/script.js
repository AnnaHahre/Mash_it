$(document).ready(function(){
  $('#submit_color').bind("click", getPalette);
});

function getPalette(){

  $('#palette').empty();
  var hex = $('#colors').val();
  event.preventDefault();
    $.ajax({
      type: "GET",
      url: "http://localhost:1234/color/" +hex,
      dataType: "json",

      success: function(response) {
        alert('working');
      },
      error: function() {
        alert('Not working!');
        }
      });
    $('#colors').val("");
}

function getHex(){
  var hex = jQuery(this).attr('value');
  setHex(hex);
}

function setHex(hex){
  $('h1').click(function () {
    $(this).css({
      'color' : '#' + hex
    });
  });

  $('h2').click(function () {
    $(this).css({
      'color' : '#' + hex
    });
  });

  $('header').click(function (e) {
    $(e.target).css({
      'background-color' : '#' + hex
          });
        });

}

function showPalette(result){
  //var response = $.parseJSON(result);
  //alert(response);


    //if (value.length == 5){
    




//         $('#palette').append("<div class='col' value='" + item + "'><p class='col_p' style=background-color:#" +item + ";' value=" +item+ "></p><p class='hex_name'>#" +item+"</p></div>");
      });




   $('.col').bind("click", getHex);
}

