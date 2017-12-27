<?php
$db_host = '127.0.0.1';
$db_user = 'root';
$db_password = '';
$db_database = 'uphone';
$db_port = 3306;
$db_charset = 'UTF8';

$conn = mysqli_connect($db_host, $db_user, $db_password, $db_database, $db_port);
//header('Access-Control-Allow-Origin:http://localhost:8100');
//header('Access-Control-Allow-credentials:true');
header("Content-Type:application/json;charset=utf-8");
mysqli_query($conn, "SET NAMES $db_charset");