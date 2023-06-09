<?php

class Database
{
    private $host = 'localhost';
    private $dbname = 'courses';
    private $user = 'root';
    private $pass = '';
    private $conn;

    // create tables needed
    private $tbs = "CREATE TABLE IF NOT EXISTS Users (
        user_id int(11) AUTO_INCREMENT,
        name varchar(255) not null,
        email varchar(255) not null,
        password varchar(255) not null,
        is_admin boolean not null default false,
        edited TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        created TIMESTAMP DEFAULT NOW(),
        PRIMARY KEY (user_id)
        );
    
    CREATE TABLE IF NOT EXISTS Courses (
        id int(11) AUTO_INCREMENT,
        author int(11),
        title varchar(255) not null,
        overview varchar(255) not null,
        highlights varchar(255) not null,
        fee varchar(255) not null,
        faq varchar(255) not null,
        requirements varchar(255) not null,
        modules varchar(255) not null,
        funding varchar(255) not null,
        edited TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        created TIMESTAMP DEFAULT NOW(),
        PRIMARY KEY (id),
        FOREIGN KEY (author) REFERENCES Users(user_id) ON DELETE CASCADE
        );";

    private $tbadmin = "";

    // connect function
    public function connect()
    {
        $this->conn = null;
        try {
            
            $this->conn = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->dbname, $this->user, $this->pass);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->conn->exec($this->tbs);
        } catch (PDOException $e) {
            echo "connection error" . $e->getMessage();
        }


        return $this->conn;
    }


}

?>