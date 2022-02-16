<?php
// (A) EMAIL SETTINGS
$mailTo = "av@mtsilver.com";
$mailSubject = "Test Attachment";
$mailMessage = "<strong>Test Message</strong>";
$mailAttach = "capybara.jpg";

// (B) GENERATE RANDOM BOUNDARY TO SEPARATE MESSAGE & ATTACHMENTS
// https://www.w3.org/Protocols/rfc1341/7_2_Multipart.html
$mailBoundary = md5(time());
$mailHead = implode("\r\n", [
  "MIME-Version: 1.0",
  "Content-Type: multipart/mixed; boundary=\"$mailBoundary\""
]);

// (C) DEFINE THE EMAIL MESSAGE
$mailBody = implode("\r\n", [
  "--$mailBoundary",
  "Content-type: text/html; charset=utf-8",
  "",
  $mailMessage
]);

// (D) MANUALLY ENCODE & ATTACH THE FILE
$mailBody .= implode("\r\n", [
  "",
  "--$mailBoundary",
  "Content-Type: application/octet-stream; name=\"". basename($mailAttach) . "\"",
  "Content-Transfer-Encoding: base64",
  "Content-Disposition: attachment",
  "",
  chunk_split(base64_encode(file_get_contents($mailAttach))),
  "--$mailBoundary--"
]);

// (E) SEND
echo mail($mailTo, $mailSubject, $mailBody, $mailHead)
  ? "OK" : "ERROR" ;
