<?php


header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../config/Database.php';
include_once '../../model/User.php';

// get the method details
$method = $_SERVER['REQUEST_METHOD'];

$status = "unable to connect";


// initiate database 
$database = new Database();

$db = $database->connect();

$user = new User($db);

if ($method == 'GET') {

}

if ($method == 'POST') {
    if (isset($_POST['username']) && isset($_POST['password'])) {
        $user->password = $_POST['password'];
        $user->email = $_POST['username'];

        $data = $user->loginuser();      
        $itemCount = $data->rowCount();
    if ($itemCount > 0) {
        $userdata = array();
        while ($row = $data->fetch(PDO::FETCH_ASSOC)) {
            extract($row);
            $userdata = array(
                "user_id" => $user_id,
                "name" => $name,
                "email" => $email,
                'is_admin' => $is_admin
            );
        }
        echo json_encode($userdata);
    } else {
        // http_response_code(404);
        echo json_encode(
            array("message" => "No record found.")
        );
    }
    } else {
        echo "username and password is required";
    }
    
}

?>