<?php
if (!defined('_INDEX_')) define('_INDEX_', true);
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

include_once('./_common.php');

$name = "sub01_01";

$g5['title'] = '회사소개';

include_once(G5_PATH.'/head.php');
?>

<section>
    <?php include("/home/rlawlgh3687/html/lawfirms/sub/header_background.php"); ?>
    <div class="s1_title_wrap">
        <div class="s1_title">
            상담후기
        </div>
        <?php include("/home/rlawlgh3687/html/lawfirms/sub/sub_title5.php"); ?>
</section>

<?php
include_once(G5_THEME_PATH.'/tail.php');
