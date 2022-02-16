<?php
// (A) LOAD PHPMAILER
// https://github.com/PHPMailer/PHPMailer
// composer require phpmailer/phpmailer
require "vendor/autoload.php";
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
$mail = new PHPMailer(true);

// (B) SET EMAIL
$mail->From = "av@mtsilver.com";
$mail->addAddress("kurt@mtsilver.com");
$mail->isHTML(true);
$mail->Subject = "Test Attachment";
$mail->Body = "<strong>Test Message</strong>";
$mail->addAttachment("capybara.jpg");
$mail->addAttachment("owl.jpg");

// (C) SEND MAIL
try {
  $mail->send();
  echo "OK";
} catch (Exception $ex) { echo $mail->ErrorInfo; }
