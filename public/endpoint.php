<?php
require "../vendor/autoload.php";

use library\Punk;

$app = new Punk();

if( array_key_exists("id",$_GET) ){
    $id = $_GET["id"];
    echo $app->getBeers(intval($id));
}

