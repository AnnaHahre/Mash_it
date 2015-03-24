var clicked = false; //VARIBLE THAT IS SET TO TRUE IF RANDOM BUTTON IS CLICKED

$(document).ready(function(){  
  $('#submit_color').click(getPalette); //PALETTE
  $('#random_color').click(function(){ //RANDOM PALETTE
    clicked = true;
    $(this).attr('disabled','disabled'); //DISABLES BUTTON UNTIL REQUEST HAS BEEN FULFILLED
        setTimeout(function() {
           $('#random_color').removeAttr('disabled');
        }, 1000);
    getPalette();
  });

  $("#fonta").click(function(){
    $('#error').empty();
    getFonts();
  }); //FONT

  $('#css_button').click(getElementStyle); //GET STYLES TO GENERATE CSS

  $('#exit_icon').click(function(){
    sweetAlert({   
        title: "Are you sure you want to leave?",    
        type: "warning",   
        showCancelButton: true,   
        confirmButtonColor: "FE63B5",   
        confirmButtonText: "Yes, leave!",   
        cancelButtonText: "No, stay!",   
        closeOnConfirm: true,   
        closeOnCancel: true 
      }, 
      function(isConfirm){   
        if (isConfirm) {     
          location.href="http://localhost:1234/index.php"; 
          return false;
        } 
        else {
        } 
      });
  });

  $('#bigger').click(function(){
    type = $(this).val();
    $('#template *').off('click.style'); //reset click.style-events
    $('#template *').off('click.size'); //reset click.size-events
    fontSize(type);
 });
  
  $('#smaller').click(function(){
    type = $(this).val();
    $('#template *').off('click.style'); //reset click.style-events
    $('#template *').off('click.size'); //reset click.size-events
    fontSize(type);
  });

    $('#tabcontrols, #category, #font_list').click(function(){ //reset click.size-events
    $('#template *').off('click.size');
  });
  

  //*---------------- LOAD TEMPLATES ----------------
  //* Using sweetAlert-plugin.

  var first_load = true; // used to identify the first template-choice done by session.
  $('#template_one').bind('click', function(){
    if(first_load) {
      $('#template').load('views/template_one.tpl'); 
      first_load = false; 
    }
    else {
      sweetAlert({   
        title: "Are you sure you want to change template?",   
        text: "Your changes will get lost!",   
        type: "warning",   
        showCancelButton: true,   
        confirmButtonColor: "FE63B5",   
        confirmButtonText: "Yes, change it!",   
        cancelButtonText: "No, keep my changes!",   
        closeOnConfirm: true,   
        closeOnCancel: true 
      }, 
      function(isConfirm){   
        if (isConfirm) {     
          $('#template').load('views/template_one.tpl'); 
          //return false;
        } 
        else {
         // Do nothing.   
        } 
      });
    }
  });

  $('#template_two').bind('click', function(){
    if(first_load) {
      $('#template').load('views/template_two.tpl'); 
      first_load = false; 
    }
    else {
      sweetAlert({   
        title: "Are you sure you want to change template?",   
        text: "Your changes will get lost!",   
        type: "warning",   
        showCancelButton: true,   
        confirmButtonColor: "FE63B5",   
        confirmButtonText: "Yes, change it!",   
        cancelButtonText: "No, keep my changes!",   
        closeOnConfirm: true,   
        closeOnCancel: true 
      }, 
      function(isConfirm){   
        if (isConfirm) {     
          $('#template').load('views/template_two.tpl'); 
          //return false;
        } 
        else {
         // Do nothing.   
        } 
      });
    }
  });  
  $('#template_three').bind('click', function(){
    if(first_load) {
      $('#template').load('views/template_three.tpl');
      first_load = false; 
    }
    else {
      sweetAlert({   
        title: "Are you sure you want to change template?",   
        text: "Your changes will get lost!",   
        type: "warning",   
        showCancelButton: true,   
        confirmButtonColor: "FE63B5",   
        confirmButtonText: "Yes, change it!",   
        cancelButtonText: "No, keep my changes!",   
        closeOnConfirm: true,   
        closeOnCancel: true 
      }, 
      function(isConfirm){   
        if (isConfirm) {     
          $('#template').load('views/template_three.tpl'); 
          //return false;
          //window.scrollTo(0);
        } 
        else {
         // Do nothing.   
        } 
      });
    }
  });

  //*---------------- TAB-CONTROLL FOR DASHBOARD ----------------
  //*
  //$('#tabs').find('> div').hide();
 
  $('#tabcontrols li').click( function(event) {
    $('.css_code').empty();
    var value = $(this).attr("data-value");

    if ($(this).hasClass('selected')){
      event.preventDefault();

      $(value).animate(
                    {
                      left: '-300px'
                    });
      $('#tabcontrols li').removeClass();
    }
    else{
      event.preventDefault();
      $('#tabs > div').animate(
                    {
                      left: '-300px'
                    });
      $('#tabcontrols li').removeClass();

      $(this).addClass('selected');
      
      $(value).animate({
                        left: '100px',
                      });
    }
 
    $('#colors_choice, #font_choice, #code_choice, #template_choice').click(function(){
      $(this).animate(
                    {
                      left: '-300px'

                    });
      $('#tabcontrols li').removeClass();
   })

  });

  $('input, #tabcontrols, #category, #fontsize, #random_color, .css_code, #fonta').click(function(event){
    event.stopPropagation();
  });

}); //END DOCUMENT.READY FUNCTION

//*---------------- SIZE-SCRIPT ----------------
//*
function fontSize(type){
  $('#template h1, #template h2, #template p, .container h1, .container h4, .list-unstyled, nav, span').on('click.size', function(){
    
   if (type == 'increase'){
      var curFontSize = $(this).css('font-size');
      $(this).css('font-size', parseInt(curFontSize) + 2);
      }
  else if (type == "decrease"){
      var curFontSize = $(this).css('font-size');
      $(this).css('font-size', parseInt(curFontSize) - 2);
      }
  });
}

//*----------------- COLOR-SCRIPT ------------------
//*
function getPalette(event){
  $('#palette').empty();
  if (clicked){ 
    random_array = ["111111", "222222", "333333", "444444", "555555", "666666", "777777", "888888", "999999", "000000", "aaaaaa", "bbbbbb", "cccccc", "dddddd", "eeeeee", "ff9900", "008080", "ffc0cb", "00ffff", "40e0d0", "008080", "33FF33", "FF0000", "0000FF", "8B8B7E"]; //made this array because there isnt palettes for all hex codes that a hexcode generator would generate.
    var hex = random_array.sort(function() {return 0.5 - Math.random()})[1];
    clicked = false;
  }
  else{
    var hex = $('#colors').val();
    event.preventDefault();
  }
  
  $.ajax({
    type: "GET",
    url: "http://localhost:1234/api/v1/palette/" +hex,
    dataType: "json",

    success: function(response) {
     showPalette(response);
    },
    error: function() {
      $('#colors_choice').animate({left: '-300px'});
      $('#tabcontrols li').removeClass();
      //$('#palette').append('<p style="font-size: .9em; color:#000000">ERROR "Invalid input": <br> Please check if you entered a valid hexcode - 6 characters, a combination of A-F, a-f and/or 0-9. Please try again.</p>');
      sweetAlert({   
        title: "Invalid input!",   
        text: "Check if you entered a valid hexcode - 6 characters, a combination of A-F, a-f and/or 0-9. Please try again.",   
        type: "warning",    
        confirmButtonColor: "FE63B5",   
        confirmButtonText: "Ok",   
        closeOnConfirm: true,   
      }, 
      function(isConfirm){   
        if (isConfirm) {     
          $('#tabcontrols li').removeClass();
        } 
        else {
         // Do nothing.   
        } 
      });
      }
    });
  $('#colors').val("");
}

function showPalette(response){
  var palette_list = response.slice(1, response.length); //removes description-object (object 1).
  if (palette_list.length == 0){
    $('#palette').append('<p style="font-size: .9em; color:#ffffff">Sorry. There is no available palettes with choosen or random hexcode.</p>');

  }
  else{
    $.each(palette_list, function(index, value) {
      var palette_obj = value['palette'];

      $.each(palette_obj, function(colors, item) {
        $('#palette').append("<div class='col' value='#" + item + "'><p class='col_p' style=background-color:#" +item + ";' value=" +item+ "></p><p class='hex_name'>#" +item+"</p></div>");
     
      });
    });
    $('.col').bind("click", changeStyle);
  }  
}

//*---------------- SCRIPT FOR CHANGING STYLES ON WEBPAGE ----------------
//* not the prettiest code - but it works :)
//*

function changeStyle(e){
  choice = $(this).attr('value');

  $('#template h1, #template h2, h3, h4, .text-muted, footer p, .lead p').on('click.style', function(e){
    e.stopPropagation();
    if (choice.substring(0,1) == "#") {
      $(e.target).css({
        'color' : choice
      });
    }
    else {
      $(e.target).css({
      'font-family' : choice
      });
    }
  });

  $('.list-unstyled a').on('click.style', function(e){
    e.stopPropagation();
    if (choice.substring(0,1) == "#") {
      $('.list-unstyled a').css({
        'color' : choice
      });
    }
    else {
      $('.list-unstyled a').css({
        'font-family' : choice
      });
    }
  });

  $('.featurette p').on('click.style', function(e){
    e.stopPropagation();
    if (choice.substring(0,1) == "#") {
      $('.featurette p').css({
        'color' : choice
      });
    }
    else {
      $('.featurette p').css({
        'font-family' : choice
      });
    }
  });

  $('nav a').on('click.style', function(e){
    e.stopPropagation();
    if (choice.substring(0,1) == "#") {
      $('nav a').css({
        'color' : choice
      });
    }
    else {
      $('nav a').css({
        'font-family' : choice
      });
    }
  });

  $('header').on('click.style', function(e){
    e.stopPropagation();
    $('header').css({
      'background-color' : choice
    });
  });

  $('nav').on('click.style', function(e){
    e.stopPropagation();
    $('nav').css({
      'background-color' : choice,
      'border' : "0px"
    });
  });

  $('.comment').on('click.style', function(e){
    e.stopPropagation();
    if (choice.substring(0,1) == "#") {
      $('.comment').css({
        'color' : choice
      });
    }
    else {
      $('.comment').css({
        'font-family' : choice
      });
    }
  });
  $('.media-heading').on('click.style', function(e){
    e.stopPropagation();
    if (choice.substring(0,1) == "#") {
      $('.media-heading').css({
        'color' : choice
      });
    }
    else {
      $('.media-heading').css({
        'font-family' : choice
      });
    }
  });
  $('.article').on('click.style', function(e){
    e.stopPropagation();
    if (choice.substring(0,1) == "#") {
      $('.article').css({
        'color' : choice
      });
    }
    else {
      $('.article').css({
        'font-family' : choice
      });
    }
  });

  $('.widget').on('click.style', function(e){
    e.stopPropagation();
    if (choice.substring(0,1) == "#") {
      $('.widget').css({
        'color' : choice
      });
    }
    else {
      $('.widget').css({
        'font-family' : choice
      });
    }
  });

  $('.widget_heading').on('click.style', function(e){
    e.stopPropagation();
    if (choice.substring(0,1) == "#") {
      $('.widget_heading').css({
        'color' : choice
      });
    }
    else {
      $('.widget_heading').css({
        'font-family' : choice
      });
    }
  });

  $('.cat_item').on('click.style', function(e){
    e.stopPropagation();
    if (choice.substring(0,1) == "#") {
      $('.cat_item').css({
        'color' : choice
      });
    }
    else {
      $('.cat_item').css({
        'font-family' : choice
      });
    }
  });

//handles for template three

$('.clean_temp article p').on('click.style', function(e){
    e.stopPropagation();
    if (choice.substring(0,1) == "#") {
      $('.clean_temp article p').css({
        'color' : choice
      });
    }
    else {
      $('.clean_temp article p').css({
        'font-family' : choice
      });
    }
  });

$('.clean_temp article blockquote').on('click.style', function(e){
    e.stopPropagation();
    if (choice.substring(0,1) == "#") {
      $('.clean_temp article blockquote').css({
        'color' : choice
      });
    }
    else {
      $('.clean_temp article blockquote').css({
        'font-family' : choice
      });
    }
  });

$('.clean_temp article h2').on('click.style', function(e){
    e.stopPropagation();
    if (choice.substring(0,1) == "#") {
      $('.clean_temp article h2').css({
        'color' : choice
      });
    }
    else {
      $('.clean_temp article h2').css({
        'font-family' : choice
      });
    }
  });

$('.clean_temp .meta').on('click.style', function(e){
    e.stopPropagation();
    if (choice.substring(0,1) == "#") {
      $('.clean_temp .meta').css({
        'color' : choice
      });
    }
    else {
      $('.clean_temp .meta').css({
        'font-family' : choice
      });
    }
  });

$('.clean_temp footer').on('click.style', function(e){
    e.stopPropagation();
    $('.clean_temp footer').css({
      'background-color' : choice
    });
  });

$('.clean_temp').on('click.style', function(e){
    e.stopPropagation();
    $('.clean_temp').css({
      'background-color' : choice
    });
  });


}

//*------------------ FONT SCRIPT -----------------
//*
//*
function getFonts() {
  $user_choice = $("#category").val();

   $.ajax({
    type: "GET",
    url: "http://localhost:1234/api/v1/font/category/" + $user_choice,
    dataType: "json",
    beforeSend: function() { $('#font_choice').addClass("loading") }, //start loading animation
    success: function(response) {
      showfonts(response, $user_choice);

    },
    error: function() {
      $('#font_choice').animate({left: '-300px'});
      $('#tabcontrols li').removeClass();
      //$('#error').append('<p style="font-size:.9em; color:#000000; margin-top:10px; padding:10px;">ERROR:<br> There seems to be a problem with the connection. <br>Please try again or if the problem persists please contact us at info@mashit.nu.</p>');
      sweetAlert({   
        title: "There seems to be a problem with the connection!",   
        text: "Please try again or if the problem persists please contact us at info@mashit.nu",   
        type: "warning",    
        confirmButtonColor: "FE63B5",   
        confirmButtonText: "OK",   
        closeOnConfirm: true,   
      }, 
      function(isConfirm){   
        if (isConfirm) {     
          $('#category').val('');
          $('#font_choice').removeClass("loading")
        } 
      });
    }
    });
}

//Global variables preventing dubble load of script links.
var monospace = false;
var sans_serif = false;
var serif = false;
var handwriting = false;
var display = false;

function showfonts(fonts, category) {
    $("#font_list").empty(); //Empty #font_list
    var script_families = [];
    var font_tag_list = [];
    var font_list = fonts.slice(1, fonts.length); //removes description-object (object 1).

    //create li-tag and link-tag name for every font-obj
    $.each(font_list, function(i, obj) { //for every object
      var family = obj['font-family'];
      var fam = '"'+obj['font-family']+'"'; //fix for numreric styles <" ">
      var font_name = "<li class='user_fonts' value='" + fam + "' style='font-family:" + fam + ";'>" + family + "</li>"; //create li-item
    
      var family_name = family.replace(/\s/g,'+'); //create link-name
      if ($.inArray( "regular", obj['variants']) == -1) { //check for fonts not aviable as regular variants (returns as 400)
        family_name += ":" + obj['variants'][0]; //add variant
      }
      script_families.push(family_name);
      font_tag_list.push(font_name);
    });

    //print font-links to head (via appendFonts())
    if (category == "monospace" && monospace == false) {
      appendFonts(script_families);
      monospace = true;
    }
    else if (category == "sans-serif" && sans_serif == false) {
      appendFonts(script_families);
      sans_serif = true;
    }
    else if (category == "serif" && serif == false) {
      appendFonts(script_families);
      serif = true;
    }
    else if (category == "handwriting" && handwriting == false) {
      appendFonts(script_families);
      handwriting = true;
    }
    else if (category == "display" && display == false) {
      appendFonts(script_families);
      display = true;
    }

    //print all font-tags to page
    for (i = 0; i < font_tag_list.length; i++) { 
        $("#font_list").append(font_tag_list[i]);
    }

    $('.user_fonts').bind("click", changeStyle); //bind click-event
    $('#font_choice').removeClass("loading"); //end loading animation

}   

function appendFonts(script_families) {
  for (i = 0; i < script_families.length; i++) { 
    $("head").append("<link href='https://fonts.googleapis.com/css?family=" + script_families[i] + "' rel='stylesheet' type='text/css'>");
  }
}   

//*--------- CODE FOR GENERATING CSS CODE-------------------
//*
function getElementStyle(){
  elements = {};
  //*--------- CODE FOR GENERATING CSS CODE FOR TEMPLATE ONE --------
  //* not the prettiest code - but it works :)
  //*

  if ($('nav').attr('style') === undefined){ }
  else{
    var styles = $('nav').attr('style');
    styles = styles.split(";");
    elements['nav'] = styles;
  }
  if ($('nav a').attr('style') === undefined){ }
  else{
    var styles = $('nav a').attr('style');
    styles = styles.split(";");
    elements['nav a'] = styles;
  }
  if ($('header').attr('style') === undefined){ }
  else{
    var styles = $('header').attr('style');
    styles = styles.split(";");
    elements['header'] = styles;
  }
  if ($('header h1').attr('style') === undefined){ }
  else{
    var styles = $('header h1').attr('style');
    styles = styles.split(";");
    elements['header h1'] = styles;
  }
  if ($('header h2').attr('style') === undefined){ }
  else{
    var styles = $('header h2').attr('style');
    styles = styles.split(";");
    elements['header h2'] = styles;
  }
  if ($('.featurette h2').attr('style') === undefined){ }
  else{
    var styles = $('.featurette h2').attr('style');
    styles = styles.split(";");
    elements['h2'] = styles;
  }
  if ($('.lead').attr('style') === undefined){ }
  else{
    var styles = $('.lead').attr('style');
    styles = styles.split(";");
    elements['p'] = styles;
  }
  if ($('.text-muted').attr('style') === undefined){ }
  else{
    var styles = $('.text-muted').attr('style');
    styles = styles.split(";");
    elements['p span'] = styles;
  }
  if ($('footer p').attr('style') === undefined){ }
  else{
    var styles = $('footer p').attr('style');
    styles = styles.split(";");
    elements['footer p'] = styles;
  }

  //*--------- CODE FOR GENERATING CSS CODE FOR TEMPLATE TWO --------
  //* not the prettiest code - but it works :)
  //*

  if ($('.row h1').attr('style') === undefined){ }
  else{
    var styles = $('.row h1').attr('style');
    styles = styles.split(";");
    elements['h1'] = styles;
  }
  if ($('.article').attr('style') === undefined){ }
  else{
    var styles = $('.article').attr('style');
    styles = styles.split(";");
    elements['.article p'] = styles;
  }
  if ($('.form_heading').attr('style') === undefined){ }
  else{
    var styles = $('.form_heading').attr('style');
    styles = styles.split(";");
    elements['.form h4'] = styles;
  }
  if ($('.media-heading').attr('style') === undefined){ }
  else{
    var styles = $('.media-heading').attr('style');
    styles = styles.split(";");
    elements['.comments h4'] = styles;
  }
  if ($('.comment').attr('style') === undefined){ }
  else{
    var styles = $('.comment').attr('style');
    styles = styles.split(";");
    elements['.comment p'] = styles;
  }
  if ($('.widget_heading').attr('style') === undefined){ }
  else{
    var styles = $('.widget_heading').attr('style');
    styles = styles.split(";");
    elements['.widget h4'] = styles;
  }
  if ($('.widget').attr('style') === undefined){ }
  else{
    var styles = $('.widget').attr('style');
    styles = styles.split(";");
    elements['.widget p'] = styles;
  }
  if ($('.cat_item').attr('style') === undefined){ }
  else{
    var styles = $('.cat_item').attr('style');
    styles = styles.split(";");
    elements['.categories li'] = styles;
  }

   //*--------- CODE FOR GENERATING CSS CODE FOR TEMPLATE THREE --------
  //* not the prettiest code - but it works :)
  //* SOME CODE FROM THE ABOW TEMPLATES INHERITS

  if ($('.clean_temp article p').attr('style') === undefined){ }
  else{
    var styles = $('.clean_temp article p').attr('style');
    styles = styles.split(";");
    elements['article p'] = styles;
  }

  if ($('.clean_temp article blockquote').attr('style') === undefined){ }
  else{
    var styles = $('.clean_temp article blockquote').attr('style');
    styles = styles.split(";");
    elements['article blockquote'] = styles;
  }

   if ($('.clean_temp article h2').attr('style') === undefined){ }
  else{
    var styles = $('.clean_temp article h2').attr('style');
    styles = styles.split(";");
    elements['article h2'] = styles;
  }

  if ($('.clean_temp .meta').attr('style') === undefined){ }
  else{
    var styles = $('.clean_temp .meta').attr('style');
    styles = styles.split(";");
    elements['header .meta'] = styles;
  }

  if ($('.clean_temp').attr('style') === undefined){ }
  else{
    var styles = $('.clean_temp').attr('style');
    styles = styles.split(";");
    elements['body'] = styles;
  }

  if ($('.clean_temp footer').attr('style') === undefined){ }
  else{
    var styles = $('.clean_temp footer').attr('style');
    styles = styles.split(";");
    elements['footer'] = styles;
  }
  

  //*--------- APPENDS CSS CODE TO CODE-BLOCK --------
  //*

  $('.css_code').empty();

  if ($.isEmptyObject(elements)){
    $('.css_code').append('No elements has been styled!')
  }
  else{
    var css_imports = []; 
    $.each(elements, function(key,value){     
      for (var i = 0; i < value.length; i++) {
        if (value[i].search("font-family") != -1) { //create google fonts import
          var family = value[i].split(':');
          if ((family[1].search("'") != -1) || family[1].search("\"") != -1) {
              var fam = family[1].substring(2,family[1].length -1); //remove quotation marks
          }
          else {
            var fam = family[1].substring(1,family[1].length); //no quotation marks
          }

          new_family = fam.replace(/\s/g, '+');
          var css_import = "@import url(http://fonts.googleapis.com/css?family=" + new_family+ ");";
          css_imports.push(css_import);  
        }
      };
    });
    
    var css_to_be_imported = css_imports.sort().filter(function(item, pos) { //remove dublicated of CSS-imports
      return !pos || item != css_imports[pos - 1];
    })

    for (var i = 0; i < css_to_be_imported.length; i++) {
      $('.css_code').append(css_to_be_imported[i] + "<br><br>"); //append font-import
    };


      $.each(elements, function(key,value){
        css_value = "";
        for (var i = 0; i < value.length -1; i++) {
          if (value[i].search("color") != -1) { //convert RGB to HEX
            new_col = "";
            var color = value[i].split(':');
            var col = color[1].substring(1,color[1].length);
            new_col = rgb2hex(col);
            if (color[0] == "background-color") {
              css_value += "background-color: " + new_col + ";<br>"; //write RGB (background-color)
            }
            else {
              css_value += "color: " + new_col + ";<br>"; //write RGB (color)
            }
          }
          else {
            css_value += value[i] + ";<br>"; //write other style-types
          }
        }
        $('.css_code').append(key + " {<br>" + css_value + "}<br><br>"); //append string to .css_code
      });
  }
}


//JQuery-converter (RBG to HEX)
function rgb2hex(rgb){
 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}


