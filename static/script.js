      $(document).ready(function(){
        $('#submit_color').bind("click", getPalette);

        window.onbeforeunload = function() {
        return "Are you sure you want to leave? Your changes will not be saved!";
    }


        var operator = '+=';
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

