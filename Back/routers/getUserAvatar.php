<?php
    function route($method, $urlList, $requestData){
        global $Link, $UploadDir;
        switch ($method) {
            case 'GET':
                $token = substr(getallheaders()['Authorization'], 7);

                $userFromToken = $Link->query("SELECT userID from tokens Where value='$token'")->fetch_assoc();
                if(!is_null($userFromToken)){
                    $userID = $requestData->parameters['userId'];
                    $posts = $Link->query("SELECT * from useravatar Where userid='$userID'")->fetch_assoc();
                    $userAvatar = $posts['path'];
                    echo json_encode($userAvatar);
                }else{
                    echo "Error";
                }
                break;
            case 'POST':
                // $file = $_FILES['Avatar'];

                // $pathToUpload = $UploadDir . "/userAvatarImg". time() . "_" . basename($file['name']);

                // move_uploaded_file($file['tmp_name'], $pathToUpload);

                // $fileInsertsResult = $Link->query("INSERT INTO useravatar(path,userID) VALUES('$pathToUpload','19')");
                

                // if(!$fileInsertsResult){
                //     setHTTPStatus("500","DB save failed");
                //     return;
                // }else{
                //     setHTTPStatus("200",null);
                //     echo json_encode(["path" => $pathToUpload]);
                // } 
                default:
                    break;
            break;
        
        }
    }
?>
