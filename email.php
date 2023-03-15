<?php
if($_SERVER['REQUEST_METHOD']=="POST"){
    $name == $_POST["name"];
    $email == $_POST["email"];
    $message == $_POST["message"];

    $to = "amnjogu78@gmail.com";
    $from = "Message from your website";
    $body = "Name: $name\n Email: $email\n Message: $message";
    

    if(mail($to,$subject, $body)){
        echo "Message successfully sent.";
    }
    else{
        echo "Message not sent.";
    }
}
?>