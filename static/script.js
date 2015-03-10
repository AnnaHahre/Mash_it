$(document).ready(function(){
  $('#submit_color').bind("click", getPalette); //COLORS

  $("#fonta").bind("click", getFonts); //FONT

  window.onbeforeunload = function() {
    return "Are you sure you want to leave? Your changes will not be saved!";
  }

  //*------------- LOADING OF TEMPLATES --------------
  //*
  $('#template_one').bind('click', function(){
    $('#template').load('views/template_one.tpl'); 

  });

  $('#template_two').bind('click', function(){
    $('#template').load('views/template_two.tpl');

  });

  $('#test').click(getElementStyle);
    


  //*---------------- TAB-CONTROLL ----------------
  //*
  //Set the initial state: highlight the first button...
  $('#tabcontrols').find('li:eq(0)').addClass('selected');
 
  //and hide all slides except the first one
  $('#tabs').find('> div:eq(0)').nextAll().hide();
 
  //actions that apply on click of any of the buttons
  $('#tabcontrols li').click( function(event) {
 
    //turn off the link so it doesn't try to jump down the page
    event.preventDefault();
 
    //un-highlight the buttons
    $('#tabcontrols li').removeClass();
 
    //hide all the slides
    $('#tabs > div').hide();
 
    //highlight the current button
    $(this).addClass('selected');
 
    //get the index of the current button...
    var index = $('#tabcontrols li').index(this);
 
    //and use that index to show the corresponding slide
    $('#tabs > div:eq('+index+')').show();
 
  });

  //*------------- CODE FOR SLIDING DASHBOARD ----------------
  //*
  var operator = '+=';
  $('#dashboard').click(function(e){
    e.stopPropagation();
    $('#dashboard').animate({left:operator + '-300'}, 1000);
      if(operator == '+='){
        operator = '-=';
      }
      else{
        operator = '+=';
      }
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
//*
function changeStyle(e){
  //delete choice
  choice = $(this).attr('value');

  $('#template h1, h2, h3, h4, span, footer p, .container p').click(function(e){
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
      'background-color' : choice
    });
  });
/*
  
  $('header h1').click(function (e) {
    e.stopPropagation();
    if (choice.substring(0,1) == "#") {
      $('header h1').css({
      'color' : choice
       });

    }
    else {
      $('header h1').css({
      'font-family' : choice
       });
    }
  });

  $('header h2').click(function (e) {
    e.stopPropagation();
    if (choice.substring(0,1) == "#") {
      $('header h2').css({
        'color' : choice
      });
    }
    else {
      $('header h2').css({
        'font-family' : choice
      });
    }
  });

  $('.featurette h1').click(function (e) {
    e.stopPropagation();
    if (choice.substring(0,1) == "#") {
      $('.featurette h1').css({
        'color' : choice
      });
    }
    else {
      $('.featurette h1').css({
        'font-family' : choice
      });
    }
  });

  $('.featurette h2').click(function (e) {
    e.stopPropagation();
    if (choice.substring(0,1) == "#") {
      $('.featurette h2').css({
        'color' : choice
      });
    }
    else {
      $('.featurette h2').css({
        'font-family' : choice
      });
    }
  });

  $('span').click(function (e) {
    e.stopPropagation();
    if (choice.substring(0,1) == "#") {
      $('span').css({
        'color' : choice
      });
    }
    else {
      $('span').css({
        'font-family' : choice
      });
    }
  });

  $('.featurette p').click(function (e) {
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

  $('.lead p').click(function (e) {
    e.stopPropagation();
    if (choice.substring(0,1) == "#") {
      $('.lead p').css({
        'color' : choice
      });
    }
    else {
      $('.featurette p').css({
        'font-family' : choice
      });
    }
  });

  $('.media p').click(function (e) {
    e.stopPropagation();
    if (choice.substring(0,1) == "#") {
      $('.media p').css({
        'color' : choice
      });
    }
    else {
      $('.featurette p').css({
        'font-family' : choice
      });
    }
  });

  $('.well p').click(function (e) {
    e.stopPropagation();
    if (choice.substring(0,1) == "#") {
      $('.well p').css({
        'color' : choice
      });
    }
    else {
      $('.featurette p').css({
        'font-family' : choice
      });
    }
  });

  $('nav a').click(function (e) {
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

  $('nav').click(function (e) {
    e.stopPropagation();
    $('nav').css({
      'background-color' : choice,
      'border' : '1px solid' + choice
    });
  });

  /*$('.featurette-image').click(function (e) {
    e.stopPropagation();
    $('.featurette-image').css({
      'border' : '2px solid #' + hex
    });
  });

  $('header').click(function (e) {
    e.stopPropagation();
    $('header').css({
      'background-color' : choice
    });
  });

  $('footer p').click(function (e) {
    e.stopPropagation();
    if (choice.substring(0,1) == "#") {
      $('footer p').css({
        'color' : choice
      });
    }
    else {
      $('footer p').css({
        'font-family' : choice
      });
    }
  });*/
}





//*------------------ FONT SCRIPT -----------------
//*
//*

function getFonts() {
  $user_choice = $("#category").val();
  //alert($user_choice);

   $.ajax({
        type: "GET",
        url: "http://localhost:1234/theme/font/category/" + $user_choice,
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
        var family = obj['family'];
        var font_name = "<li class='user_fonts' value='" + obj['family'] + "' style='font-family:" + obj['family'] + ";'>" + obj['family'] + "</li>"; //skapa ett li-item

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
  
  elements['header h1'] = $('header h1').attr('style');
  elements['h2'] = $('h2').attr('style');
  elements['.container p']  = $('.container p').attr('style');

    /*if (elements['header h1'] === undefined){
       alert('undefined');
    }
    else{
      alert('header h1 { ' + elements['header h1'] + '}\n');
    }*/
     
    alert('header h1 { ' + elements['header h1'] + '}\n' + 'h2 { ' + elements['h2'] + '}\n' + 'p { ' + elements['.container p'] + '}\n');

}

