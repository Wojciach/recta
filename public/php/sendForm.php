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
    echo 'Message has been sent, Thank you!';
} catch (Exception $e) {
    $er = $email->getErrorInfo();
    $exErr = $e->getMessage();
    echo "Message could not be sent. Mailer Error: $er . Exveption Message: $exErr";
}