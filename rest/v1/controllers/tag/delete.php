<?php
$conn = null;
$conn = checkDbConnection();
$tag = new Tag($conn);

$error = [];
$returnData = [];
if (array_key_exists("tagid", $_GET)) {
    $tag->tag_aid = $_GET['tagid'];
    checkId($tag->tag_aid);

    $query = checkDelete($tag);
    returnSuccess($tag, "tag", $query);
}

checkEndpoint();
