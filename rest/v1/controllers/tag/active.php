<?php
require '../../core/header.php';
require '../../core/functions.php';
require '../../models/Tag.php';

$conn = null;
$conn = checkDbConnection();

$tag = new Tag($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("tagid", $_GET)) {
        checkPayload($data);
        $tag->tag_aid = $_GET['tagid'];
        $tag->tag_is_active = trim($data["isActive"]);
        $tag->tag_datetime = date("Y-m-d H:i:s");
        checkId($tag->tag_aid);
        $query = checkActive($tag);
        http_response_code(200);
        returnSuccess($tag, "tag", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();