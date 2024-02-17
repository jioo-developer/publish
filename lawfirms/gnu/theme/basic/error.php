<?php
define('_error_', true);
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

if (G5_IS_MOBILE) {
    include_once(G5_THEME_MOBILE_PATH.'/error.php');
    return;
}
?>

<style>
    *{
        text-align: center;
    }
    
    .notfound{
        display: flex;
        width: 100%;
        height: 100vh;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        bottom: 50px;
    }
    
    h1{
        font-size: 80px;
    }
    
    a{
        margin-top: 20px;
    }
</style>

<div class="notfound">
    <div class="notfound-404">
        <h1>404</h1>
    </div>
    <h2>이 페이지는 에러페이지 입니다</h2>
    <p>This page is an error page.</p>
    <a href="http://rlawlgh3687.dothome.co.kr/lawfirms/index.html">돌아가기</a>
</div>
