$(document).ready(function(){
	$("#resdt").datepicker({
		dateFormat: 'yy-mm-dd',
		prevText: '이전 달',
		nextText: '다음 달',
		monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		dayNames: ['일','월','화','수','목','금','토'],
		dayNamesShort: ['일','월','화','수','목','금','토'],
		dayNamesMin: ['일','월','화','수','목','금','토'],
		showMonthAfterYear: true,
		changeMonth: false,
		changeYear: false,
		yearSuffix: '년'
	});
});

function form_Check(){
	if(myform.name.value == ''){
		alert("성함을 입력해주십시오.");
		myform.name.focus();
		return;
	}
	if(myform.hp.value == ''){
		alert("연락처를 입력해주십시오.");
		myform.hp.focus();
		return;
	}
	if(myform.resdt.value == ''){
		alert("날짜를 입력해주십시오.");
		myform.resdt.focus();
		return;
	}
	if(myform.memo.value == ''){
		alert("상담내용을 입력해주십시오.");
		myform.memo.focus();
		return;
	}
	if(!confirm('온라인 상담신청 내용을 전송하겠습니까?')) return;
	myform.submit();
}