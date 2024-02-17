<?php
include('./class.phpmailer.php');

function mailer($from, $from_email, $to, $to_email, $subject, $content) {
	//$content = nl2br($content);

	$mail = new PHPMailer(true);
	$mail->IsSendmail();

	try {
		$mail->CharSet    = "utf-8";
		$mail->Encoding   = "base64";
		$mail->AddAddress($to_email, $to);
		$mail->SetFrom($from_email, $from);
		$mail->AddReplyTo($from_email, $from);
		$mail->Subject = $subject;
		$mail->MsgHTML($content);
		$mail->Send();
		return true;
	} catch (phpmailerException $e) {
		echo $e->errorMessage();
		return false;
	} catch (Exception $e) {
		echo $e->getMessage();
		return false;
	}
}

?>