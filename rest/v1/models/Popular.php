<?php

Class Popular {
    //10 rows
    public $popular_aid;
    public $popular_title;
    public $popular_category;
    public $popular_image;
    public $popular_author;
    public $popular_article;
    public $popular_is_active;
    public $popular_published_date;
    public $popular_created;
    public $popular_datetime;
    
    public $popular_search;
    public $connection;
    public $lastInsertedId;
    public $tblpopular;

    public function __construct($db) {
        $this->connection = $db;
        $this->tblpopular = "tbl_popular";
    }

    public function create() {
        try {
             $sql = "insert into {$this->tblpopular} ";
             $sql .= "( popular_title, ";
             $sql .= "popular_category, ";
             $sql .= "popular_image, ";
             $sql .= "popular_author, ";
             $sql .= "popular_article, ";
             $sql .= "popular_is_active, ";
             $sql .= "popular_published_date, ";
             $sql .= "popular_created, ";
             $sql .= "popular_datetime ) values ( ";
             $sql .= ":popular_title, ";
             $sql .= ":popular_category, ";
             $sql .= ":popular_image, ";
             $sql .= ":popular_author, ";
             $sql .= ":popular_article, ";
             $sql .= ":popular_is_active, ";
             $sql .= ":popular_published_date, ";
             $sql .= ":popular_created, ";
             $sql .= ":popular_datetime ) ";
             $query = $this->connection->prepare($sql);
             $query->execute([
                "popular_title" => $this->popular_title,
                "popular_category" => $this->popular_category,
                "popular_image" => $this->popular_image,
                "popular_author" => $this->popular_author,
                "popular_article" => $this->popular_article,
                "popular_is_active" => $this->popular_is_active,
                "popular_published_date" => $this->popular_published_date,
                "popular_created" => $this->popular_created,
                "popular_datetime" => $this->popular_datetime,
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
            $sql .= "from {$this->tblpopular} ";
            $sql .= "where by popular_aid :popular_aid ";
            $sql .= "order by popular_aid asc ";
            $query = $this->connection->query($sql);
             $query = $this->connection->prepare($sql);
            $query->execute([
                "popular_aid" => $this->popular_aid,
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
            $sql .= "from {$this->tblpopular} ";
            $sql .= "order by popular_is_active desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    public function delete()
    {
        try {
            $sql = "delete from {$this->tblpopular} ";
            $sql .= "where popular_aid = :popular_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "popular_aid" => $this->popular_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    public function update()
    {
        try {
            $sql = "update {$this->tblpopular} set ";
            $sql .= "popular_title = :popular_title, ";
            $sql .= "popular_category = :popular_category, ";
            $sql .= "popular_image = :popular_image, ";
            $sql .= "popular_author = :popular_author, ";
            $sql .= "popular_article = :popular_article, "; 
            $sql .= "popular_published_date = :popular_published_date, ";
            $sql .= "popular_datetime = :popular_datetime ";
            $sql .= "where popular_aid = :popular_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "popular_title" => $this->popular_title,
                "popular_category" => $this->popular_category,
                "popular_image" => $this->popular_image,
                "popular_author" => $this->popular_author,
                "popular_article" => $this->popular_article,
                "popular_published_date" => $this->popular_published_date,
                "popular_datetime" => $this->popular_datetime,
                "popular_aid" => $this->popular_aid,
         
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    public function active()
    {
        try {
            $sql = "update {$this->tblpopular} set ";
            $sql .= "popular_is_active = :popular_is_active, ";
            $sql .= "popular_datetime = :popular_datetime ";
            $sql .= "where popular_aid  = :popular_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "popular_is_active" => $this->popular_is_active,
                "popular_datetime" => $this->popular_datetime,
                "popular_aid" => $this->popular_aid,
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
            $sql .= "from {$this->tblpopular} ";
            $sql .= "where popular_title like :popular_title ";
            $sql .= "order by popular_is_active desc, ";
            $sql .= "popular_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "popular_title" => "%{$this->popular_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}