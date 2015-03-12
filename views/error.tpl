<!DOCTYPE html>
<html>
  <head>
    <title>Mash:it | <?=$status ?> - <?=$message ?></title>
    <link rel='stylesheet' href='/static/style.css' />
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
  </head>
  <body class="not_found">
    <div id="wrapper">
      <h1><?=$status ?> : <?=$message ?>;</h1>
      <p>Try the application <a href="/index.php">Mash:it</a><br>
      or search for endpoints in the <a href="/api/v1/doc">API-documentation</a></p>
    </div><!--end of #wrapper-->
  </body>
</html>
