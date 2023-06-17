<?php
    

    function route($method, $urlList, $requestData){
        if($method == "POST"){
            global $Link;
            switch($urlList[1]){
                case 'login':
                    $login = $requestData->body->login;
                    $pass = hash("sha1", $requestData->body->password);

                    $user = $Link->query("SELECT id,UserAccess from users Where login='$login' AND password='$pass'")->fetch_assoc();
                    $Acesss = $Link->query("UPDATE users SET UserAccess='true'");
                    if(!is_null($user)){
                        $token = bin2hex(random_bytes(16));
                        $userID = $user['id'];
                        $userAccess = $user['UserAccess'];
                        $tokenInsertsResult = $Link->query("INSERT INTO tokens(value,userID) VALUES('$token','$userID')");

                        if(!$tokenInsertsResult){
                            //400
                            echo json_encode($Link->error);
                        }else{
                            echo json_encode(['token' => $token, 'UserAccess' => $userAccess, "login" => $login,"userID" => $userID]);
                        }

                    }else{
                        echo "Error";
                    }

                    // echo json_encode($userID);
                    break;
                case 'logout':
                        //TOOOO
                    break;
                default:
                    setHTTPStatus("404","there is no such path as 'auth/$urlList[1]'");
                    break;
        }
        }else{
            setHTTPStatus("400","You can only use POST to 'auth/*'");
        }
    }

?>