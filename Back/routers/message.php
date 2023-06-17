<?php
    function route($method, $urlList, $requestData){
        global $Link, $UploadDir;
        switch ($method) {
            case 'GET':
                $token = substr(getallheaders()['Authorization'], 7);

                $userFromToken = $Link->query("SELECT userID from tokens Where value='$token'")->fetch_assoc();
                if(!is_null($userFromToken)){
                    $chatToken = $requestData->parameters['ChatToken'];
                    $userChatToken = $Link->query("SELECT * from chat Where ChatToken='$chatToken'")->fetch_assoc();
                    $chatTokenID = $userChatToken['id'];
                    //echo json_encode($chatTokenID);
                    $messages = $Link->query("SELECT * from chatmessages Where RoomID='$chatTokenID'");
                    //echo json_encode($messages);
                    while($row = $messages->fetch_array(MYSQLI_ASSOC)){
                        //echo json_encode($row);
                        $userID = $row['userID'];
                        $users = $Link->query("SELECT * from users where id='$userID'")->fetch_assoc();
                        $userAvatarPath = $Link->query("SELECT * from useravatar Where userid='$userID'")->fetch_assoc();

                        $usersChat[] = (['id' => $row['id'], 'userId' => $users['id'],
                        'userName' => $users['name'], 'userSecondName' => $users['secondName'], 'login' => $users['login'],
                        'userAvatarPath' => $userAvatarPath['path'], 'message' => $row['message'], 'yourId' => $userFromToken['userID']]);
                    }
                        echo json_encode($usersChat);
                    

                }else{
                    echo "Error";
                }
                break;
            case 'POST':
                $token = substr(getallheaders()['Authorization'], 7);
                $userFromToken = $Link->query("SELECT userID from tokens Where value='$token'")->fetch_assoc();

                if(!is_null($userFromToken)){
                    $message = $requestData->body->message;
                    $chatToken = $requestData->parameters['ChatToken'];
                    $userChatToken = $Link->query("SELECT * from chat Where ChatToken='$chatToken'")->fetch_assoc();
                    $chatTokenID = $userChatToken['id'];
                    $userID = $userFromToken['userID'];
                   //$messages = $Link->query("SELECT * from chatmessages Where RoomID='$chatTokenID'");
                    $chatSecondUser = $Link->query("INSERT INTO `chatmessages` (`id`, `RoomID`, `userID`, `message`) VALUES (NULL, '$chatTokenID', '$userID', '$message');");
                    echo json_encode($message);
                    // $userID = $userFromToken['userID'];
                    // $file = $_FILES['PostImage'];

                    // $pathToUpload = $UploadDir . "/upload_". time() . "_" . basename($file['name']);

                    // move_uploaded_file($file['tmp_name'], $pathToUpload);

                    // $fileInsertsResult = $Link->query("INSERT INTO postsimg(path,userID) VALUES('$pathToUpload','$userID')");
                    

                    // if(!$fileInsertsResult){
                    //     setHTTPStatus("500","DB save failed");
                    //     return;
                    // }else{
                    //     setHTTPStatus("200",null);
                    //     echo json_encode(["path" => $pathToUpload]);
                    // }
                    
                }else{
                    echo "Error";
                }
                break;
            break;
            
        }
    }

?>