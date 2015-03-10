<?php
require'./vendor/autoload.php';

/*
error_reporting(-1);
ini_set('display_errors', 1);
ini_set('output_buffering', 0);
*/

use \Slim\Slim as Slim;

Slim::registerAutoloader();

$app = new Slim(array(
		'templates.path' => './views',
		#'view' => new \Slim\Views\Twig()
));

$app->get('/', function () use ($app) {
	$message = array('title'=>"Mash It");
	$app->render('index.tpl', $message);
});

$app->get('/mash', function () use ($app) {
	$app->render('color.tpl');
});

//*---------------- PALETTE ENDPOINTS ----------------
//*
//*

$app->get('/api/v1/palette/:hex', function ($hex) use ($app) {
  //$num_results = $app->request()->params('num');
	$palette = get_ColorLovers_Palette($hex);
	$response = $app->response();
	$response->header('Content-Type', 'application/json');
	echo json_encode($palette);

}) ->conditions(array('hex' => '[a-fA-F0-9]{6}'));


//*------------------ FONT ENDPOINTS -----------------
//*
//*

//root/theme/font/category
/*$app->get('/api/v1/font/category', function() use ($app){
  $json = getGoogleFonts();
  echo json_encode($json);
}); */

//root/theme/category/:category_name
//OPTIONAL PARAMETERS? :name(/:100(/:200(/:100italic(/:200italic)))))
$app->get('/api/v1/font/category/:name', function($name) use ($app){
    //variants 100, 200, 300, 400, 600, 700, 800, 900, 100italic, 200italic, 300italic, 400italic, 500italic, 600italic, 700italic, 800italic, 900italic.

  $json = getGoogleFonts($name);  

  $fontlist = json_decode($json);
  $items = $fontlist->items;
  $category_list = categorizeFonts($items, $name);

  echo $category_list;

})->conditions(array('name' => '(monospace|sans-serif|serif|handwriting|display)')); 


function categorizeFonts($items, $catname) {
  $category_list = array();
  //array_push($category_list, array("category"=>$catname));
  //array_push($category_list, array("category"=>$catname));

    foreach ( $items as $item )
    {
        if($item->category === $catname) {
          $font_item = array("family"=>$item->family,"variants"=>$item->variants,"subsets"=>$item->subsets);
          array_push($category_list, $font_item);
        }
    }

    $categories = json_encode($category_list);
    return $categories;
    //$handwriting =
    //$monospace =
    //$sans-serif =
    //$serif =
    //$display =

}




$app->get('/api/v1/theme/:hex/:catname', function ($hex, $catname) use ($app) {
  $palette = get_ColorLovers_Palette($hex);
  $json = getGoogleFonts();
  //$response = $app->response();
  //$response->header('Content-Type', 'application/json');
  echo json_encode($palette);
  //echo json_encode($json);

}) ->conditions(array('hex' => '[a-fA-F0-9]{6}'));


//*-----------------ERROR HANDLING ---------------------
//*
//*
$app->error(function(Exception $e) use ($app) {
  $error = array(
      'message' => 'Internal Server Error',
      'status' => 500,  
      'stack' => $e->getMessage()
  );
  
  $app->render('error.php', $error, 500);
});

//*-------- FUNCTIONS FOR GETTING DATA FROM EXTERNAL API'S ---------
//*
//*

function get_ColorLovers_Palette($hex) {
  $client = new GuzzleHttp\Client();

  $url = "http://www.colourlovers.com/api/palettes/top?hex=".$hex."&format=json&sortBy=asc&numResults=5";
  $headers = array('ACCEPT' => 'application/json');

  $response = $client->get($url);
  $data = $response->json();

  /*$color_data = array('palette' => $data);*/
  $all_palettes = [];
  foreach ($data as $color) {
    if (count($color['colors']) == 5){
        $palette = array("palette"=>$color['colors']);
    }
    else{
      continue;
    }
        //foreach ($color['colors'] as $value) {
              
           // array_push($palette, $value);
           // }

      array_push($all_palettes, $palette);
        }
    //}
  return $all_palettes;
  $hex = null;
  
}


function getGoogleFonts() {
  $client = new GuzzleHttp\Client();

  $url = "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDJAA0NAK2blMwOkDSlYo56ljaqW16WoDY&sort=popularity";
  $headers = array('ACCEPT' => 'application/json');

  $response = $client->get($url);
  $data = $response->json();

  //insert categorize_fonts
  return json_encode($data);
}




$app->run();


