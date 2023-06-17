<?php
    function route($method, $urlList, $requestData){
        global $Link, $UploadDir;
        switch ($method) {
            case 'GET':
                $token = substr(getallheaders()['Authorization'], 7);

                $userFromToken = $Link->query("SELECT userID from tokens Where value='$token'")->fetch_assoc();

                if(!is_null($userFromToken)){
                    $userID = $userFromToken['userID'];
                    $posts = $Link->query("SELECT * from posts Where userid='$userID'");
                    while($row = $posts->fetch_array(MYSQLI_ASSOC)){
                        $fileId = $row['image'];
                        $postsImg = $Link->query("SELECT * from postsimg Where id='$fileId'")->fetch_assoc();

                        $post[] = (['id' => $row['id'], 'userId' => $row['userID'], 'date' => $row['date'], 'message' => $row['message'], 'image' => $row['image'], 'countOfLikes' => $row['countOfLikes'],
                    'countOfComments' => $row['countOfComments'], 'imageId' => $postsImg['id'], 'imagePath'=> $postsImg['path']]);
                    }
                    echo json_encode($post);
                    
                    // $filePath = $posts['image'];
                    // $postsImg = $Link->query("SELECT * from postsimg Where id='$filePath'")->fetch_assoc();
                    // echo json_encode($postsImg);

                }else{
                    echo "Error";
                }
                break;
            case 'POST':
                switch($urlList[1]){
                    case 'postUploadImg':
                        $token = substr(getallheaders()['Authorization'], 7);
                        $userFromToken = $Link->query("SELECT userID from tokens Where value='$token'")->fetch_assoc();

                        if(!is_null($userFromToken)){
                            $userID = $userFromToken['userID'];
                            $file = $_FILES['PostImage'];

                            $pathToUpload = $UploadDir . "/upload_". time() . "_" . basename($file['name']);

                            move_uploaded_file($file['tmp_name'], $pathToUpload);

                            $fileInsertsResult = $Link->query("INSERT INTO postsimg(path,userID) VALUES('$pathToUpload','$userID')");
                            

                            if(!$fileInsertsResult){
                                setHTTPStatus("500","DB save failed");
                                return;
                            }else{
                                setHTTPStatus("200",null);
                                echo json_encode(["path" => $pathToUpload]);
                            }
                            
                        }else{
                            echo "Error";
                        }
                        break;

                    case 'postUploadText':
                        $token = substr(getallheaders()['Authorization'], 7);
                        $userFromToken = $Link->query("SELECT userID from tokens Where value='$token'")->fetch_assoc();
                        if(!is_null($userFromToken)){
                            $userID = $userFromToken['userID'];
                            $message = $requestData->body->message;
                            $countOfLikes = $requestData->body->countOfLikes;
                            $countOfCommets = $requestData->body->countOfComments;
                            $file = $requestData->body->path;
                            $imageFromPosts = $Link->query("SELECT id from postsimg Where path='$file'")->fetch_assoc();
                            $imageId = $imageFromPosts['id'];

                            if(!is_null($message)){
                                $postInsertsResult = $Link->query("INSERT INTO `posts` (`id`, `userID`, `date`, `message`, `image`, `countOfLikes`, `countOfComments`) VALUES (NULL, '$userID', NULL, '$message', '$imageId', '0', '0')");
                            }else{
                                setHTTPStatus("500","DB save filed");
                            }

                            if(!$postInsertsResult){
                                //400
                                echo "BAD";

                            }else{
                                setHTTPStatus("200",null);
                                echo json_encode($requestData);
                            }
                        }else{
                            echo "Error";
                        }
                    default:
                        break;
            break;
            
        }
    }
    }
?>