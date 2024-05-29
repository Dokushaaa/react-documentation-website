<?php
$conn = null;
$conn = checkDbConnection();
$post = new Post($conn);
$error = [];
$returnData = [];
if (array_key_exists("postid", $_GET)) {
    checkPayload($data);
     $post->post_aid = $_GET['postid'];
    $post->post_is_featured = checkIndex($data, "post_is_featured");
    $post->post_title = checkIndex($data, "post_title");
    $post->post_category_id = checkIndex($data, "post_category_id");
    $post->post_tag_id = checkIndex($data, "post_tag_id");
    $post->post_image = checkIndex($data, "post_image");
    $post->post_author = checkIndex($data, "post_author");
    $post->post_article = checkIndex($data, "post_article");
    $post->post_published_date = checkIndex($data, "post_published_date");
    $post->post_datetime = date("Y-m-d H:i:s");date("Y-m-d H:i:s");
    $query = checkUpdate($post);
    returnSuccess($post, "post", $query);
}
checkEndpoint();