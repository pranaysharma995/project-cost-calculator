<?php
$to = "abhishek.jha@acropolisglobal.com";
$subject = "My project Form Submission at Acropolis";
$name=$_POST['name'];

$phone_number=$_POST['phone_number'];
$email=$_POST['email'];
$msg = "Hi, a message has been posted on Acropolis website with following details :

NAME : ".$name."

PHONE : ".$phone_number."

EMAIL : ".$email."


---- END OF MESSAGE ----"
;
$headers = "From: Pranay <pranay.acropolisglobal.com>" . "\r\n";
$headers .= "MIME-Version: 1.0" . "\r\n";
$mail=mail($to,$subject,$msg,$headers);

if($mail)
{
    echo "Meassge Submitted";
	$mail=mail($email,"Thanks for your Interest",$msg2,$headers2);
 ?>
	
<?php 
}
else
{
 ?>
 <script type="text/javascript">     
        $(document).ready(function() {
			swal({ 
			 title: "Mail Not Sent !!",
			 text: "Some error occurred . Please try again !!",
			 type: "error" 
			 })
			 });
		</script>
<?php 
}
?>