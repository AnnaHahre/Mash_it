<!DOCTYPE html>
<?php
error_reporting(-1);
ini_set('display_errors', 1);
ini_set('output_buffering', 0);
?>
<html>
  <head>
    <title>Mash:it | <?=$status ?> - <?=$message ?></title>
    <link rel='stylesheet' href='/static/style.css' />
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
  </head>
  <body class="not_found">
  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-59200536-2', 'auto');
    ga('send', 'pageview');

  </script>
    <div id="wrapper">
      <h1><?=$status ?> : <?=$message ?>;</h1>
      <?php
      if (isset($error)) {
      echo "<p class='error_message'>".$error."</p>";
      }
      ?>
      <p>Try the application <a href="/">Mash:it</a><br>
      or search for endpoints in the <a href="/api/v1/doc">API-documentation</a></p>
    </div><!--end of #wrapper-->
  </body>
</html>
