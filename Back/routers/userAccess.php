<?php
    function route($method, $urlList, $requestData){
        $link = mysqli_connect("127.0.0.1", "backend_demo_1", "qwerty","backend_demo_1");
        switch ($method) {
            case 'GET':
                $token = substr(getallheaders()['Authorization'], 7);

                $userFromToken = $link->query("SELECT userID from tokens Where value='$token'")->fetch_assoc();

                if(!is_null($userFromToken)){
                    $userID = $userFromToken['userID'];
                    $user = $link->query("SELECT * from users Where id='$userID'")->fetch_assoc();
                    echo json_encode($user);
                    // echo json_encode(['UserAccess' => 'true']);

                }else{
                    echo "Error";
                }
                
                break;
            case 'POST':
                echo "Indefinet";
                break;
            
            default:
                break;
        }
    }

?>