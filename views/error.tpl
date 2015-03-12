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
    <div id="wrapper">
      <h1><?=$status ?> : <?=$message ?>;</h1>
      <?php
      if (isset($error)) {
      echo "<p class='error_message'>".$error."</p>";
      }
      ?>
      <p>Try the application <a href="/index.php">Mash:it</a><br>
      or search for endpoints in the <a href="/api/v1/doc">API-documentation</a></p>
    </div><!--end of #wrapper-->
  </body>
</html>
