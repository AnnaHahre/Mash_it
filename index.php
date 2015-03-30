<?php
//*-------- APPLICATION ENDPOINTS & ROUTING ---------
//* Mash:it; 2015
//*

if (!ini_get('date.timezone')) //Added cuz of problem seeing fonts on localhost - complaining about timezone
{ date_default_timezone_set('Europe/Stockholm');}

require "ex_apis.php"; //functions for handling external api's
require'./vendor/autoload.php';

use \Slim\Slim as Slim;

Slim::registerAutoloader();

$app = new Slim(array(
  'templates.path' => './views',
));

$app->get('/', function () use ($app) {
  $app->render('index.tpl');
});

$app->get('/mash', function () use ($app) {
  $app->render('color.tpl');
});

$app->get('/api/v1/doc', function () use ($app) {
  $app->render('documentation.tpl');
});


//*---------------- PALETTE ENDPOINT ----------------
//*
//*

$app->get('/api/v1/palette/:hex', function ($hex) use ($app) {

  $num = $app->request->get('num_results');

  if ($num == null) { //parameter not set 
    $num_results = 6;
  }
  else if ($num <= 10 && $num > 0) { //parameter is inbetween 1-10
    $num_results = $num;
  }
  else { //responding with error 400 (text/html or application/json)
    $req = $app->request;
    $content_type = $req->getContentType();

    if ($content_type == "application/json") { //error-message in json
      $response = $app->response();
      $response->header('Content-Type', 'application/json');
      echo json_encode(     
        array(
            'code' => 400,
            'message' => 'bad request'
      ));
      exit;
    }
    else { //error-message in text/html
      $error = array(
        'message' => 'bad request',
        'status' => 400,  
      );
      
      $app->render('error.tpl', $error, 400);
      exit;
    }
  }

  //get & return palette
  $route = $app->request()->getPath();
  $palette = get_ColorLovers_Palette($hex, $route, $num_results);
  $response = $app->response();
  $response->header('Content-Type', 'application/json');
  $app->response->setBody(json_encode($palette));

}) ->conditions(array('hex' => '[a-fA-F0-9]{6}'));


//*------------------ FONT ENDPOINT -----------------
//*
//*

$app->get('/api/v1/font/category/:name', function($name) use ($app){
//future updates: handle variants in application
// 100, 200, 300, 400, 600, 700, 800, 900, 100italic, 200italic, 300italic, 400italic, 500italic, 600italic, 700italic, 800italic, 900italic.

  $num = $app->request->get('num_results');
  $random = $app->request->get('random');

  if ($num == null && $random == null) { //parameters not set 
    $route = $app->request()->getPath();
    $fontlist = getGoogleFonts($name, $route);  
  
  }
  else if ($num == null || $random == null) { //check if only one parameter is set (2 required)
    $req = $app->request;
    $content_type = $req->getContentType();

    if ($content_type == "application/json") { //error-message in json
      $response = $app->response();
      $response->header('Content-Type', 'application/json');
      echo json_encode(     
        array(
            'code' => 400,
            'message' => 'bad request',
            'error' => '1 parameter is set, 2 required',
      ));
      exit;
    }
    else { //error-message in text/html
      $error = array(
        'message' => 'bad request',
        'status' => 400,  
        'error' => '1 parameter is set, 2 required',
      );
      $app->render('error.tpl', $error, 400);
      exit;
    }
  }
  else if (($num <= 10 && $num > 0 && is_numeric($num)) && ($random == "0" || $random == "1")) { //check if parametervalues are valid numbers (1-10 | 0/1)
    $route = $app->request()->getPath();
    $fontlist = getGoogleFonts($name, $route, $num, $random);
  }
  else { //responding with error 400 (text/html or application/json)
    $req = $app->request;
    $content_type = $req->getContentType();

    if ($content_type == "application/json") {
      $response = $app->response();
      $response->header('Content-Type', 'application/json');
      echo json_encode(     
        array(
            'code' => 400,
            'message' => 'bad request'
      ));
      exit;
    }
    else {
      $error = array(
        'message' => 'bad request',
        'status' => 400,  
      );
      $app->render('error.tpl', $error, 400);
      exit;
    }
  }

    $response = $app->response();
    $response->header('Content-Type', 'application/json');
    $app->etag('unique-resource-id'); //cache
    $app->expires('+1 week'); //update after 1 week
    $app->response->setBody(json_encode($fontlist));

})->conditions(array('name' => '(monospace|sans-serif|serif|handwriting|display)')); 


//*------------------ THEME ENDPOINTS -----------------
//* 
//*

$app->get('/api/v1/theme/:hex/:catname', function ($hex, $catname) use ($app) {

$num = $app->request->get('num_results');

  if ($num == null) { //parameter not set 
    $num_results = 10;
  }
  else if ($num <= 10 && $num > 0 && is_numeric($num)) { //parameter value is between 1-10
    $num_results = $num;
  }
  else { //responding with error 400 (text/html or application/json)
    $req = $app->request;
    $content_type = $req->getContentType();

    if ($content_type == "application/json") { //error-message in json
      $response = $app->response();
      $response->header('Content-Type', 'application/json');
      echo json_encode(     
        array(
            'code' => 400,
            'message' => 'bad request'
      ));
      exit;
    }
    else { //error-message in text/html
      $error = array(
        'message' => 'bad request',
        'status' => 400,  
      );
      
      $app->render('error.tpl', $error, 400);
      exit;
    }
  }
  $route = $app->request()->getPath();
  $palettes = get_ColorLovers_Palette($hex, $route, 20);

  $fonts = getGoogleFonts($catname, $route);

  $route = $app->request()->getPath();
  $theme = makeTheme($num_results, $route, $palettes, $fonts);

  $response = $app->response();
  $response->header('Content-Type', 'application/json');
  $app->response->setBody($theme);

}) ->conditions(array('hex' => '[a-fA-F0-9]{6}', 'catname' => '(monospace|sans-serif|serif|handwriting|display)'));



//*-----------------ERROR HANDLING ---------------------
//*
//*

$app->error(function(Exception $e) use ($app) {
  $error = array(
      'message' => 'Internal Server Error',
      'status' => 500,  
      'stack' => $e->getMessage()
  );
  $app->render('500.tpl', $error, 500);
});


$app->notFound(function () use ($app) {
  $req = $app->request;
  $content_type = $req->getContentType();

  if ($content_type == "application/json")
  {
    $response = $app->response();
    $response->header('Content-Type', 'application/json');
    echo json_encode(
            array(
                'code' => 404,
                'message' => 'Not found'
            ));
  }
  else {
    $error = array(
      'message' => 'resource not found',
      'status' => 404,  
    );
    
    $app->render('error.tpl', $error, 404);
  }
});



$app->run();


