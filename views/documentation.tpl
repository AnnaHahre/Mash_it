<!DOCTYPE html>
<html>
  <head>
    <title>Mash:it API</title>
    <link rel='stylesheet' href='/static/style.css' />
    <script type='text/javascript' src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script type='text/javascript' src="/static/script_doc.js"></script>
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
  </head>
  <body class="api_doc">
  	<div id="wrapper">
  	<header>
      <hgroup>
    		<h1>mash:it; <span class="api">API</span></h1>
      </hgroup>
  	</header>
    <nav>
        <ul>
          <li><a href="#endpoint" id="nav_endpoint" class="active">Endpoints</a>
            <ul>
              <li><a href="#fontsbycat" id="nav_fontsbycat">fonts by category</a></li>
              <li><a href="#palette" id="nav_palette">palettes by color</a></li>
              <li><a href="#theme" id="nav_theme">theme by color and font-category</a></li>
            </ul>
          <li><a href="#statuscodes" id="nav_statuscodes">Status codes</a></li>
          <li><a href="#license" id="nav_license">License</a></li>
        </ul>
    <footer>
      <p><a href="/index.php">Mash:it</a></p>
    </footer>
    </nav>
  	<section>
      <h2 id="endpoint" class="section">Endpoints</h2>
        <code class="endpoints">
        <ul>
          <li><a href="#fontsbycat">GET /api/v1/font/category</a></li>
          <li><a href="#palette">GET /api/v1/palette/hex</a></li>
          <li><a href="#theme">GET /api/v1/theme/hex/category</a></li>
        </ul>
      </code>
  		<h2 id="fontsbycat" class="section">List fonts by category</h2>
      <p>Returns a list of categorized fonts from <a href="https://www.google.com/fonts">google fonts</a>.</p>

      <h3>Endpoint</h3>
  		<code class="request">GET /api/v1/font/category/<em>name</em> <em>?num_results=n&amp;random={1|0}</em></code>
      <table>
      <thead>
      <tr>
        <th>name</th>
        <th>type</th>
        <th class="data_type">data-type</th>
        <th class="description">description</th>
        <th>opt/req</th>
      </tr>  
    </thead>
    <tbody>
      <tr>
        <td><em>name</em></td>
        <td>endpoint</td>
        <td class="data_type">name = monospace | sans-serif | serif | handwriting | display</td>
        <td class="description">returns the full set of fonts from the requested category</td>
        <td>(required)</td>
      </tr>  
      <tr>
        <td><em>num_results</em></td>
        <td>parameter</td>
        <td class="data_type">n = 1-10 </td>
        <td class="description">returns the requested number of results in default or randomized order (default= full set of fonts).</td>
        <td>(optional) when used, parameter random required</td>
      </tr>  
      <tr>
        <td><em>random</em></td>
        <td>parameter</td>
        <td class="data_type">{1|0} </td>
        <td class="description">returns the requested number of results in default(google font popularity) or randomized order.</td>
        <td>(optional) when used, parameter num_results required</td>
      </tr>  
    </tbody>
      </table>

      <h3>Example request</h3>
      <code class="ex_request">curl -i http://www.mashit.nu/api/v1/font/category/monospace</code>

      <h3>Example response</h3>
      <code class="response response_header">
        Status: 200 OK <br>
        Content-Type:application/json
      </code>
  		<pre><code class="response response_body">[
  {
    "resource_location": "/api/v1/font/category/monospace"
  },
  {
    "font-family": "Inconsolata",
    "variants": [
      "regular",
      "700"
    ],
    "subsets": [
      "latin-ext",
      "latin"
    ],
    "css_import": "@import url(http://fonts.googleapis.com/css?family=Inconsolata:400,700);",
    "link_import": "&lt;link href='http://fonts.googleapis.com/css?family=Inconsolata:400,700' rel='stylesheet' type='text/css'&gt;"
  },
  {
  "font-family": "Source Code Pro",
  "variants": [
    "200",
    "300",
    "regular",
    "500",
    "600",
    "700",
    "900"
  ],
  "subsets": [
    "latin-ext",
    "latin"
  ],
  "css_import": "@import url(http://fonts.googleapis.com/css?family=Source+Code+Pro:200,300,400,500,600,700,900);",
  "link_import": "&lt;link href='http://fonts.googleapis.com/css?family=Source+Code+Pro:200,300,400,500,600,700,900' rel='stylesheet' type='text/css'&gt;"
  },
  {
  "font-family": "Droid Sans Mono",
  "variants": [
    "regular"
  ],
  "subsets": [
    "latin"
  ],
  "css_import": "@import url(http://fonts.googleapis.com/css?family=Droid+Sans+Mono:400);",
  "link_import": "&lt;link href='http://fonts.googleapis.com/css?family=Droid+Sans+Mono:400' rel='stylesheet' type='text/css'&gt;"
  },
  {
  "font-family": "Ubuntu Mono",
  "variants": [
    "regular",
    "italic",
    "700",
    "700italic"
  ],
  "subsets": [
    "cyrillic-ext",
    "latin-ext",
    "cyrillic",
    "latin",
    "greek-ext",
    "greek"
  ],
  "css_import": "@import url(http://fonts.googleapis.com/css?family=Ubuntu+Mono:400,400italic,700,700italic);",
  "link_import": "&lt;link href='http://fonts.googleapis.com/css?family=Ubuntu+Mono:400,400italic,700,700italic' rel='stylesheet' type='text/css'&gt;"
  },
  {
  "font-family": "Cousine",
  "variants": [
    "regular",
    "italic",
    "700",
    "700italic"
  ],
  "subsets": [
    "cyrillic-ext",
    "latin-ext",
    "cyrillic",
    "latin",
    "greek-ext",
    "vietnamese",
    "greek"
  ],
  "css_import": "@import url(http://fonts.googleapis.com/css?family=Cousine:400,400italic,700,700italic);",
  "link_import": "&lt;link href='http://fonts.googleapis.com/css?family=Cousine:400,400italic,700,700italic' rel='stylesheet' type='text/css'&gt;"
  },
  {
  "font-family": "Anonymous Pro",
  "variants": [
    "regular",
    "italic",
    "700",
    "700italic"
  ],
  "subsets": [
    "latin-ext",
    "cyrillic",
    "latin",
    "greek"
  ],
  "css_import": "@import url(http://fonts.googleapis.com/css?family=Anonymous+Pro:400,400italic,700,700italic);",
  "link_import": "&lt;link href='http://fonts.googleapis.com/css?family=Anonymous+Pro:400,400italic,700,700italic' rel='stylesheet' type='text/css'&gt;"
  },
  {
  "font-family": "PT Mono",
  "variants": [
    "regular"
  ],
  "subsets": [
    "cyrillic-ext",
    "latin-ext",
    "cyrillic",
    "latin"
  ],
  "css_import": "@import url(http://fonts.googleapis.com/css?family=PT+Mono:400);",
  "link_import": "&lt;link href='http://fonts.googleapis.com/css?family=PT+Mono:400:' rel='stylesheet' type='text/css'&gt;"
  },
  {
  "font-family": "Nova Mono",
  "variants": [
    "regular"
  ],
  "subsets": [
    "latin",
    "greek"
  ],
  "css_import": "@import url(http://fonts.googleapis.com/css?family=Nova+Mono:400);",
  "link_import": "&lt;link href='http://fonts.googleapis.com/css?family=Nova+Mono:400' rel='stylesheet' type='text/css'&gt;"
  },
  {
  "font-family": "Cutive Mono",
  "variants": [
    "regular"
  ],
    "subsets": [
    "latin-ext",
    "latin"
  ],
  "css_import": "@import url(http://fonts.googleapis.com/css?family=Cutive+Mono:400);",
  "link_import": "&lt;link href='http://fonts.googleapis.com/css?family=Cutive+Mono:400' rel='stylesheet' type='text/css'&gt;"
  },
  {
  "font-family": "Oxygen Mono",
  "variants": [
    "regular"
  ],
  "subsets": [
    "latin-ext",
    "latin"
  ],
  "css_import": "@import url(http://fonts.googleapis.com/css?family=Oxygen+Mono:400);",
  "link_import": "&lt;link href='http://fonts.googleapis.com/css?family=Oxygen+Mono:400' rel='stylesheet' type='text/css'&gt;"
  },
  {
  "font-family": "VT323",
  "variants": [
    "regular"
  ],
  "subsets": [
    "latin"
  ],
  "css_import": "@import url(http://fonts.googleapis.com/css?family=VT323:400);",
  "link_import": "&lt;link href='http://fonts.googleapis.com/css?family=VT323:400' rel='stylesheet' type='text/css'&gt;"
  },
  {
  "font-family": "Share Tech Mono",
    "variants": [
    "regular"
  ],
  "subsets": [
    "latin"
  ],
  "css_import": "@import url(http://fonts.googleapis.com/css?family=Share+Tech+Mono:400);",
  "link_import": "&lt;link href='http://fonts.googleapis.com/css?family=Share+Tech+Mono:400' rel='stylesheet' type='text/css'&gt;"
  },
  {
  "font-family": "Fira Mono",
  "variants": [
    "regular",
    "700"
  ],
  "subsets": [
    "cyrillic-ext",
    "latin-ext",
    "cyrillic",
    "latin",
    "greek"
  ],
  "css_import": "@import url(http://fonts.googleapis.com/css?family=Fira+Mono:400,700);",
  "link_import": "&lt;link href='http://fonts.googleapis.com/css?family=Fira+Mono:400,700' rel='stylesheet' type='text/css'&gt;"
  }
]
      </code></pre>

  		<h2 id="palette" class="section">List palettes by color</h2>
        <p>Returns a set of palettes created by the <a href="http://www.colourlovers.com/">COLOURlovers community</a>.</p>
        
        <h3>Endpoint</h3>
    		<code class="request">GET /api/v1/palette/<em>color</em> <em>?num_results=n</em></code>
        <table>
          <tr>
            <th>name</th>
            <th>type</th>
            <th class="data_type">data-type</th>
            <th class="description">description</th>
            <th>opt/req</th>
          </tr>  
          <tr>
            <td><em>color</em></td>
            <td>endpoint</td>
            <td class="data_type">color = [a-fA-F0-9]{6} (hex-code)</td>
            <td class="description">returns a set of color-palettes based on the requested color.</td>
            <td>(required)</td>
          </tr>  
          <tr>
            <td><em>num_results*</em></td>
            <td>parameter</td>
            <td class="data_type">n = 1-10</td>
            <td class="description">returns the requested number of results (default=6)</td>
            <td>(optional)</td>
          </tr>  
        </table>
        <p class="num_info">
          * Mash:it will return a reduced (or empty) set of palettes when less then (or none of) the requested number of palettes are available at the 
          <a href="http://www.colourlovers.com/">COLOURlovers community</a>.
        </p>

        <h3>Example request</h3>
        <code class="ex_request">curl -i http://www.mashit.nu/api/v1/palette/D7E8D5</code>

        <h3>Example response</h3>
        <code class="response response_header">
          Status: 200 OK<br>
          Content-Type:application/json
        </code>
        <pre><code class="response response_body">[
  {
  "resource_location": "/api/v1/palette/D7E8D5"
  },
  {
    "palette": [
      "D7E8D5",
      "E6F0AF",
      "E8ED76",
      "FFCD57",
      "4A3A47"
    ],
    "source_url": "http://www.colourlovers.com/palette/3609015/Indie_Lemon",
    "source_api_url": "http://www.colourlovers.com/api/palette/3609015"
  },
  {
    "palette": [
      "D7E8D5",
      "E6F0AF",
      "E8ED76",
      "FFCD57",
      "4A3A47"
    ],
    "source_url": "http://www.colourlovers.com/palette/3652723/Indie_lemon",
    "source_api_url": "http://www.colourlovers.com/api/palette/3652723"
  },
  {
    "palette": [
      "4A3A47",
      "6A6EBE",
      "957AC7",
      "F0AFDE",
      "D7E8D5"
    ],
    "source_url": "http://www.colourlovers.com/palette/3646993/Purple_exchange",
    "source_api_url": "http://www.colourlovers.com/api/palette/3646993"
  },
  {
    "palette": [
      "D7E8D5",
      "620D10",
      "345E46",
      "85AC91",
      "0B384B"
    ],
    "source_url": "http://www.colourlovers.com/palette/733545/Custom_Westy_Classic",
    "source_api_url": "http://www.colourlovers.com/api/palette/733545"
  },
  {
    "palette": [
      "B028B8",
      "FFFFFF",
      "D7E8D5",
      "B7C2B6",
      "8C968A"
    ],
    "source_url": "http://www.colourlovers.com/palette/1133192/pushup",
    "source_api_url": "http://www.colourlovers.com/api/palette/1133192"
  },
  {
    "palette": [
      "FAE0E9",
      "D7E8D5",
      "FEFEFE",
      "F2DCC5",
      "FCEEE3"
    ],
    "source_url": "http://www.colourlovers.com/palette/106506/Kaira",
    "source_api_url": "http://www.colourlovers.com/api/palette/106506"
  }
]
      </code></pre>

  		<h2 id="theme" class="section">List theme by color and font category</h2>
        <p>Returns a mix of fonts and palettes</p>

        <h3>Endpoint</h3>
    		<code class="request">GET /api/v1/theme/<em>color</em>/<em>category</em> <em>?num_results=n</em></code>

        <table>
          <tr>
            <th>name</th>
            <th>type</th>
            <th class="data_type">data-type</th>
            <th class="description">description</th>
            <th>opt/req</th>
          </tr>  
          <tr>
            <td><em>color</em></td>
            <td>endpoint</td>
            <td class="data_type">hex = [a-fA-F0-9]{6}</td>
            <td class="description">returns themes with palettes based on the requested color (hex).</td>
            <td>(required)</td>
          </tr>
          <tr>
          <td><em>category</em></td>
          <td>endpoint</td>
          <td class="data_type">name = monospace | sans-serif | serif | handwriting | display </td>
          <td class="description">returns themes with fonts from the requested category</td>
          <td>(required)</td>
          </tr>    
          <tr>
            <td><em>num_results*</em></td>
            <td>parameter</td>
            <td class="data_type">n = 1-10 </td>
            <td class="description">returns the requested number of results (default=10)</td>
            <td>(optional)</td>
          </tr>  
        </table>
        <p class="num_info">
          * Mash:it will return a reduced (or empty) set of palettes when less then (or none of) the requested number of palettes are available at the 
          <a href="http://www.colourlovers.com/">COLOURlovers community</a>.
        </p>

        <h3>Example request</h3>
        <code class="ex_request">curl -i http://www.mashit.nu/api/v1/theme/D7E8D5/monospace?num_results=3</code>

        <h3>Example response</h3>
        <code class="response response_header">
          Status: 200 OK <br>
          Content-Type:application/json
        </code>
        <pre><code class="response response_body">[
  {
  "resource_location": "/api/v1/theme/D7E8D5/monospace"
  },
  {
    "font": {
      "font-family": "PT Mono",
      "variants": [
        "regular"
      ],
      "subsets": [
        "latin-ext",
        "cyrillic-ext",
        "cyrillic",
        "latin"
      ],
      "css_import": "@import url(http://fonts.googleapis.com/css?family=PT+Mono:400);",
      "link_import": "&lt;link href='http://fonts.googleapis.com/css?family=PT+Mono:400' rel='stylesheet' type='text/css'&gt;"
    },
    "color-palette": {
      "palette": [
        "D7E8D5",
        "E6F0AF",
        "E8ED76",
        "FFCD57",
        "4A3A47"
      ],
      "source_url": "http://www.colourlovers.com/palette/3652723/Indie_lemon",
      "source_api_url": "http://www.colourlovers.com/api/palette/3652723"
    }
  },
  {
    "font": {
    "font-family": "Cutive Mono",
    "variants": [
      "regular"
    ],
    "subsets": [
      "latin-ext",
      "latin"
    ],
    "css_import": "@import url(http://fonts.googleapis.com/css?family=Cutive+Mono:400);",
    "link_import": "&lt;link href='http://fonts.googleapis.com/css?family=Cutive+Mono:400' rel='stylesheet' type='text/css'&gt;"
    },
    "color-palette": {
    "palette": [
      "FAE0E9",
      "D7E8D5",
      "FEFEFE",
      "F2DCC5",
      "FCEEE3"
    ],
    "source_url": "http://www.colourlovers.com/palette/106506/Kaira",
    "source_api_url": "http://www.colourlovers.com/api/palette/106506"
    }
  },
  {
    "font": {
    "font-family": "Inconsolata",
    "variants": [
      "regular",
      "700"
    ],
    "subsets": [
      "latin-ext",
      "latin"
    ],
    "css_import": "@import url(http://fonts.googleapis.com/css?family=Inconsolata:400,700);",
    "link_import": "&lt;link href='http://fonts.googleapis.com/css?family=Inconsolata:400,700' rel='stylesheet' type='text/css'&gt;"
    },
    "color-palette": {
    "palette": [
      "B028B8",
      "FFFFFF",
      "D7E8D5",
      "B7C2B6",
      "8C968A"
    ],
    "source_url": "http://www.colourlovers.com/palette/1133192/pushup",
    "source_api_url": "http://www.colourlovers.com/api/palette/1133192"
    }
  }
]

        </code></pre>

      <h2 id="statuscodes" class="section">Status codes</h2>
      <table>
        <tr>
          <th>Statuscode</th>
          <th>Message</th>
          <th>Probably caused by</th>
        </tr>
        <tr>
          <td>200</td>
          <td>OK</td>
          <td>-</td>
        </tr>
          <td>400</td>
          <td>Bad request</td>
          <td>Invalid parameters, check the documentation</td>
        </tr>
        <tr>
          <td>404</td>
          <td>Resource not found</td>
          <td>Not a valid endpoint, check the documentation</td>
        </tr>
        <tr>
          <td>500</td>
          <td>Internal server error</td>
          <td>Something went wrong in the application, please contact info@mashit.nu</td>
        </tr>
      </table>

      <h2 id="license" class="section">License</h2>
      <p>Attribution-Noncommercial-Share Alike - <a href="http://creativecommons.org/licenses/by-nc-sa/3.0/">http://creativecommons.org/licenses/by-nc-sa/3.0/</a></p>

  	</section>
  </div><!--#wrapper .api_doc-->
  </body>
</html>
