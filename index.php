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

$app->get('/api/v1/doc', function () use ($app) {
  $app->render('documentation.tpl');
});



//*---------------- PALETTE ENDPOINTS ----------------
//*
//*

$app->get('/api/v1/palette/:hex', function ($hex) use ($app) {

  $num = $app->request->get('num');
  if ($num === null)
  {
    $num_results = 5;
  }
  else {
    $num_results = $num;
  }
  
	$palette = get_ColorLovers_Palette($hex, $num_results);
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
$app->get('/api/v1/font/category/:name', function($name) use ($app){
//variants 100, 200, 300, 400, 600, 700, 800, 900, 100italic, 200italic, 300italic, 400italic, 500italic, 600italic, 700italic, 800italic, 900italic.

  $variants = $app->request->get('variants');
  if ($variants === null)
  {
    $fontlist = getGoogleFonts($name);  
    $response = $app->response();
    $response->header('Content-Type', 'application/json');

    echo json_encode($fontlist);
  }
/*  }
  else {
    if (strpos($variants, ',') !== FALSE)
    {
      $variants_list = explode(',', $variants);
      echo var_dump($variants_list);
    }
    else
    {
      echo var_dump($variants);
    }
  }*/
  
})->conditions(array('name' => '(monospace|sans-serif|serif|handwriting|display)')); 

//*------------------ THEME ENDPOINTS -----------------
//*
//*

$app->get('/api/v1/theme/:hex/:catname', function ($hex, $catname) use ($app) {
  $num = 10;
  $palettes = get_ColorLovers_Palette($hex, 20);
  $fonts = getGoogleFonts($catname);

  $theme = makeTheme($num, $palettes, $fonts);

  $response = $app->response();
  $response->header('Content-Type', 'application/json');
  echo $theme;

}) ->conditions(array('hex' => '[a-fA-F0-9]{6}', 'catname' => '(monospace|sans-serif|serif|handwriting|display)'));



function makeTheme($num, $palettes, $fonts) {
  
    $keys_font = array_keys($fonts);
      shuffle($keys_font);
      foreach($keys_font as $key_font) {
          $new_fonts[] = $fonts[$key_font];
      }
      $fonts = $new_fonts;

    $keys_palettes = array_keys($palettes);
      shuffle($keys_palettes);
      foreach($keys_palettes as $key_palettes) {
          $new_palettes[] = $palettes[$key_palettes];
      }
      $palettes = $new_palettes;

    //return $palettes;

    $theme = array();
    for ($i = 0; $i <= $num; $i++) {
      $theme_item = array(
        "font"=>$fonts[$i],
        "color-palette"=>$palettes[$i]
        );
      array_push($theme, $theme_item);
    } 
    return json_encode($theme);
}


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



$app->notFound(function () use ($app) {
  $req = $app->request;
  $content_type = $req->getContentType();
  //$mediaType = $req->getMediaType();

  if ($content_type === "application/json")
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
    
    $app->render('404.tpl', $error, 404);
  }

});



//*-------- FUNCTIONS FOR GETTING DATA FROM EXTERNAL API'S ---------
//*
//*

function get_ColorLovers_Palette($hex, $num) {
  $client = new GuzzleHttp\Client();

  $url = "http://www.colourlovers.com/api/palettes/top?hex=".$hex."&format=json&sortBy=asc&numResults=".$num;
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



function getGoogleFonts($catname) {
  $client = new GuzzleHttp\Client();

  $url = "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDJAA0NAK2blMwOkDSlYo56ljaqW16WoDY&sort=popularity";
  $headers = array('ACCEPT' => 'application/json');

  $response = $client->get($url);
  $data = $response->json();

      //Categorizing fonts by $catname
      $fontlist = json_encode($data);
      $arr = json_decode($fontlist);

      $category_list = array();

      $items = $arr->items;
      //array_push($category_list, array("category"=>$catname));
      //array_push($category_list, array("fonts"=>[]));

      foreach ( $items as $item )
      {
          if($item->category === $catname) {
            $font_item = array(
              "font-family"=>$item->family,
              "variants"=>$item->variants,
              "subsets"=>$item->subsets
              );
            array_push($category_list, $font_item);
          }
      }

  return $category_list;
}

function filterVariants($filter) {
 //make function to filter variants
}




$app->run();


