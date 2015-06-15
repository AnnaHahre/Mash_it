<?php 
//*-------- FUNCTIONS FOR GETTING AND PROCESSING DATA FROM EXTERNAL API'S ---------
//* Mash:it; 2015
//*


function get_ColorLovers_Palette($hex, $route, $num) {
  //update to request and process more plalettes to make sure we always returns palattes of 5-colors.
  $client = new GuzzleHttp\Client();

  $url = "http://www.colourlovers.com/api/palettes/top?hex=".urlencode($hex)."&format=json&sortBy=asc&numResults=".urlencode($num);
  $headers = array('ACCEPT' => 'application/json');

  $response = $client->get($url);
  $data = $response->json();


  $all_palettes = array();
  array_push($all_palettes, array("resource_location"=>$route));
  foreach ($data as $color) {
    if (count($color['colors']) == 5) {
        $palette = array(
          "palette"=>$color['colors'],
          "source_url"=>$color['url'],
          "source_api_url"=>$color['apiUrl'],
          );
        array_push($all_palettes, $palette);
    }
  }
  return $all_palettes;
  $hex = null;
  
}


function getGoogleFonts($catname, $route, $num=null, $random=0) {
  $client = new GuzzleHttp\Client();

  $url = "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAVHvP2G42qU1pcZ-OshZ5x7_CKNUEmX_E&sort=popularity";
  $headers = array('ACCEPT' => 'application/json');

  $response = $client->get($url);
  $data = $response->json();

  //Categorizing fonts by $catname
  $fontlist = json_encode($data);
  $arr = json_decode($fontlist);

  $category_list = array();

  $items = $arr->items;
  array_push($category_list, array("resource_location"=>$route));

  foreach ( $items as $item )
  {
    if($item->category == $catname) {
      $family_name=$item->family;
      $family_name_new = str_replace(" ", "+", $family_name); //make family-name useable for import strings
      $font_variants = "";

      foreach ($item->variants as $variant) { //get alla font variants to be included in the import
        if (preg_match('/[1-9]00|[1-9]00italic/',$variant)) { //reg-ex: 100-900 / 100italic-900italic.
        $font_variants .= $variant.",";
        }
        else if($variant == "regular") {
          $font_variants .= "400,";
        }
        else if ($variant == "italic") {
          $font_variants .= "400italic,";
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

  if ($num == null) { //check if parameter-value for num_results is set
    return $category_list;
  }
  else {
    if ($random == 1) { //checks if parameter value for ramdom is set
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


//*-------- FUNCTIONS USED BY THE API-FUNCTIONS ---------
//*
//*


function makeTheme($num, $route, $palette, $font) {
  if(count($palette) == 1) {
    $num = 0;
  }
  else if (count($palette) <= $num+1) {
    $num = count($palette) - 1;
  }

  $theme = array();
  array_push($theme, array("resource_location"=>$route));

  if ($num != 0) {
    $palettes = array_slice($palette, 1, count($palette));
    $fonts = array_slice($font, 1, count($font));
    
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

    for ($i = 0; $i < $num; $i++) {
      $theme_item = array(
        "font"=>$fonts[$i],
        "color-palette"=>$palettes[$i]
        );
      array_push($theme, $theme_item);
    } 
  }
  return json_encode($theme);
}