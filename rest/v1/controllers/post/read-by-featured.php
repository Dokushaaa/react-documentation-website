<?php
require '../../core/header.php';
require '../../core/functions.php';
require '../../models/Post.php';

$body = file_get_contents('php://input');
$data = json_decode($body, true);

$conn = null;
$conn = checkDbConnection();
$post = new Post($conn);
$error = [];
$returnData = [];

// map read all
if (empty($_GET)) {
    $query = checkReadByFeatured($post);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();