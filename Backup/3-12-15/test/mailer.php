<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$complete_message = "Messaggio inviato da " . $name . "\r\n" . "Messaggio: " . $message;

$headers = "From: " . $email;

echo mail("luca.aguzzoli@hotmail.it", "messaggio dal sito", $complete_message) or die("impossibile inviare l'email");
