<?
//pega as variaveis por POST
$nome      = $_POST["nome"];
$email     = $_POST["email"];
$telefone  = $_POST["telefone"];
$assunto   = $_POST["assunto"];
$mensagem  = $_POST["mensagem"];

global $email; //função para validar a variável $email no script todo

$data      = date("d/m/y");                     //função para pegar a data de envio do e-mail
$hora      = date("H:i");                       //para pegar a hora com a função date
$ip        = $_SERVER['REMOTE_ADDR'];           //função para pegar o ip do usuário


//aqui envia o e-mail para você
mail ("comercial@pedreiracarrascoza.com.br",                       //email aonde o php vai enviar os dados do form
      "$assunto",
       "Nome: $nome\nTelefone: $telefone\nAssunto: $assunto\nMensagem: $mensagem\nData: $data\nIp: $ip\nHora: $hora",
      "From: $email"
     );


//aqui são as configurações para enviar o e-mail para o visitante
$site   = "Pedreira Carrascoza Ltda";                    //o e-mail que aparecerá na caixa postal do visitante
$titulo = "RE: E-mail Enviado";                  //titulo da mensagem enviada para o visitante
$msg    = "Você enviou uma mensagem para a Pedreira Carrascoza Ltda, entraremos em contato em breve. 
Obrigado!";

//aqui envia o e-mail de auto-resposta para o visitante
mail("$email",
     "$titulo",
     "$msg",
     "From: $site"
    );

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head><meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
	
	<title>Pedreira Carrascoza - Cravinhos (Ribeir&atilde;o Preto, Serrana, S&atilde;o Sim&atilde;o)</title>
	<link href="style.css" media="screen" rel="stylesheet" type="text/css" /><script type="text/javascript" src="js/jquery.core.js"></script><script type="text/javascript" src="js/jquery.superfish.js"></script><script type="text/javascript" src="js/jquery.jcarousel.pack.js"></script><script type="text/javascript" src="js/jquery.easing.js"></script><script type="text/javascript" src="js/jquery.scripts.js"></script><!-- WP Favicon -->
	<link href="images/favicon.gif" rel="icon" type="image/gif" />
	<link href="images/favicon.ico" rel="shortcut icon" type="image/x-icon" /><!-- /WP Favicon -->
	<meta content="4;url=http://www.pedreiracarrascoza.com.br" http-equiv="refresh" />
</head>
<body>
<h1 style="text-align: center;"></h1>

<h1 style="text-align: center;"></h1>

<h1 style="text-align: center;"><a href="index.html"><img alt="" src="images/logo.png" style="width: 120px; height: 138px;" /></a></h1>

<h1 style="text-align: center;"><span style="font-size:26px;">E-mail enviado !</span></h1>

<p style="text-align: center;">(Para voltar, clique no logo ou aguarde)</p>

<!--GoogleAnalytics
<script type="text/javascript">
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'XXXUA-47684911-1XXX', 'pedreiracarrascoza.com.br');
  ga('send', 'pageview');
</script>
-->
</body>
</html>