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
    if (isset($_POST['name'])) {
        $user->name = $_POST['name'];
    } else
        echo "name is requied";
    if (isset($_POST['email']))
        $user->email = $_POST['email'];
    else
        echo "email is requied";
    if (isset($_POST['password'])) {
        $user->password = $_POST['password'];
    } else
        echo "password is required";

        

    $user->is_admin = 0;

    if (isset($_POST['is_admin'])) {
        $user->is_admin = $_POST['is_admin'];
        echo $_POST['is_admin'];
        echo $user->is_admin;
    }

    $res = $user->checkuser();
    $row = $res->fetch(PDO::FETCH_ASSOC);
    if (!$row) {
        $res = $user->createuser();
        $data = $user->checkuser();
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
            http_response_code(404);
            echo json_encode(
                array("message" => "No record found.")
            );
        }


    } else
        echo "user already exists with this email";
}



if ($method == 'PUT') {
    echo "THIS IS A PUT REQUEST";
    parse_str(file_get_contents("php://input"), $_PUT);

}



if ($method == 'DELETE') {
    echo "THIS IS A DELETE REQUEST";
}

?>