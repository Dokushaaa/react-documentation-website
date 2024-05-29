<?php

Class FashionNStyle {
    //10 rows
    public $fashionnstyle_aid;
    public $fashionnstyle_title;
    public $fashionnstyle_category;
    public $fashionnstyle_image;
    public $fashionnstyle_author;
    public $fashionnstyle_article;
    public $fashionnstyle_is_active;
    public $fashionnstyle_published_date;
    public $fashionnstyle_created;
    public $fashionnstyle_datetime;
    
    public $fashionnstyle_search;
    public $connection;
    public $lastInsertedId;
    public $tblfashionnstyle;

    public function __construct($db) {
        $this->connection = $db;
        $this->tblfashionnstyle = "tbl_fashionnstyle";
    }

    public function create() {
        try {
             $sql = "insert into {$this->tblfashionnstyle} ";
             $sql .= "( fashionnstyle_title, ";
             $sql .= "fashionnstyle_category, ";
             $sql .= "fashionnstyle_image, ";
             $sql .= "fashionnstyle_author, ";
             $sql .= "fashionnstyle_article, ";
             $sql .= "fashionnstyle_is_active, ";
             $sql .= "fashionnstyle_published_date, ";
             $sql .= "fashionnstyle_created, ";
             $sql .= "fashionnstyle_datetime ) values ( ";
             $sql .= ":fashionnstyle_title, ";
             $sql .= ":fashionnstyle_category, ";
             $sql .= ":fashionnstyle_image, ";
             $sql .= ":fashionnstyle_author, ";
             $sql .= ":fashionnstyle_article, ";
             $sql .= ":fashionnstyle_is_active, ";
             $sql .= ":fashionnstyle_published_date, ";
             $sql .= ":fashionnstyle_created, ";
             $sql .= ":fashionnstyle_datetime ) ";
             $query = $this->connection->prepare($sql);
             $query->execute([
                "fashionnstyle_title" => $this->fashionnstyle_title,
                "fashionnstyle_category" => $this->fashionnstyle_category,
                "fashionnstyle_image" => $this->fashionnstyle_image,
                "fashionnstyle_author" => $this->fashionnstyle_author,
                "fashionnstyle_article" => $this->fashionnstyle_article,
                "fashionnstyle_is_active" => $this->fashionnstyle_is_active,
                "fashionnstyle_published_date" => $this->fashionnstyle_published_date,
                "fashionnstyle_created" => $this->fashionnstyle_created,
                "fashionnstyle_datetime" => $this->fashionnstyle_datetime,
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
            $sql .= "from {$this->tblfashionnstyle} ";
            $sql .= "where by fashionnstyle_aid :fashionnstyle_aid ";
            $sql .= "order by fashionnstyle_aid asc ";
            $query = $this->connection->query($sql);
             $query = $this->connection->prepare($sql);
            $query->execute([
                "fashionnstyle_aid" => $this->fashionnstyle_aid,
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
            $sql .= "from {$this->tblfashionnstyle} ";
            $sql .= "order by fashionnstyle_is_active desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    public function delete()
    {
        try {
            $sql = "delete from {$this->tblfashionnstyle} ";
            $sql .= "where fashionnstyle_aid = :fashionnstyle_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "fashionnstyle_aid" => $this->fashionnstyle_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    public function update()
    {
        try {
            $sql = "update {$this->tblfashionnstyle} set ";
            $sql .= "fashionnstyle_title = :fashionnstyle_title, ";
            $sql .= "fashionnstyle_category = :fashionnstyle_category, ";
            $sql .= "fashionnstyle_image = :fashionnstyle_image, ";
            $sql .= "fashionnstyle_author = :fashionnstyle_author, ";
            $sql .= "fashionnstyle_article = :fashionnstyle_article, "; 
            $sql .= "fashionnstyle_published_date = :fashionnstyle_published_date, ";
            $sql .= "fashionnstyle_datetime = :fashionnstyle_datetime ";
            $sql .= "where fashionnstyle_aid = :fashionnstyle_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "fashionnstyle_title" => $this->fashionnstyle_title,
                "fashionnstyle_category" => $this->fashionnstyle_category,
                "fashionnstyle_image" => $this->fashionnstyle_image,
                "fashionnstyle_author" => $this->fashionnstyle_author,
                "fashionnstyle_article" => $this->fashionnstyle_article,
                "fashionnstyle_published_date" => $this->fashionnstyle_published_date,
                "fashionnstyle_datetime" => $this->fashionnstyle_datetime,
                "fashionnstyle_aid" => $this->fashionnstyle_aid,
         
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    public function active()
    {
        try {
            $sql = "update {$this->tblfashionnstyle} set ";
            $sql .= "fashionnstyle_is_active = :fashionnstyle_is_active, ";
            $sql .= "fashionnstyle_datetime = :fashionnstyle_datetime ";
            $sql .= "where fashionnstyle_aid  = :fashionnstyle_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "fashionnstyle_is_active" => $this->fashionnstyle_is_active,
                "fashionnstyle_datetime" => $this->fashionnstyle_datetime,
                "fashionnstyle_aid" => $this->fashionnstyle_aid,
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
            $sql .= "from {$this->tblfashionnstyle} ";
            $sql .= "where fashionnstyle_title like :fashionnstyle_title ";
            $sql .= "order by fashionnstyle_is_active desc, ";
            $sql .= "fashionnstyle_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "fashionnstyle_title" => "%{$this->fashionnstyle_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}