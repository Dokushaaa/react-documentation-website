<?php

Class Tag {
    public $tag_aid;
    public $tag_title;
    public $tag_is_active;
    public $tag_datetime;
    public $tag_created;

    public $tag_search;

    public $connection;
    public $lastInsertedId;
    public $tbltag;
    

    public function __construct($db) {
        $this->connection = $db;
        $this->tbltag = "tbl_tag";
    }

    public function create() {
        try {
            $sql = "insert into {$this->tbltag} ";
            $sql .= "( tag_title, ";
            $sql .= "tag_is_active, ";
            $sql .= "tag_created, ";
            $sql .= "tag_datetime ) values ( ";
            $sql .= ":tag_title, ";
            $sql .= ":tag_is_active, ";
            $sql .= ":tag_created, ";
            $sql .= ":tag_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "tag_title" => $this->tag_title,
                "tag_is_active" => $this->tag_is_active,
                "tag_created" => $this->tag_created,
                "tag_datetime" => $this->tag_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }

        return $query;
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tbltag} ";
            $sql .= "order by tag_is_active desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readById()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tbltag} ";
            $sql .= "where tag_aid = :tag_aid ";
            $sql .= "order by tag_aid asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "tag_aid" => $this->tag_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tbltag} ";
            $sql .= "where tag_aid = :tag_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "tag_aid" => $this->tag_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tbltag} set ";
            $sql .= "tag_title = :tag_title, ";
            $sql .= "tag_datetime = :tag_datetime ";
            $sql .= "where tag_aid  = :tag_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "tag_title" => $this->tag_title,
                "tag_datetime" => $this->tag_datetime,
                "tag_aid" => $this->tag_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tbltag} set ";
            $sql .= "tag_is_active = :tag_is_active, ";
            $sql .= "tag_datetime = :tag_datetime ";
            $sql .= "where tag_aid  = :tag_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "tag_is_active" => $this->tag_is_active,
                "tag_datetime" => $this->tag_datetime,
                "tag_aid" => $this->tag_aid,
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
            $sql .= "from {$this->tbltag} ";
            $sql .= "where tag_title like :tag_title ";
            $sql .= "order by tag_is_active desc, ";
            $sql .= "tag_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "tag_title" => "%{$this->tag_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}