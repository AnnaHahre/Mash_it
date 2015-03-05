<!DOCTYPE html>
<html>
  <head>
    <title>Template></title>
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
 <div id="dashboard">
  <ul>
    <li>
      <a>COLORS</a>
    </li>
    <li>
      <a>FONTS</a>
    </li>
  </ul>
      <div id="colors_choice">
        <h1>Choose a basecolor:</h1>
        <!--<h2>Choose a basecolor for the palette:</h2>-->
        <form action="" method="GET">
          <input type="text" id="colors" name="colors"/>
          <input type="submit" id="submit_color" value="Get Palettes">
          <br>
        </form>

        <div id="palette">
          
        </div>
    </div>
    <div id="font_choice">
      <h1><a href="/">Fonta mera</a></h1>
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
  </div>
 


  <!-- Navigation -->

  <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand">Your Homepage</a>
          </div>
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
                  <li>
                      <a>About</a>
                  </li>
                  <li>
                      <a>Services</a>
                  </li>
                  <li>
                      <a>Contact</a>
                  </li>
              </ul>
          </div>
          <!-- /.navbar-collapse -->
      </div>
      <!-- /.container -->
  </nav>

  <!-- Full Width Image Header -->
  <header class="header-image">
      <div class="headline">
          <div class="container">
              <h1>One Page Wonder</h1>
              <h2>Will Knock Your Socks Off</h2>
          </div>
      </div>
  </header>

  <!-- Page Content -->
  <div class="container">

      <hr class="featurette-divider">

      <!-- First Featurette -->
      <div class="featurette" id="about">
          <img class="featurette-image img-circle img-responsive pull-right" src="http://placehold.it/500x500">
          <h2 class="featurette-heading">This First Heading
              <span class="text-muted">Will Catch Your Eye</span>
          </h2>
          <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
      </div>

      <hr class="featurette-divider">

      <!-- Second Featurette -->
      <div class="featurette" id="services">
          <img class="featurette-image img-circle img-responsive pull-left" src="http://placehold.it/500x500">
          <h2 class="featurette-heading">The Second Heading
              <span class="text-muted">Is Pretty Cool Too.</span>
          </h2>
          <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
      </div>

      <hr class="featurette-divider">

      <!-- Third Featurette -->
      <div class="featurette" id="contact">
          <img class="featurette-image img-circle img-responsive pull-right" src="http://placehold.it/500x500">
          <h2 class="featurette-heading">The Third Heading
              <span class="text-muted">Will Seal the Deal.</span>
          </h2>
          <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
      </div>

      <hr class="featurette-divider">

      <!-- Footer -->
      <footer>
          <div class="row">
              <div class="col-lg-12">
                  <p>Copyright &copy; Your Website 2014</p>
              </div>
          </div>
      </footer>

  </div>

  <!-- /.container -->

  <!-- jQuery -->
  <script src="static/js/jquery.js"></script>

  <!-- Bootstrap Core JavaScript -->
  <script src="static/js/bootstrap.min.js"></script>
  </body>
</html>

