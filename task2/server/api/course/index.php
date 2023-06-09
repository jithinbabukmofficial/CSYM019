<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

include_once '../../config/Database.php';
include_once '../../model/Course.php';

// get the method details
$method = $_SERVER['REQUEST_METHOD'];

$status = "unable to connect";


// initiate database 
$database = new Database();

$db = $database->connect();

$course = new Course($db);

if ($db) {
    $status = "connected to db";
}

if ($method == 'GET') {

    $data = $course->getCourses();
    $itemCount = $data->rowCount();

    if ($itemCount > 0) {
        $courses = array();
        $courses['data'] = array();
        while ($row = $data->fetch(PDO::FETCH_ASSOC)) {
            extract($row);
            $e = array(
                "id" => $id,
                "title" => $title,
                "overview" => $overview,
                "highlights" => $highlights,
                "fee" => $fee,
                "faq" => $faq,
                "requirements" => $requirements,
                "funding" => $funding,
                "created" => $created,
                "modules" => $modules
            );
            array_push($courses['data'], $e);
        }
        echo json_encode($courses);
    } else {
        http_response_code(404);
        echo "no_records";
    }
}
if ($method == 'POST') {

    
    

    $course->title = $_POST['title'];
    $course->overview = $_POST['overview'];
    $course->highlights = $_POST['highlights'];
    $course->fee = $_POST['fee'];
    $course->faq = $_POST['faq'];
    $course->requirements = $_POST['requirements'];
    $course->funding = $_POST['funding'];
    $course->modules = $_POST['modules'];

    echo json_encode($_POST['highlights']);

    $res = $course->createCourse();


    if ($res) {
        $data = $course->getCourses();
        $itemCount = $data->rowCount();

        if ($itemCount > 0) {
            $courses = array();
            $courses['data'] = array();
            while ($row = $data->fetch(PDO::FETCH_ASSOC)) {
                extract($row);
                $e = array(
                    "id" => $id,
                    "title" => $title,
                    "overview" => $overview,
                    "highlights" => $highlights,
                    "fee" => $fee,
                    "faq" => $faq,
                    "requirements" => $requirements,
                    "funding" => $funding,
                    "created" => $created,
                    "modules" => $modules
                );
                array_push($courses['data'], $e);
            }
            echo json_encode($courses);
        } else {
            http_response_code(404);
            echo "no_records";
        }
    }

}
if ($method == 'PUT') {
    echo "THIS IS A PUT REQUEST";
}

?>