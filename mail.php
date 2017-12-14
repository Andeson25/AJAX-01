<?php

$recepient = "oleh.petryk@gmail.com";
$sitename = "Oleh Petryk Drum lessons";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$text = trim($_POST["text"]);
$message = "Імя: $name \Телефон: $email \nТекст: $text";

$pagetitle = "Нова заявка з сайту \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");