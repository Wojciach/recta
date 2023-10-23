<?php
namespace yourvendor\mylibrary;

require 'vendor/autoload.php';

use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class Email {
    private $mail;
    
    public function __construct($body) {

        $this->mail = new PHPMailer(true);

            //Server settings
          //  $this->mail->SMTPDebug = SMTP::DEBUG_SERVER;
            $this->mail->isSMTP();
            $this->mail->Host       = 'smtp.hostinger.com';
            $this->mail->SMTPAuth   = true;
            $this->mail->Username   = 'formularz@recta.website';
            $this->mail->Password   = '5Vx$Zv5?zAH@#nc';
            $this->mail->SMTPSecure = 'ssl';
            $this->mail->Port       = 465;
            $this->mail->SMTPOptions = array(
                'ssl' => array(
                   'verify_peer' => true,  //false for local dev true for production
                   'verify_peer_name' => true,
                   'allow_self_signed' => true
                )
             );
            //Recipient
            $this->mail->setFrom('formularz@recta.website', 'RECTA FORMULARZ');
            $this->mail->addAddress('info@recta.website', 'Recta-trans');
            //Content
            $this->mail->isHTML(true);
            $this->mail->CharSet = 'UTF-8';
            $this->mail->Subject = 'Form From Recta.website';
            $this->mail->Body = $body;
           // $this->mail->send();
            return $this->mail;
    }

    public function send() {
        $this->mail->send();
    }

}



