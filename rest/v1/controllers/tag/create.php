<?php
$conn = null;
$conn = checkDbConnection();
$tag = new Tag($conn);
if (array_key_exists("tagid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$tag->tag_title = checkIndex($data, "tag_title");
$tag->tag_is_active = 1;
$tag->tag_created = date("Y-m-d H:i:s");
$tag->tag_datetime = date("Y-m-d H:i:s");

// isNameExist($tag, $tag->tag_title);

$query = checkCreate($tag);
returnSuccess($tag, "tag", $query);
