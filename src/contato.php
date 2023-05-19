<?php
  header('Access-Control-Allow-Origin: *');

    function submitEmailContact($nome, $email, $telefone, $assunto, $mensagem){
    
      //pega as variaveis por POST
    /*$nome      = $_POST["nome"];
    $email     = $_POST["email"];
    $telefone  = $_POST["telefone"];
    $assunto   = $_POST["assunto"];
    $mensagem  = $_POST["mensagem"];
      */

    global $email; //função para validar a variável $email no script todo

    $data      = date("d/m/y");                     //função para pegar a data de envio do e-mail
    $hora      = date("H:i");                       //para pegar a hora com a função date
    $ip        = $_SERVER['REMOTE_ADDR'];           //função para pegar o ip do usuário


    //aqui envia o e-mail para você
    mail ("ti2@pedreiracarrascoza.com.br",                       //email aonde o php vai enviar os dados do form
          "$assunto",
          "Nome: $nome\nTelefone: $telefone\nAssunto: $assunto\nMensagem: $mensagem\nData: $data\nIp: $ip\nHora: $hora",
          "From: $email"
        );


    //aqui são as configurações para enviar o e-mail para o visitante
    $site   = "Pedreira Carrascoza Ltda";                    //o e-mail que aparecer� na caixa postal do visitante
    $titulo = "RE: E-mail Enviado";                  //titulo da mensagem enviada para o visitante
    $msg    = "Você enviou uma mensagem para a Pedreira Carrascoza Ltda, entraremos em contato em breve. 
    Obrigado!";

    //aqui envia o e-mail de auto-resposta para o visitante
    mail("$email",
        "$titulo",
        "$msg",
        "From: $site"
        );
      }

?>

