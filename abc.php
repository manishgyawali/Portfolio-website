<?php 
if($isset($_POST['submit'])){
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$host = 'localhost';
$db   = 'portfolio';
$user = 'root';
$pass = '';

$conn = new mysqli('localhost','root','','portfolio');
if($conn->connect_error){
    die('connection failed: ' .$conn->connect_error);

}
else{
echo("try again");
}
$sql = "INSERT INTO portfolio(name,email,subject,message) Values ('$name',
'$email', '$subject','$message')";

 mysqli_query($conn,$sql);

}

?>