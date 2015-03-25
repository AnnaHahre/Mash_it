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
    <!--SWEET-alert package-->
    <script src="static/lib/sweet-alert.min.js"></script>
    <link rel="stylesheet" type="text/css" href="static/lib/sweet-alert.css">
    
    <script type='text/javascript' src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script type='text/javascript' src="http://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>
    <script type='text/javascript' src="static/script.js"></script>

     <!-- Bootstrap Core CSS -->
    <link href="/static/css/bootstrap.min.css" rel="stylesheet">
    <!--<link href="/static/css/blog-post.css" rel="stylesheet">-->

    <!-- Custom CSS -->
    <link href="/static/css/one-page-wonder.css" rel="stylesheet">

    <!-- CSS for template three - clean blog -->
    <link href="/static/css/clean_temp.css" rel="stylesheet">
    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

<body>

  <!--Dashboard -->
  <div id="dashboard">
    <ul id="tabcontrols">
      <h2>mash:it;</h2>
      <li id="temp_icon" data-value="#template_choice">
        <a href="#template_choice"></a>
      </li>
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
  </div><!--end #dashboard-->

    <div id="tabs">
      <div id="template_choice">
        <div id="template_one">
          <img src="static/img/templateOne.png" alt="">
          <h2>One Page Wonder</h2>
          <p>A simple one page template</p>
        </div>
        <div id="template_two">
          <img src="static/img/template_two.png" alt="">
          <h2>One Page Blogg</h2>
          <p>A blog post one page template</p>
        </div>
        <div id="template_three">
          <img src="static/img/template_three.png" alt="">
          <h2>Clean Blog Post</h2>
          <p>A blog post template</p>
        </div>
      </div> <!--end #template_choice-->
      <div id="colors_choice" data-value="#colors_choice">
        <form action="" method="GET">
          <input type="text" id="colors" name="colors" placeholder=""/>
          <span class="unit">#</span>
          <input type="submit" id="submit_color" value="Get Palettes">
          <input type="button" id="random_color" value="Random">
        </form>
        <div id="palette"></div><!--end #palette-->
      </div><!--end .colors_choice-->


      <div id="font_choice" data-value="#font_choice">
        <div id="font_select">
          <form action="" method="GET">
            <select name="font_category" id="category">
              <option value="" disabled selected>Select font category</option>
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
        </div><!--end #show_fonts-->
        <h1>Font resize</h1>
        <div id="resize_fonts">
          <span id="smaller_size">smaller</span>
            <button id="smaller" value="decrease">-</button>
            <button id="bigger" value="increase">+</button>
          <span id="bigger_size">bigger</span>
        </div><!--End #resize-fonts-->
      </div><!--end .font_choie-->
        
      <div id="code_choice" data-value="#code_choice">
        <h1>Generate CSS</h1>
        <input type="button" id="css_button" value="Generate CSS">
        <code class="css_code"></code>
      </div><!--end .code_choie-->

    </div><!--end #tabs-->

  <div id="template">
   <!--Divs for template_choice-->
    <div id="welcome_mash">
      <img class="arrow" width="200" height="200" src="/static/img/start/arrow_flip.png"></img>
      <h1>Ready, steady, go <span>mash:it;</span></h1>
    </div>    
  <!-- /.container -->
  </div><!--end #template-->

  <!-- jQuery -->
  <script src="static/js/jquery.js"></script>

  <!-- Bootstrap Core JavaScript -->
  <script src="static/js/bootstrap.min.js"></script>
  </body>
</html>




