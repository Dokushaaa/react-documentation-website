<?php

Class Post {
    //10 rows
    public $post_aid;
    public $post_is_featured;
    public $post_title;
    public $post_category_id;
    public $post_tag_id;
    public $post_image;
    public $post_author;
    public $post_article;
    public $post_is_active;
    public $post_published_date;
    public $post_created;
    public $post_datetime;
    
    public $post_search;
    public $connection;
    public $lastInsertedId;
    public $tblpost;
    public $tblcategory;
    public $tbltag;

    // join table
    public function __construct($db) {
        $this->connection = $db;
        $this->tblpost = "tbl_post";
        $this->tblcategory = "tbl_category";
        $this->tbltag = "tbl_tag";
    }

    public function create() {
        try {
             $sql = "insert into {$this->tblpost} ";
             $sql .= "( post_title, ";
             $sql .= "post_category_id, ";
             $sql .= "post_is_featured, ";
             $sql .= "post_tag_id, ";
             $sql .= "post_image, ";
             $sql .= "post_author, ";
             $sql .= "post_article, ";
             $sql .= "post_is_active, ";
             $sql .= "post_published_date, ";
             $sql .= "post_created, ";
             $sql .= "post_datetime ) values ( ";
             $sql .= ":post_title, ";
             $sql .= ":post_category_id, ";
             $sql .= ":post_is_featured, ";
             $sql .= ":post_tag_id, ";
             $sql .= ":post_image, ";
             $sql .= ":post_author, ";
             $sql .= ":post_article, ";
             $sql .= ":post_is_active, ";
             $sql .= ":post_published_date, ";
             $sql .= ":post_created, ";
             $sql .= ":post_datetime ) ";
             $query = $this->connection->prepare($sql);
             $query->execute([
                "post_title" => $this->post_title,
                "post_category_id" => $this->post_category_id,
                 "post_is_featured" => $this->post_is_featured,
                "post_tag_id" => $this->post_category_id,
                "post_image" => $this->post_image,
                "post_author" => $this->post_author,
                "post_article" => $this->post_article,
                "post_is_active" => $this->post_is_active,
                "post_published_date" => $this->post_published_date,
                "post_created" => $this->post_created,
                "post_datetime" => $this->post_datetime,
             ]);
        $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        
        return $query;
    }
    
public function readById()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblpost} as post, ";
            $sql .= "{$this->tblcategory} as category, ";
            $sql .= "{$this->tbltag} as tag ";
            $sql .= "where post.post_category_id = category.category_aid ";
            $sql .= "and post.post_tag_id = tag.tag_aid ";
            $sql .= "and post.post_aid = :post_aid ";
            $sql .= "order by post.post_aid asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "post_aid" => $this->post_aid
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    

public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblpost} as post, ";
            $sql .= "{$this->tblcategory} as category, ";
            $sql .= "{$this->tbltag} as tag ";
            $sql .= "where post.post_category_id = category.category_aid ";
            $sql .= "and post.post_tag_id = tag.tag_aid ";
            $sql .= "order by post.post_is_active desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
public function readByFeatured()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblpost} as post, ";
            $sql .= "{$this->tblcategory} as category, ";
            $sql .= "{$this->tbltag} as tag ";
            $sql .= "where post.post_category_id = category.category_aid ";
            $sql .= "and post.post_tag_id = tag.tag_aid ";
            $sql .= "and post.post_is_featured = 1 ";
            $sql .= "order by post.post_is_active desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblpost} ";
            $sql .= "where post_aid = :post_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "post_aid" => $this->post_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    public function update()
    {
        try {
            $sql = "update {$this->tblpost} set ";
            $sql .= "post_title = :post_title, ";
            $sql .= "post_is_featured = :post_is_featured, ";
            $sql .= "post_category_id = :post_category_id, ";
            $sql .= "post_tag_id = :post_tag_id, ";
            $sql .= "post_image = :post_image, ";
            $sql .= "post_author = :post_author, ";
            $sql .= "post_article = :post_article, "; 
            $sql .= "post_published_date = :post_published_date, ";
            $sql .= "post_datetime = :post_datetime ";
            $sql .= "where post_aid = :post_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "post_title" => $this->post_title,
                "post_is_featured" => $this->post_is_featured,
                "post_category_id" => $this->post_category_id,
                "post_tag_id" => $this->post_tag_id,
                "post_image" => $this->post_image,
                "post_author" => $this->post_author,
                "post_article" => $this->post_article,
                "post_published_date" => $this->post_published_date,
                "post_datetime" => $this->post_datetime,
                "post_aid" => $this->post_aid,
         
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    public function active()
    {
        try {
            $sql = "update {$this->tblpost} set ";
            $sql .= "post_is_active = :post_is_active, ";
            $sql .= "post_datetime = :post_datetime ";
            $sql .= "where post_aid  = :post_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "post_is_active" => $this->post_is_active,
                "post_datetime" => $this->post_datetime,
                "post_aid" => $this->post_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    public function search()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblpost} ";
            $sql .= "where post_title like :post_title ";
            $sql .= "order by post_is_active desc, ";
            $sql .= "post_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "post_title" => "%{$this->post_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}