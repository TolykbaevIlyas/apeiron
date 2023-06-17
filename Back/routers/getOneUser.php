<?php
    include_once 'user/user_helper.php';
    
    function route($method, $urlList, $requestData){
        global $Link;
        switch ($method) {
            case 'GET':
                $token = substr(getallheaders()['Authorization'], 7);
                $userFromToken = $Link->query("SELECT userID from tokens Where value='$token'")->fetch_assoc();
                if(!is_null($userFromToken)){

                    $userID = $requestData->parameters['userId'];
                    $users = $Link->query("SELECT * from users where id='$userID'")->fetch_assoc();
                    // while($row = $users->fetch_array(MYSQLI_ASSOC)){
                    //      $usersAll[] = (['id' => $row['id'], 'name' => $row['name'], 'secondName' => $row['secondName'], 'login' => $row['login'], 'email' => $row['email'], 'status' => $row['status']]);
                    //  }
                    echo json_encode($users);
                    // echo json_encode($user);

                }else{
                    echo "Error";
                    echo json_encode($requestData);
                    echo json_encode($token);
                }

                break;
            case 'POST':
                break;
            
            default:
                break;
        }
    }
?>