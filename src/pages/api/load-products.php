<?php
    $products = fopen('produtos.csv', 'r') or die("Erro ao abrir o arquivo");
    echo fread($myfile, filesize('produtos.csv'));
    fclose($products)
?>