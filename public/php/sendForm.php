<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
    $company = filter_input(INPUT_POST, 'company', FILTER_SANITIZE_STRING);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);
}
    
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;
    $mail->isSMTP();
    $mail->Host       = 'smtp.hostinger.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'formularz@recta.website';
    $mail->Password   = '5Vx$Zv5?zAH@#nc';
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;

    $mail->SMTPOptions = array(
        'ssl' => array(
           'verify_peer' => true,
           'verify_peer_name' => true,
           'allow_self_signed' => true
        )
     );

    //Recipient
    $mail->setFrom('formularz@recta.website', 'RECTA FORMULARZ');
    $mail->addAddress('info@recta.website', 'Recta-trans');

    //Content
    $mail->isHTML(true);
    $mail->Subject = 'Subject';
    $mail->Body    = "This is the HTML message body {$name}, {$email}, {$phone}, {$company}, {$message}";

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}