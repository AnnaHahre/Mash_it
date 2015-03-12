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
	$palette = get_ColorLovers_Palette($hex, $num_results);
	$response = $app->response();
	$response->header('Content-Type', 'application/json');
  //echo json_encode($palette);
  $app->response->setBody(json_encode($palette));

}) ->conditions(array('hex' => '[a-fA-F0-9]{6}'));


//*------------------ FONT ENDPOINT -----------------
//*
//*

//root/theme/font/category
/*$app->get('/api/v1/font/category', function() use ($app){
  $json = getGoogleFonts();
  echo json_encode($json);
}); */

$app->get('/api/v1/font/category/:name', function($name) use ($app){
//variants 100, 200, 300, 400, 600, 700, 800, 900, 100italic, 200italic, 300italic, 400italic, 500italic, 600italic, 700italic, 800italic, 900italic.

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

  $palettes = get_ColorLovers_Palette($hex, 20);
  $route = $app->request()->getPath();
  $fonts = getGoogleFonts($catname, $route);

  $theme = makeTheme($num_results, $palettes, $fonts);

  $response = $app->response();
  $response->header('Content-Type', 'application/json');
  $app->response->setBody($theme);

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
    for ($i = 1; $i <= $num; $i++) {
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
        $palette = array(
          "palette"=>$color['colors'],
          //"source_url"=>$color['url'],
          //"source_api_url"=>$color['apiUrl'],
          );
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


function getGoogleFonts($catname, $route, $num=null, $random=0) {
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
      array_push($category_list, array("resource_location"=>$route));
      //array_push($category_list, array("fonts"=>[]));

      foreach ( $items as $item )
      {
          if($item->category == $catname) {
            $family_name=$item->family;
            $family_name_new = str_replace(" ", "+", $family_name);
            $font_variants = "";

            foreach ($item->variants as $variant) {
              if (preg_match('/[1-9]00|[1-9]00italic/',$variant)) {
              $font_variants .= $variant.",";
            }
            $font_variants_new = substr($font_variants, 0, -1);
            }

            $css_import = "@import url(http://fonts.googleapis.com/css?family=".$family_name_new.":".$font_variants_new.");";
            $link_import = "<link href='http://fonts.googleapis.com/css?family=".$family_name_new.":".$font_variants_new."' rel='stylesheet' type='text/css'>";

            $font_item = array(
              "font-family"=>$item->family,
              "variants"=>$item->variants,
              "subsets"=>$item->subsets,
              "css_import"=>$css_import,
              "link_import"=>$link_import
              );
            array_push($category_list, $font_item);
          }
      }

  if ($num == null) {
    return $category_list;
  }
  else {
    if ($random == 1) {
    $keys_font = array_keys($category_list);
      shuffle($keys_font);
      foreach($keys_font as $key_font) {
          $new_fonts[] = $category_list[$key_font];
      }
      $category_list = $new_fonts;
    }
      $shorten = array_slice($category_list, 0, $num+1);
      return $shorten;
  }
}

function filterVariants($filter) {
 //make function to filter variants
}




$app->run();


