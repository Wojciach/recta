<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require 'vendor/autoload.php';

use yourvendor\mylibrary\Body;
use yourvendor\mylibrary\Email;

try  {
    $body = new Body();
    $email = new Email($body->getBody());
    $email->send();
    echo 'ok';
} catch (Exception $e) {
   // $exErr = $e->getMessage();
    http_response_code(500);
    echo "error"; // . $e;
}