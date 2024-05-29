<?php

Class Featured {
    //10 rows
    public $featured_aid;
    public $featured_title;
    public $featured_category;
    public $featured_image;
    public $featured_author;
    public $featured_article;
    public $featured_is_active;
    public $featured_published_date;
    public $featured_created;
    public $featured_datetime;
    
    public $featured_search;
    public $connection;
    public $lastInsertedId;
    public $tblfeatured;

    public function __construct($db) {
        $this->connection = $db;
        $this->tblfeatured = "tbl_featured";
    }

    public function create() {
        try {
             $sql = "insert into {$this->tblfeatured} ";
             $sql .= "( featured_title, ";
             $sql .= "featured_category, ";
             $sql .= "featured_image, ";
             $sql .= "featured_author, ";
             $sql .= "featured_article, ";
             $sql .= "featured_is_active, ";
             $sql .= "featured_published_date, ";
             $sql .= "featured_created, ";
             $sql .= "featured_datetime ) values ( ";
             $sql .= ":featured_title, ";
             $sql .= ":featured_category, ";
             $sql .= ":featured_image, ";
             $sql .= ":featured_author, ";
             $sql .= ":featured_article, ";
             $sql .= ":featured_is_active, ";
             $sql .= ":featured_published_date, ";
             $sql .= ":featured_created, ";
             $sql .= ":featured_datetime ) ";
             $query = $this->connection->prepare($sql);
             $query->execute([
                "featured_title" => $this->featured_title,
                "featured_category" => $this->featured_category,
                "featured_image" => $this->featured_image,
                "featured_author" => $this->featured_author,
                "featured_article" => $this->featured_article,
                "featured_is_active" => $this->featured_is_active,
                "featured_published_date" => $this->featured_published_date,
                "featured_created" => $this->featured_created,
                "featured_datetime" => $this->featured_datetime,
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
            $sql .= "from {$this->tblfeatured} ";
            $sql .= "where by featured_aid :featured_aid ";
            $sql .= "order by featured_aid asc ";
            $query = $this->connection->query($sql);
             $query = $this->connection->prepare($sql);
            $query->execute([
                "featured_aid" => $this->featured_aid,
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
            $sql .= "from {$this->tblfeatured} ";
            $sql .= "order by featured_is_active desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    public function delete()
    {
        try {
            $sql = "delete from {$this->tblfeatured} ";
            $sql .= "where featured_aid = :featured_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "featured_aid" => $this->featured_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    public function update()
    {
        try {
            $sql = "update {$this->tblfeatured} set ";
            $sql .= "featured_title = :featured_title, ";
            $sql .= "featured_category = :featured_category, ";
            $sql .= "featured_image = :featured_image, ";
            $sql .= "featured_author = :featured_author, ";
            $sql .= "featured_article = :featured_article, "; 
            $sql .= "featured_published_date = :featured_published_date, ";
            $sql .= "featured_datetime = :featured_datetime ";
            $sql .= "where featured_aid = :featured_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "featured_title" => $this->featured_title,
                "featured_category" => $this->featured_category,
                "featured_image" => $this->featured_image,
                "featured_author" => $this->featured_author,
                "featured_article" => $this->featured_article,
                "featured_published_date" => $this->featured_published_date,
                "featured_datetime" => $this->featured_datetime,
                "featured_aid" => $this->featured_aid,
         
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    public function active()
    {
        try {
            $sql = "update {$this->tblfeatured} set ";
            $sql .= "featured_is_active = :featured_is_active, ";
            $sql .= "featured_datetime = :featured_datetime ";
            $sql .= "where featured_aid  = :featured_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "featured_is_active" => $this->featured_is_active,
                "featured_datetime" => $this->featured_datetime,
                "featured_aid" => $this->featured_aid,
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
            $sql .= "from {$this->tblfeatured} ";
            $sql .= "where featured_title like :featured_title ";
            $sql .= "order by featured_is_active desc, ";
            $sql .= "featured_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "featured_title" => "%{$this->featured_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}