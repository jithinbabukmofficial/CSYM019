<?php

class Course
{
    // Connection
    private $conn;
    // Table
    private $db_table = "courses";
    // Columns
    public $id;
    public $title;
    public $overview;
    public $highlights;
    public $fee;
    public $faq;
    public $requirements;
    public $funding;
    public $created;
    public $modules;


    // Db connection
    public function __construct($db)
    {
        $this->conn = $db;
    }


    // GET ALL
    public function getCourses($id = 0)
    {

        $sqlQuery = "SELECT * from courses";

        $stmt = $this->conn->prepare($sqlQuery);
        $stmt->execute();
        return $stmt;
    }


    // CREATE
    public function createCourse()
    {
        $this->title = htmlspecialchars(strip_tags($this->title));
        $this->overview = htmlspecialchars(strip_tags($this->overview));
        $this->fee = htmlspecialchars(strip_tags($this->fee));
        $this->faq = htmlspecialchars(strip_tags($this->faq));
        $this->requirements = htmlspecialchars(strip_tags($this->requirements));
        $this->highlights = htmlspecialchars(strip_tags($this->highlights));
        $this->funding = htmlspecialchars(strip_tags($this->funding));

        $sqlQuery = "insert into " . $this->db_table . "(title,overview,fee,faq,requirements,highlights,funding,modules) values('$this->title','$this->overview','$this->fee','$this->faq','$this->requirements','$this->highlights','$this->funding','$this->modules')";

        $stmt = $this->conn->prepare($sqlQuery);

        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }

    public function deletereview($id = 0)
    {
        $query = "DELETE FROM Courses where id = '$id'";

        $stmt = $this->conn->prepare($query);

        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }



}

?>