<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // E-Mail-Inhalt erstellen
  $to = "info@jonash.ch";
  $subject = "Neue Formulardaten";
  $body = "Name: " . $name . "\n";
  $body .= "E-Mail: " . $email . "\n";
  $body .= "Nachricht: " . $message;

  // E-Mail senden
  if (mail($to, $subject, $body)) {
    echo "Die E-Mail wurde erfolgreich gesendet.";
  } else {
    echo "Beim Versenden der E-Mail ist ein Fehler aufgetreten.";
  }
}
?>