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
      <p>Returns a list of categorized fonts from <a href="https://www.google.com/fonts">google fonts</a>.</p>

      <h3>Endpoint</h3>
  		<code class="request">GET http://www.mashit.nu/api/v1/fonts/category/<em>name</em> <em>?num=int</em></code>
      <table>
      <tr>
        <th>name</th>
        <th>type</th>
        <th>data-type</th>
        <th>description</th>
        <th>opt/req</th>
      </tr>  
      <tr>
        <td><em>name</em></td>
        <td>endpoint</td>
        <td>monospace | sans-serif | serif | handwriting | display</td>
        <td>returns the requested category</td>
        <td>(required)</td>
      </tr>  
      <tr>
        <td><em>num</em></td>
        <td>parameter</td>
        <td>100, 200, 300, 400, 600, 700, 800, 900, 100italic, 200italic, 300italic, 400italic, 500italic, 600italic, 700italic, 800italic, 900italic
</td>
        <td>returns the requested variants</td>
        <td>(optional)</td>
      </tr>  
      </table>

      <h3>Exemple request</h3>
      <code class="ex_request">curl http://www.mashit.nu/api/v1/fonts/category/monospace</code>

      <h3>Exemple response</h3>
      <code class="response response_header">
        Status: 200 OK <br>
        Content-Type:application/json
      </code>
  		<code class="response response_body">Test</code>

  		<h2>List palette by hex</h2>
      <p>Returns a set of palettes created by the <a href="http://www.colourlovers.com/">COLOURlovers community</a>.</p>
      
  		<code class="request">GET http://www.mashit.nu/api/v1/palette/<em>hex</em> <em>?num=int</em></code>
      <table>
        <tr>
          <th>name</th>
          <th>type</th>
          <th>data-type</th>
          <th>description</th>
          <th>opt/req</th>
        </tr>  
        <tr>
          <td><em>hex</em></td>
          <td>endpoint</td>
          <td>hex-code</td>
          <td>returns a set of palettes containing ths choosen color (hex). Allowed pattern: [a-fA-F0-9]{6}</td>
          <td>(required)</td>
        </tr>  
        <tr>
          <td><em>num</em></td>
          <td>parameter</td>
          <td>int</td>
          <td>returns the requested number of results (default=5 max=20)</td>
          <td>(optional)</td>
        </tr>  
      </table>
      <h3>Response</h3>
      <code class="response response_header">
        Status: 200 OK<br>
        Content-Type:application/json
      </code>
      <code class="response response_body">Test</code>

  		<h2>List theme by hex and category</h2>
        <p>Returns a mix of fonts and palettes</p>

  		<code class="request">GET http://www.mashit.nu/api/v1/theme/<em>hex</em>/<em>category</em> <em>?num=int</em></code>

      <table>
        <tr>
          <th>name</th>
          <th>type</th>
          <th>data-type</th>
          <th>description</th>
          <th>opt/req</th>
        </tr>  
        <tr>
          <td><em>hex</em></td>
          <td>endpoint</td>
          <td>hex-code</td>
          <td>returns a set of palettes containing ths choosen color (hex). Allowed pattern: [a-fA-F0-9]{6}</td>
          <td>(required)</td>
        </tr>
        <tr>
        <td><em>name</em></td>
        <td>endpoint</td>
        <td>monospace|sans-serif|serif|handwriting|display</td>
        <td>returns the requested category</td>
        <td>(required)</td>
        </tr>    
        <tr>
          <td><em>num</em></td>
          <td>parameter</td>
          <td>int</td>
          <td>returns the requested number of results (default=5 max=20)</td>
          <td>(optional)</td>
        </tr>  
      </table>
      <h3>Response</h3>
      <code class="response response_header">
        Status: 200 OK <br>
        Content-Type:application/json
      </code>
      <code class="response response_body">Test</code>

      <h2>License</h2>
      <p>Attribution-Noncommercial-Share Alike - <a href="http://creativecommons.org/licenses/by-nc-sa/3.0/">http://creativecommons.org/licenses/by-nc-sa/3.0/</a></p>

  	</section>
    <footer>
      <p><a href="/index.php">Mash:it</a></p>
    </footer>
  </div><!--#wrapper .api_doc-->
  </body>
</html>
