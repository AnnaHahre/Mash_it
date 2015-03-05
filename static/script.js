      $(document).ready(function(){
        $('#submit_color').bind("click", getPalette);

        $("#fonta").bind("click", getFonts); //FONT

        window.onbeforeunload = function() {
        return "Are you sure you want to leave? Your changes will not be saved!";
    }


/*        var operator = '+=';
        $('#dashboard').click(function(e){
          e.stopPropagation();
          $('#dashboard').animate({left:operator + '-270'}, 1000);
            if(operator == '+='){
              operator = '-=';
            }
            else{
              operator = '+=';
            }
        });

        $('input').click(function(event){
          event.stopPropagation();
        })
        */
      });



      function getPalette(){
        $('#palette').empty();
        var hex = $('#colors').val();
        event.preventDefault();
        $.ajax({
          type: "GET",
          url: "http://localhost:1234/palette/" +hex,
          dataType: "json",

          success: function(response) {
           showPalette(response);
          },
          error: function() {
            alert('Not working!');
            }
          });
        $('#colors').val("");
      }

      function getElement(){
        var hex = jQuery(this).attr('value');
        setHex(hex);
      }

      function setHex(hex){
        $('header h1').click(function (e) {
          e.stopPropagation();
          $(this).css({
            'color' : '#' + hex
          });
        });

        $('header h2').click(function (e) {
          e.stopPropagation();
          $('header h2').css({
            'color' : '#' + hex
          });
        });

        $('.featurette h2').click(function (e) {
          e.stopPropagation();
          $('.featurette h2').css({
            'color' : '#' + hex
          });
        });

        $('span').click(function (e) {
          e.stopPropagation();
          $('span').css({
            'color' : '#' + hex
          });
        });

        $('.featurette p').click(function (e) {
          e.stopPropagation();
          $('.featurette p').css({
            'color' : '#' + hex
          });
        });

        $('nav a').click(function (e) {
          e.stopPropagation();
          $('nav a').css({
            'color' : '#' + hex
          });
        });

        $('nav').click(function (e) {
          e.stopPropagation();
          $('nav').css({
            'background-color' : '#' + hex,
            'border' : '1px solid #' + hex
          });
        });

        /*$('.featurette-image').click(function (e) {
          e.stopPropagation();
          $('.featurette-image').css({
            'border' : '2px solid #' + hex
          });
        });*/

        $('header').click(function (e) {
          e.stopPropagation();
          $('header').css({
            'background-color' : '#' + hex
          });
        });

        $('footer p').click(function (e) {
          e.stopPropagation();
          $('footer p').css({
            'color' : '#' + hex
          });
        });
      }

      function showPalette(response){
        $.each(response, function(index, value) {
          $.each(value, function(index, color) {
            //if (color.length == 5){
              $.each(color, function(index, item) {
                 $('#palette').append("<div class='col' value='" + item + "'><p class='col_p' style=background-color:#" +item + ";' value=" +item+ "></p><p class='hex_name'>#" +item+"</p></div>");
              });
           // }
          });
        });
         $('.col').bind("click", getElement);
      }




//*------------------ FONT SCRIPT -----------------
//*
//*

function getFonts() {
  $user_choice = $("#category").val();
  alert($user_choice);

   $.ajax({
        type: "GET",
        url: "http://localhost:1234/theme/font/category/" + $user_choice,
        dataType: "json",
        success: function(response) {
            showfonts(response);

        },
        error: function() {
            alert('Not working!');
        }
    });
}

function showfonts(fonts) {

    $("#font_list").empty(); //Tömmer #font_list på element 
    $("link[href*='fonts.googleapis']").remove(); //Tömmer head på links-taggar (alla utan övergripande css: som innehåller style.css)
    var script_families = [];
    var font_tag_list = [];

    $.each(fonts, function(i, obj) { //för varje objekt
        var family = obj['family'];
        var font_name = "<li style='font-family:" + obj['family'] + ";'>" + obj['family'] + "</li>"; //skapa ett li-item

        var family_name = family.replace(' ','+');
       // alert(family_name);
        script_families.push(family_name);
        font_tag_list.push(font_name);

    });

    //hämtar in aktuella fonter genom att skriva till head
    for (i = 0; i < script_families.length; i++) { 
        $("head").append("<link href='https://fonts.googleapis.com/css?family=" + script_families[i] + "' rel='stylesheet' type='text/css'>");
    }

    //skriver ut alla font-taggar
    for (i = 0; i < font_tag_list.length; i++) { 
        $("#font_list").append(font_tag_list[i]);
    }

}      

