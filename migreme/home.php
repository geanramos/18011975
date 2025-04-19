<?php
// Iniciar o sistema YOURLS
require_once(dirname(__FILE__).'/includes/load-yourls.php');

$page = YOURLS_SITE . '/home.php';

// Processar o formulário de encurtamento
if (isset($_REQUEST['url']) && $_REQUEST['url'] != 'https://') {
    $url     = $_REQUEST['url'];
    $keyword = isset($_REQUEST['keyword']) ? $_REQUEST['keyword'] : '';
    $title   = isset($_REQUEST['title']) ?  $_REQUEST['title'] : '';

    // Criar URL curta
    $return  = yourls_add_new_link($url, $keyword, $title);

    $shorturl = isset($return['shorturl']) ? $return['shorturl'] : '';
    $message  = isset($return['message']) ? $return['message'] : '';
    $status   = isset($return['status']) ? $return['status'] : '';
}
?>

<!DOCTYPE HTML>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="pt" lang="pt_BR">
<head>
<title>gean.me – O n&atilde;o-encurtador de links</title>

<link rel="shortcut icon" type="image/png" href="https://geanramos.com.br/favicon.png" />
<link rel="stylesheet" href="./css/share.css" type="text/css" media="screen" />
<link rel="stylesheet" href="./css/pdhco.css" type="text/css" media="screen" />
<!--[if lte IE 8]>
<link rel="stylesheet" href="./css/ie.css" type="text/css" media="screen" />
<![endif]-->
<link rel="stylesheet" href="./css/jquery.tweet.css" type="text/css" media="screen" />
<link rel="profile" href="http://gmpg.org/xfn/11" />
<meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=IE8">
<meta property="fb:admins" content="669289260"/>
<meta property="og:url" content="http://gean.me/"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="gean.me – O n&atilde;o encurtador de links"/>
<meta name="revised" content="Gean Ramos, 19/04/2025" />

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.3/jquery.min.js" type="text/javascript"></script>
<script type="text/javascript" src="./js/jquery.tweet.js"></script>
<script type="text/javascript" src="./js/ogre.js"></script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-TZBPFV014K"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-TZBPFV014K', {
    'cookie_domain': 'auto'
  });
</script>
</head>

<body>
	<div id="wrapper">
			<div id="header">
				<a id="logo" class="static left" href="https://gean.me/" target="_top" title="pdh.co - O não encurtador de links">pdh.co – O não-encurtador de links</a>
				<a id="pdh" class="static right vcenter" href="https://geanramos.com.br/" target="_blank" title="Gean Ramos - Código é poesia.">Gean Ramos - Código é poesia.</a>
			</div><!-- end header -->
			<div id="content">

			<h2>Digite uma URL para capar</h2>
		<div id="ogro" class="static right">ogro</div>
			<form method="post" action="" id="ninja">
					<div class="left">
						<p><label>URL:</label><input type="text" name="url" value="https://" onfocus="if (this.value == 'https://') this.value = '';" size="32" /></p>
						<p><label>URL Customizada:</label><input type="text" name="keyword" size="10" /></p>
					</div>
					<div class="right">
						<input type="submit" id="enviar" value="Enviar" />
					</div>
			</form>
			<div id="top">
				<p>*A url customizada é opcional. Com ela você pode customizar a cara do seu link.</p>
				<p>Ao invés de seu link aparecer como <span>gean.me/EP1c</span> ele aparece como <span>gean.me/como-preferir</span>.</p>
				<p><strong>Alguma dúvida em como utilizar o gean.me?</strong> Clique aqui e leia nosso <a href="http://pdh.co/faq" target="_top">FAQ</a> e conheça aqui nossos <a href="http://pdh.co/termos" target="_top">Termos de uso</a>. </p>
			</div>	
<h2>Últimos tweets</h2>
<div id="query" class="query"></div>
</div>
<div id="footer">© 2006-2025 GEAN RAMOS - CÓDIGO É POESIA.</div>
</div>
</body>
</html>
