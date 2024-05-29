<?php
$conn = null;
$conn = checkDbConnection();
$tag = new Tag($conn);
$error = [];
$returnData = [];
if (array_key_exists("tagid", $_GET)) {
    checkPayload($data);
    $tag->tag_aid = $_GET['tagid'];
    $tag->tag_title = checkIndex($data, "tag_title");
    $tag->tag_datetime = date("Y-m-d H:i:s");
    
    checkId($tag->tag_aid);
    // $tag_name_old = checkIndex($data, "tag_name_old");
    // compareName($tag, $tag_name_old, $tag->tag_name);
    $query = checkUpdate($tag);
    returnSuccess($tag, "tag", $query);
}

checkEndpoint();