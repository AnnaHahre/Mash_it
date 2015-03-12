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

      <h1>Endpoints</h1>
      <code class="endpoints">
      <ul>
        <li><a href="#font">GET /api/v1/fonts/category</a></li>
        <li><a href="#palette">GET /api/v1/palette/hex</a></li>
        <li><a href="#theme">GET /api/v1/theme/hex/category</a></li>
      </ul>
      </code>
  		<h2 id="font">List fonts by category</h2>
      <p>Returns a list of categorized fonts from <a href="https://www.google.com/fonts">google fonts</a>.</p>

      <h3>Endpoint</h3>
  		<code class="request">GET /api/v1/fonts/category/<em>name</em> <em>?num_results=n&amp;random={1|0}</em></code>
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
        <td>name = monospace | sans-serif | serif | handwriting | display (required)</td>
        <td>returns the full set of fonts from the requested category</td>
        <td>(required)</td>
      </tr>  
      <tr>
        <td><em>num_results</em></td>
        <td>parameter</td>
        <td>n = 1-10 </td>
        <td>returns the requested number of results in default or randomized order.</td>
        <td>(optional) when used, parameter random required</td>
      </tr>  
      <tr>
        <td><em>ramdom</em></td>
        <td>parameter</td>
        <td>{1|0} </td>
        <td>returns the requested number of results in default(google font popularity) or randomized order.</td>
        <td>(optional) when used, parameter num_results required</td>
      </tr>  
      </table>

      <h3>Exemple request</h3>
      <code class="ex_request">curl -i http://www.mashit.nu/api/v1/fonts/category/monospace</code>

      <h3>Exemple response</h3>
      <code class="response response_header">
        Status: 200 OK <br>
        Content-Type:application/json
      </code>
  		<code class="response response_body">Test</code>

  		<h2 id="palette">List palette by hex</h2>
        <p>Returns a set of palettes created by the <a href="http://www.colourlovers.com/">COLOURlovers community</a>.</p>
        
    		<code class="request">GET /api/v1/palette/<em>color</em> <em>?num_results=n</em></code>
        <table>
          <tr>
            <th>name</th>
            <th>type</th>
            <th>data-type</th>
            <th>description</th>
            <th>opt/req</th>
          </tr>  
          <tr>
            <td><em>color</em></td>
            <td>endpoint</td>
            <td>color = [a-fA-F0-9]{6} (hex-code)</td>
            <td>returns a set of palettes based on the requested color.</td>
            <td>(required)</td>
          </tr>  
          <tr>
            <td><em>num_results</em></td>
            <td>parameter</td>
            <td>n = 1-10</td>
            <td>returns the requested number of results (default=6)</td>
            <td>(optional)</td>
          </tr>  
        </table>

        <h3>Exemple request</h3>
        <code class="ex_request">curl -i http://www.mashit.nu/api/v1/palette/222222?num_results=2</code>

        <h3>Response</h3>
        <code class="response response_header">
          Status: 200 OK<br>
          Content-Type:application/json
        </code>
        <code class="response response_body">Test</code>

  		<h2 id="theme">List theme by hex and category</h2>
        <p>Returns a mix of fonts and palettes</p>

    		<code class="request">GET /api/v1/theme/<em>color</em>/<em>category</em> <em>?num_results=n</em></code>

        <table>
          <tr>
            <th>name</th>
            <th>type</th>
            <th>data-type</th>
            <th>description</th>
            <th>opt/req</th>
          </tr>  
          <tr>
            <td><em>color</em></td>
            <td>endpoint</td>
            <td>hex = [a-fA-F0-9]{6}</td>
            <td>returns a set of palettes based on the choosen color (hex).</td>
            <td>(required)</td>
          </tr>
          <tr>
          <td><em>category</em></td>
          <td>endpoint</td>
          <td>name = monospace | sans-serif | serif | handwriting | display </td>
          <td>returns theme from the requested font category</td>
          <td>(required)</td>
          </tr>    
          <tr>
            <td><em>num_results</em></td>
            <td>parameter</td>
            <td>n = 1-10 </td>
            <td>returns the requested number of results (default=5)</td>
            <td>(optional)</td>
          </tr>  
        </table>
        <h3>Response</h3>
        <code class="response response_header">
          Status: 200 OK <br>
          Content-Type:application/json
        </code>
        <code class="response response_body">Test</code>

      <h2>Error handling</h2>
      <p>400,404,500</p>

      <h2>License</h2>
      <p>Attribution-Noncommercial-Share Alike - <a href="http://creativecommons.org/licenses/by-nc-sa/3.0/">http://creativecommons.org/licenses/by-nc-sa/3.0/</a></p>

  	</section>
    <footer>
      <p><a href="/index.php">Mash:it</a></p>
    </footer>
  </div><!--#wrapper .api_doc-->
  </body>
</html>
