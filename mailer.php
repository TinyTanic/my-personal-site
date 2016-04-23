<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

if(!validateEmail($email)){
   echo "false";
   return false;
}

$complete_message = "Messaggio inviato da " . $name . "\r\n" . "Messaggio: " . $message;

$headers = "From: " . $email;

mail("luca.aguzzoli@hotmail.it", "messaggio dal sito", $complete_message);

echo "true";

function vaidateEmail($email){
   $validator = "/[a-zA-Z0-9!#$%&'*+-\/=?^_`{|}~.]+@[a-zA-Z0-9-.]+.[a-zA-Z]+/";
   return preg_match($validator, $email);
}
