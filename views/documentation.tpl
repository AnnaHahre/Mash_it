<!DOCTYPE html>
<html>
  <head>
    <title>Mash:it</title>
    <link rel='stylesheet' href='/static/style.css' />
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
  </head>
  <body class="api_doc">
  	<div id="wrapper">
  	<header>
  		<h1>API documentation { mash:it; }</h1>
  	</header>
  	<section>
  		<h2>List fonts by category</h2>
  		<code class="request">GET http://www.mashit.nu/api/v1/fonts/category/<em>name</em></code>
      <p>Name (required): monospace|sans-serif|serif|handwriting|display</p>

      <h3>Exemple request</h3>
      <code class="ex_request">curl http://www.mashit.nu/api/v1/fonts/category/monospace</code>

      <h3>Exemple response</h3>
      <code class="response response_header">
        Status: 200 OK <br>
        Content-Type:application/json
      </code>
  		<code class="response response_body">Test</code>

  		<h2>List palette by hex</h2>
  		<code class="request">GET http://www.mashit.nu/api/v1/palette/<em>hex</em></code>
      <h3>Response</h3>
      <code class="response response_header">
        Status: 200 OK<br>
        Content-Type:application/json
      </code>
      <code class="response response_body">Test</code>

  		<h2>List theme by hex and category</h2>
  		<code class="request">GET http://www.mashit.nu/api/v1/theme/<em>hex</em>/<em>category</em></code>
      <h3>Response</h3>
      <code class="response response_header">
        Status: 200 OK <br>
        Content-Type:application/json
      </code>
      <code class="response response_body">Test</code>

  	</section>
  </div><!--#wrapper .api_doc-->
  </body>
</html>
