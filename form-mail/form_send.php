<?php
include "mailer.php";

$mode = $_REQUEST['mode'];
$name = $_REQUEST['name'];
$hp = $_REQUEST['hp'];
$resdt = $_REQUEST['resdt'];
$memo = $_REQUEST['memo'];
$ip = $_SERVER['REMOTE_ADDR'];
$email = $_REQUEST['email'];

$subject = "[온라인 상담신청] 클라이언트에게 상담요청이 왔습니다.";

$body = "";
$body .= "<b>성함</b> : $name<br><br>";
$body .= "<b>연락처</b> : $hp<br><br>";
$body .= "<b>날짜</b> : $resdt<br><br>";
$body .= "<b>상담내용</b> : $memo<br><br>";
$body .= "<b>이메일</b> : $email<br>";

$toMail = "rlawlgh388@naver.com";
$fromMail = "rlawlgh7575@naver.com";

if($mode == "send") {
	$ret = mailer($name, $fromMail, "법률사무소 그날", $toMail, $subject, $body);
	if($ret) {
		//성공
		echo "<meta charset=\"UTF-8\">";
		echo "<script>alert('[성공] 온라인 상담신청이 정상적으로 전송되었습니다.');</script>";
		echo "<script>location.href='index.html';</script>";
	} else {
		//실패
		echo "<meta charset=\"UTF-8\">";
		echo "<script>alert('[오류] 온라인 상담신청이 정상적으로 전송되지 않았습니다.');</script>";
		echo "<script>history.back();</script>";
	}
}

?>