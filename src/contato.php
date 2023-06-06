<?php
  header('Access-Control-Allow-Origin: *');

    echo "Chamada recebida";

    $nome      = $_POST["nome"];
    $email     = $_POST["email"];
    $telefone  = $_POST["telefone"];
    $assunto   = $_POST["assunto"];
    $mensagem  = $_POST["mensagem"];
    
    global $email; 
    $data      = date("d/m/y");                     
    $hora      = date("H:i");                       
    $ip        = $_SERVER['REMOTE_ADDR'];           
    mail ("comercial@pedreiracarrascoza.com.br",                       
          "$assunto",
          "Nome: $nome\nTelefone: $telefone\nAssunto: $assunto\nMensagem: $mensagem\nData: $data\nIp: $ip\nHora: $hora",
          "From: $email"
        );


    
    $site   = "Pedreira Carrascoza";                    
    $titulo = "RE: E-mail Enviado";                  //titulo da mensagem enviada para o visitante
    $msg    = "Você enviou uma mensagem para a Pedreira, entraremos em contato em breve. 
    Obrigado!";

    
    mail("$email",
        "$titulo",
        "$msg",
        "From: $site"
        );

?>