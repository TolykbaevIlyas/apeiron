<?php
    include_once 'user/user_helper.php';
    
    function route($method, $urlList, $requestData){
        global $Link;
        switch ($method) {
            case 'GET':
                $token = substr(getallheaders()['Authorization'], 7);

                $userFromToken = $Link->query("SELECT userID from tokens Where value='$token'")->fetch_assoc();

                if(!is_null($userFromToken)){
                    $userID = $userFromToken['userID'];
                    $user = $Link->query("SELECT * from users Where id='$userID'")->fetch_assoc();
                    echo json_encode($user);

                }else{
                    echo "Error";
                }

                break;
            case 'POST':
                $login = $requestData->body->login;
                $isValidated = true;
                $validationErrors=[];

                if(!validatePassword($requestData->body->password)){
                    $isValidated = false;
                    $validationErrors[] = ["Password","Password is less then 8 characters"];
                }

                $password = hash("sha1", $requestData->body->password);
                $name = $requestData->body->name;
                $secondName = $requestData->body->secondName;
                $login = $requestData->body->login;
                $email = $requestData->body->email;
                $status = $requestData->body->status;

                if(!validateStringNotLess($login, 3)){
                    $isValidated = false;
                    $validationErrors[] = ["login","Login is less then 3 characters"];
                }

                if(!$isValidated){
                    $validationMessage = "";
                    foreach($validationErrors as $err){
                        $validationMessage .= "$err[0]: $err[1] \r\n";
                    }
                    setHTTPStatus("403",$validationMessage);
                    return;
                }

                $userInsertsResult = $Link->query("INSERT INTO users(name,secondName,login,email,password,status,userAccess) VALUES('$name','$secondName','$login','$email','$password','$status','true')");

                $user = $Link->query("SELECT * from users Where login='$login'")->fetch_assoc();

                echo json_encode($user['id']);

                if(!$userInsertsResult){
                    if($Link->errno == 1062){
                        setHTTPStatus("409","Such '$login' login is taken");
                        return;
                    }
                }else{
                    setHTTPStatus("200","User '$login' was succesfully created");
                }
                
                break;
            
            default:
                break;
        }
    }

?>