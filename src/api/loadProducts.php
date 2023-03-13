<?php

    $products = fopen('catalogo_produtos.json', 'r') or die("Erro ao abrir o arquivo");
    echo fread(json_decode($products));
    fclose($products)

?>