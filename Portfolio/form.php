<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $subject = $_POST["subject"];
  $message = $_POST["message"];

  // create email headers
  $headers = 'From: '.$name."\r\n".
      'Reply-To: '.$email."\r\n" .
      'X-Mailer: PHP/' . phpversion();

  // send email
  mail('idrismusa004@gmail.com', $subject, $message, $headers);

  // redirect to thank-you page
  header('Location: thank-you.html');
  exit();
}

?>
