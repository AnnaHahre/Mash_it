$(document).ready(function(){
  $('#submit_color').bind("click", getPalette); //COLORS

  $("#category").change("click", getFonts); //FONT

  $('#test').click(getElementStyle); //GET STYLES TO GENERATE CSS

  //$('input[name=radioName]:checked', '#myForm').val()


  $('#tabcontrols li').click(function(){
    $('code').empty(); //EMPTY THE CODE-BLOCK
  });

  $('#exit_icon').click(function(){
    location.href="http://localhost:1234/index.php";

  })

  window.onbeforeunload = function() {
    return "Are you sure you want to leave? Your changes will not be saved!";
  }

  //*---------------- LOAD TEMPLATES ----------------
  //*
  $('#temp_one').bind('click', function(){
    $('#template').load('views/template_one.tpl'); 
    $('#dashboard').css({'display': 'block'});

  });

  $('#temp_two').bind('click', function(){
    $('#template').load('views/template_two.tpl');
    $('#dashboard').css({'display': 'block'});

  });  


  //*---------------- TAB-CONTROLL ----------------
  //*
  $('#tabs').find('> div').hide();
 
  $('#tabcontrols li').click( function(event) {
    var value = $(this).attr("data-value");

    if ($(this).hasClass('selected')){
      event.preventDefault();

      $(value).hide();
      $('#tabcontrols li').removeClass();

    }
    else{
      event.preventDefault();
      $('#tabs > div').hide();
      $('#tabcontrols li').removeClass();
      $(this).addClass('selected');
      $(value).show();

    }
 
    $('#colors_choice, #font_choice, #code_choice').click(function(){
    $(this).hide();
    $('#tabcontrols li').removeClass();
   })
   
  });

  $('input, #tabcontrols, #category').click(function(event){
    event.stopPropagation();
  });

});

//*----------------- COLOR-SCRIPT ------------------
//*
function getPalette(){
  $('#palette').empty();
  var hex = $('#colors').val();
  event.preventDefault();
  $.ajax({
    type: "GET",
    url: "http://localhost:1234/api/v1/palette/" +hex,
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

function showPalette(response){
  $.each(response, function(index, value) {
    $.each(value, function(index, color) {
      //if (color.length == 5){
        $.each(color, function(index, item) {
           $('#palette').append("<div class='col' value='#" + item + "'><p class='col_p' style=background-color:#" +item + ";' value=" +item+ "></p><p class='hex_name'>#" +item+"</p></div>");
        });
     // }
    });
  });
   $('.col').bind("click", changeStyle);
}

//*---------------- SCRIPT FOR CHANGING STYLES ON WEBPAGE ----------------
//* not the prettiest code - but it works :)
//*

function changeStyle(e){
  choice = $(this).attr('value');

  $('#template h1, #template h2, h3, h4, .text-muted, footer p, .lead p').click(function(e){
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

  $('.list-unstyled a').click(function(e){
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

  $('.featurette p').click(function(e){
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

  $('nav a').click(function(e){
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

  $('header').click(function(e){
    e.stopPropagation();
    $('header').css({
      'background-color' : choice
    });
  });

  $('nav').click(function(e){
    e.stopPropagation();
    $('nav').css({
      'background-color' : choice,
      'border' : "0px"
    });
  });

  $('.comment').click(function(e){
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
  $('.media-heading').click(function(e){
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
  $('.article').click(function(e){
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

  $('.widget').click(function(e){
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

  $('.widget_heading').click(function(e){
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

  $('.cat_item').click(function(e){
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
}

//*------------------ FONT SCRIPT -----------------
//*
//*

function getFonts() {
  $user_choice = $("#category").val();
  //alert($user_choice);

   $.ajax({
        type: "GET",
        url: "http://localhost:1234/api/v1/font/category/" + $user_choice,
        dataType: "json",
        success: function(response) {
            showfonts(response, $user_choice);

        },
        error: function() {
            alert('Not working!');
        }
    });
}

var monospace = false;
var sans_serif = false;
var serif = false;
var handwriting = false;
var display = false;

function showfonts(fonts, category) {

    $("#font_list").empty(); //Tömmer #font_list på element 
    //$("link[href*='fonts.googleapis']").remove(); //Tömmer head på links-taggar (alla utan övergripande css: som innehåller style.css)
    var script_families = [];
    var font_tag_list = [];

    $.each(fonts, function(i, obj) { //för varje objekt
        var family = obj['font-family'];
        var font_name = "<li class='user_fonts' value='" + obj['font-family'] + "' style='font-family:" + obj['font-family'] + ";'>" + obj['font-family'] + "</li>"; //skapa ett li-item

        var family_name = family.replace(' ','+');
       // alert(family_name);
        script_families.push(family_name);
        font_tag_list.push(font_name);

    });

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

    //skriver ut alla font-taggar
    for (i = 0; i < font_tag_list.length; i++) { 
        $("#font_list").append(font_tag_list[i]);
    }

    //bindet get-element till varje li-element som innehåller fontfamiljer.
    $('.user_fonts').bind("click", changeStyle);
}   

function appendFonts(script_families) {
  for (i = 0; i < script_families.length; i++) { 
          $("head").append("<link href='https://fonts.googleapis.com/css?family=" + script_families[i] + "' rel='stylesheet' type='text/css'>");
      }
}   


function getElementStyle(){
  elements = {};
  //*--------- CODE FOR GENERATING CSS CODE FOR TEMPLATE ONE --------
  //* not the prettiest code - but it works :)
  //*

  if ($('nav').attr('style') === undefined){ }
  else{
    elements['nav'] = $('nav').attr('style');
  }
  if ($('nav a').attr('style') === undefined){ }
  else{
    elements['nav a'] = $('nav a').attr('style');
  }
  if ($('header').attr('style') === undefined){ }
  else{
    elements['header'] = $('header').attr('style');
  }
  if ($('header h1').attr('style') === undefined){ }
  else{
    elements['header h1'] = $('header h1').attr('style');
  }
  if ($('header h2').attr('style') === undefined){ }
  else{
    elements['header h2'] = $('header h2').attr('style');
  }
  if ($('.featurette h2').attr('style') === undefined){ }
  else{
    elements['h2'] = $('.featurette h2').attr('style');
  }
  if ($('.lead').attr('style') === undefined){ }
  else{
    elements['p']  = $('.lead').attr('style');
  }

  if ($('.text-muted').attr('style') === undefined){ }
  else{
    elements['span p']  = $('.text-muted').attr('style');
  }

  if ($('footer p').attr('style') === undefined){ }
  else{
    elements['footer p']  = $('footer p').attr('style');
  }

  //*--------- CODE FOR GENERATING CSS CODE FOR TEMPLATE ONE --------
  //* not the prettiest code - but it works :)
  //*

  if ($('.row h1').attr('style') === undefined){ }
  else{
    elements['h1']  = $('.row h1').attr('style');
  }
  if ($('.article').attr('style') === undefined){ }
  else{
    elements['.article p']  = $('.article').attr('style');
  }

  if ($('.form_heading').attr('style') === undefined){ }
  else{
    elements['.form h4']  = $('.form_heading').attr('style');
  }

  if ($('.media-heading').attr('style') === undefined){ }
  else{
    elements['.comments h4']  = $('.media-heading').attr('style');
  }

  if ($('.comment').attr('style') === undefined){ }
  else{
    elements['.comments p']  = $('.comment').attr('style');
  }

  if ($('.widget_heading').attr('style') === undefined){ }
  else{
    elements['.widget h4']  = $('.widget_heading').attr('style');
  }
  if ($('.widget').attr('style') === undefined){ }
  else{
    elements['.widget p']  = $('.widget').attr('style');
  }

  if ($('.cat_item').attr('style') === undefined){ }
  else{
    elements['.categories li']  = $('.cat_item').attr('style');
  }

  //*--------- APPENDS CSS CODE TO CODE-BLOCK --------
  //*
  if ($.isEmptyObject(elements)){
    $('.css_code').append('No elements has been styled!')
  }
  else{
    $.each(elements, function(key,value){
      $('.css_code').append(key + " {<br>" + value + "<br>}<br>");
    });
  }

}

