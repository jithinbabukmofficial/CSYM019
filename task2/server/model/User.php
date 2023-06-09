<?php 
    class User {
    private $conn;
    // Table
    private $db_table = "users";
    // Columns
    public $id;
    public $password;
    public $is_admin;
    public $email;
    public $name;
    public $created;
    public $user_id;
    // Db connection
    public function __construct($db)
    {
        $this->conn = $db;
    }


    // create user
    public function createuser(){
        
            $this->name=htmlspecialchars(strip_tags($this->name));
            $this->email=htmlspecialchars(strip_tags($this->email));
            $this->password=md5(htmlspecialchars(strip_tags($this->password)));

            $sqlQuery = "insert into ". $this->db_table ."(name,email,password,is_admin) values('$this->name','$this->email','$this->password',is_admin='$this->is_admin')";
        
            $stmt = $this->conn->prepare($sqlQuery);
            
            $stmt->execute();
            return $stmt;

    }

    // update user
    public function updateuser(){
        
        $this->name=htmlspecialchars(strip_tags($this->name));
        $this->password=md5(htmlspecialchars(strip_tags($this->password)));

        $sqlQuery = "UPDATE ". $this->db_table ." SET  name = '$this->name',password = '$this->password' where user_id = '$this->user_id' ";
    
        $stmt = $this->conn->prepare($sqlQuery);
        
        $stmt->execute();
        return $stmt;

}


    public function checkuser() {
        $this->email=htmlspecialchars(strip_tags($this->email));
        $sqlQuery = "select * from ". $this->db_table ." where email = '".$this->email."'";
        $stmt = $this->conn->prepare($sqlQuery);

        $stmt->execute();
        return $stmt;
    }

    public function loginuser() {
        $this->email=htmlspecialchars(strip_tags($this->email));
        $this->password=md5(htmlspecialchars(strip_tags($this->password)));
        $sqlQuery = "select * from ". $this->db_table ." where email = '".$this->email."' AND password = '".$this->password."'";
        $stmt = $this->conn->prepare($sqlQuery);

        $stmt->execute();
        return $stmt;
    }

    }

?>