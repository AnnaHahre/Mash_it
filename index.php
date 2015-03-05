<?php
require 'vendor/autoload.php';

error_reporting(-1);
ini_set('display_errors', 1);
ini_set('output_buffering', 0);

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

$app->get('/theme', function () use ($app) {
	$app->render('color.tpl');
});

$app->get('/palette/:name', function ($name) use ($app) {
	$palette = get_palette($name);
	$response = $app->response();
	$response->header('Content-Type', 'application/json');
	echo json_encode($palette);

}) ->conditions(array('name' => '[a-fA-F0-9]{6}'));


//Test av skapande av egen api endpoint

$app->get('/api/v1/color/:name', function ($name) use ($app) {
	$palette = get_palette($name);
	echo json_encode($palette);


}) ->conditions(array('name' => '[a-fA-F0-9]{6}'));

//Felmeddelandehantering





//Hämtar färgpaletter från ColorLovers api

function get_palette($hex) {
	$client = new GuzzleHttp\Client();

	$url = "http://www.colourlovers.com/api/palettes/top?hex=".$hex."&format=json&sortBy=asc&numResults=5";
	$headers = array('ACCEPT' => 'application/json');

	$response = $client->get($url);
	$data = $response->json();

	/*$color_data = array('palette' => $data);*/
	$all_palettes = [];
	foreach ($data as $color) {
		if (count($color['colors']) == 5){
        $palette = array("colors"=>$color['colors']);
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

function hex2rgb($hex) {
   $hex = str_replace("#", "", $hex);

   if(strlen($hex) == 3) {
      $r = hexdec(substr($hex,0,1).substr($hex,0,1));
      $g = hexdec(substr($hex,1,1).substr($hex,1,1));
      $b = hexdec(substr($hex,2,1).substr($hex,2,1));
   } else {
      $r = hexdec(substr($hex,0,2));
      $g = hexdec(substr($hex,2,2));
      $b = hexdec(substr($hex,4,2));
   }
   $rgb = array($r, $g, $b);
   //return implode(",", $rgb); // returns the rgb values separated by commas
   return $rgb; // returns an array with the rgb values
}

$app->run();


