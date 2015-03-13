<!DOCTYPE html>
<html>
  <head>
    <title>Mash:it;</title>
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
    <h2>mash:it</h2>
    <!--<li>
      <a href="#template_choice">Template</a>
    </li>-->
    <li id="color_icon" data-value="#colors_choice">
      <a href="#colors_choice"></a>
    </li>
    <li id="font_icon" data-value="#font_choice">
      <a href="#font_choice"></a>
    </li>
    <li id="code_icon" data-value="#code_choice">
      <a href="#code_choice"></a>
    </li>
    <li id="exit_icon">
      <a href="/index.php"></a>
    </li>
  </ul>

    <div id="tabs">
      <div id="colors_choice" data-value="#colors_choice">
        <h1>Choose a color:</h1>
        <form action="" method="GET">
          <input type="text" id="colors" name="colors" placeholder="Enter a valid 6-digit hexcode"/>
          <span class="unit">#</span>
          <input type="submit" id="submit_color" value="Get Palettes">
          <input type="button" id="random_color" value="Random">
        </form>
        <div id="palette"></div><!--end #palette-->
      </div><!--end .colors_choice-->


      <div id="font_choice" data-value="#font_choice">
        <div id="font_select">
          <h1>Choose font-family:</h1>
          <form action="" method="GET">
            <select name="font_category" id="category">
              <option value="" disabled selected>Select your option</option>
              <option value="sans-serif">Sans-serif</option>
              <option value="serif">Serif</option>
              <option value="monospace">Monospace</option>
              <option value="handwriting">Handwriting</option>
              <option value="display">Display</option>
            </select>
            <input type="button" id="fonta" value="Generate font">
          </form>
        </div><!--end #font_selected-->
        <div id="show_fonts" style="display:block">
          <div class="loading_space"></div>
            <ul id="font_list">
              <!--Placeholding fontlist-->
            </ul>
            <!--<h1>Set font-size</h1>
     
            <input type="text" id="fontsize" placeholder="Enter fontsize in em">-->

        </div><!--end #show_fonts-->

      </div><!--end .font_choie-->
      
      <div id="code_choice" data-value="#code_choice">
        <h1>Generate CSS code:</h1>
        <input type="button" id="test" value="Generate CSS">
            <code class="css_code"></code>
      </div><!--end .code_choie-->
    </div><!--end #tabs-->
  </div><!--end #dashboard-->

<div id="template">
   <!--Divs for template_choice-->

      <div id="template_choice">
        <h1>Choose a template and start mash:it;</h1>
        <div id="template_one">
          <img src="static/img/templateOne.png" alt="">
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




