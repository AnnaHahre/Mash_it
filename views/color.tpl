<!DOCTYPE html>
<html>
  <head>
    <title>Mash:it</title>
    <link rel='stylesheet' href='static/style.css' />

    <meta content="text/html;charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <script type='text/javascript' src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script type='text/javascript' src="static/script.js"></script>
     <!-- Bootstrap Core CSS -->
    <link href="/static/css/bootstrap.min.css" rel="stylesheet">
    <!--<link href="/static/css/blog-post.css" rel="stylesheet">-->

    <!-- Custom CSS -->
    <link href="/static/css/one-page-wonder.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->


  </head>

<body>

  <!--Dashboard -->
 <div id="dashboard" style="display:none">
  <ul id="tabcontrols">
    <!--<li>
      <a href="#template_choice">Template</a>
    </li>-->
    <li>
      <a href="#colors_choice">Color</a>
    </li>
    <li>
      <a href="#font_choice">Font</a>
    </li>
  </ul>

    <div id="tabs">

     

      <div id="colors_choice">
        <h1>Choose a basecolor:</h1>
        <!--<h2>Choose a basecolor for the palette:</h2>-->
        <form action="" method="GET">
          <input type="text" id="colors" name="colors"/>
          <input type="submit" id="submit_color" value="Get Palettes">
          <br>
        </form>


        <div id="palette">
          
        </div><!--end #palette-->

        <input type="button" id="test" value="Generate CSS">

      </div><!--end .colors_choice-->
      <div id="font_choice">
        <h1>Fonta mera</h1>
        <form action="" method="GET">
          <select name="font_category" id="category">
            <option value="sans-serif">Sans-serif</option>
            <option value="serif">Serif</option>
            <option value="monospace">Monospace</option>
            <option value="handwriting">Handwriting</option>
            <option value="display">Display</option>
          </select>
          <input type="button" id="fonta" value="Generera font">    
        </form>

        <ul id="font_list">
          <!--Placeholding fontlist-->
        </ul>

      </div><!--end .font_choie-->
    </div><!--end #tabs-->

    <div id="tool_in_use">
    </div>
  </div><!--end #dashboard-->
 



<div id="template">

  <!-- Navigation -->

   <!--Divs for template_choice-->

      <div id="template_choice">
        <h1>Step 1: Choose a template</h1>
        <div id="template_one">
          <img src="static/img/template_one.png" alt="">
          <h2>One Page Wonder</h2>
          <p>A simple one page template</p>
          <button id="temp_one">Use Template</button>
        </div>
        <div id="template_two">
          <img src="static/img/template_two.png" alt="">
          <h2>One Page Blogg</h2>
          <p>A blog post one page template</p>
          <button id="temp_two">Use Template</button>
        </div>
       
      </div> <!--end #template_choice-->
  <!-- /.container -->
</div><!--end #template-->

  <!-- jQuery -->
  <script src="static/js/jquery.js"></script>

  <!-- Bootstrap Core JavaScript -->
  <script src="static/js/bootstrap.min.js"></script>
  </body>
</html>

