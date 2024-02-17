<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

if (G5_IS_MOBILE) {
    include_once(G5_THEME_MOBILE_PATH.'/tail.php');
    return;
}

if(G5_COMMUNITY_USE === false) {
    include_once(G5_THEME_SHOP_PATH.'/shop.tail.php');
    return;
}
?>

<footer class="section fp-auto-height">
    <div class="in_f">
        <div class="f_logo">
            <img src="http://rlawlgh3687.dothome.co.kr/lawfirms/img/logo9.svg">
        </div>
        <b>LAWFIRM 그날</b>
        <ul class="f_nav">
            <li>상담안내</li>
            <li>로펌소개</li>
            <li>사건전담센터</li>
            <li>업무분야</li>
            <li>그날솔루션</li>
            <li>히스토리</li>
        </ul>
        <div class="f_s_nav_wrap">
            <ul class="f_s_nav">
                <li>법률사무소 그날 대표번호</li>
                <li>T.053-523-9797</li>
                <li>F.053-523-7573</li>
                <li>E.jytlawyer@naver.com</li>
            </ul>
            <ul class="f_s_nav">
                <li>대구광역시 달서구 장산남로 21,
                    205,206호</li>
                <li>사업자등록번호 839-08-00587</li>
                <li>대표자:전용탁</li>
                <li>카카오톡 : jyt2001</li>
            </ul>
        </div>
        <div class="copy">
            Copyright ⓒ LAWFIRM 그날 Allrights Reserved.
        </div>
    </div>
</footer>
</div>

<?php
if(G5_DEVICE_BUTTON_DISPLAY && !G5_IS_MOBILE) { ?>
<?php
}

if ($config['cf_analytics']) {
    echo $config['cf_analytics'];
}
?>

<!-- } 하단 끝 -->

<script>
    $(function() {
        // 폰트 리사이즈 쿠키있으면 실행
        font_resize("container", get_cookie("ck_font_resize_rmv_class"), get_cookie("ck_font_resize_add_class"));
    });

</script>

<?php
include_once(G5_THEME_PATH."/tail.sub.php");
