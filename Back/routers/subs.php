<?php
    function route($method, $urlList, $requestData){
        global $Link, $UploadDir;
        switch ($method) {
            case 'GET':
                $token = substr(getallheaders()['Authorization'], 7);

                $userFromToken = $Link->query("SELECT userID from tokens Where value='$token'")->fetch_assoc();
                if(!is_null($userFromToken)){   

                }else{
                    echo "Error";
                }
                break;
            case 'POST':
                $token = substr(getallheaders()['Authorization'], 7);
                $userFromToken = $Link->query("SELECT userID from tokens Where value='$token'")->fetch_assoc();

                if(!is_null($userFromToken)){
                    
                //     $message = $requestData->body->message;
                //     $chatToken = $requestData->parameters['ChatToken'];
                //     $userChatToken = $Link->query("SELECT * from chat Where ChatToken='$chatToken'")->fetch_assoc();
                //     $chatTokenID = $userChatToken['id'];
                //     $userID = $userFromToken['userID'];
                //    //$messages = $Link->query("SELECT * from chatmessages Where RoomID='$chatTokenID'");
                //     $chatSecondUser = $Link->query("INSERT INTO `chatmessages` (`id`, `RoomID`, `userID`, `message`) VALUES (NULL, '$chatTokenID', '$userID', '$message');");
                //     echo json_encode($message);
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