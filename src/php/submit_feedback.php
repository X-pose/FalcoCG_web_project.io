<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $feedback = $_POST['feedback'];

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // Set up SMTP configuration (replace with your email and SMTP details)
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'falcocg.business@gmail.com';
        $mail->Password = 'sfi781782';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Set up sender and recipient
        $mail->setFrom('falcocg.business@gmail.com', 'FalcoCG Store');
        $mail->addAddress('falconbusiness123@gmail.com');

        // Set up email content
        $mail->isHTML(true);
        $mail->Subject = 'Feedback from ' . $name;
        $mail->Body = 'Name: ' . $name . '<br>Email: ' . $email . '<br>Feedback: ' . $feedback;

        // Send the email
        $mail->send();

        // Redirect or show success message
        header('Location: success.html');
        exit();
    } catch (Exception $e) {
        // Handle errors (you might want to log the error)
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
