<?php
header('Content-Type: application/json;charset=UTF-8');
$output = [];
require_once('../init.php');
//获取轮播广告项
$sql = "SELECT cid,img,title,href FROM uphone_index_carousel";
$result = mysqli_query($conn, $sql);
$output['carouselItems'] = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode($output);

