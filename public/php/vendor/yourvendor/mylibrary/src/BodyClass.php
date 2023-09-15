<?php

namespace yourvendor\mylibrary;

class Body {

    private $name;
    private $email;
    private $phone;
    private $company;
    private $message;

    public function __construct() {
        //colect data from form
        $this->name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS);
        $this->email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
        $this->phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_SPECIAL_CHARS);
        $this->company = filter_input(INPUT_POST, 'company', FILTER_SANITIZE_SPECIAL_CHARS);
        $this->message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_SPECIAL_CHARS);
    }

    public function getBody() {
        //create email body from template and colecrted data
        $template = file_get_contents('emailLayout.html'); //use template for email to send
        $body = str_replace(
            array('{{name}}', '{{email}}', '{{phone}}', '{{company}}', '{{message}}'),
            array($this->name, $this->email, $this->phone, $this->company, $this->message),
            $template
        );
        return $body;
    }

}