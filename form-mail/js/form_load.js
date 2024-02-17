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