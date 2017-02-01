
<?php
// The message
$message = "Line 1\r\nLine 2\r\nLine 3";

$message = wordwrap($message, 70, "\r\n");

// Send
mail('bruno.idealencar@gmail.com', 'My Subject', $message);
?>
