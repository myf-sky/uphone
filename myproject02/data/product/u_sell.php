<?php
/**
* 推荐商品显示
*/
header('Content-Type: application/json;charset=UTF-8');
$output = [];
require_once('../init.php');
$sql = "SELECT pid,title,details,pic,price,href FROM uphone_index_product WHERE seq_recommended>5";
$result = mysqli_query($conn, $sql);
$output['recommendedItems'] = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode($output);