<?php
    function route($method, $urlList, $requestData){
        global $Link, $UploadDir;
        switch ($method) {
            case 'GET':
                $token = substr(getallheaders()['Authorization'], 7);

                $userFromToken = $Link->query("SELECT userID from tokens Where value='$token'")->fetch_assoc();
                
                
                if(!is_null($userFromToken)){
                    //echo json_encode($requestData);
                    $userID = $userFromToken['userID'];
                    $posts = $Link->query("SELECT * from posts");
                    while($row = $posts->fetch_array(MYSQLI_ASSOC)){
                        $fileId = $row['image'];
                        $userId = $row['userID'];
                        $postsImg = $Link->query("SELECT * from postsimg Where id='$fileId'")->fetch_assoc();
                        // echo json_encode($userId);
                        // echo json_encode($postsImg);
                        $userInfo = $Link->query("SELECT login from users where id='$userId'")->fetch_assoc();
                        $userAvatar = $Link->query("SELECT path FROM `useravatar` where userID='$userId'")->fetch_assoc();

                        $post[] = (['id' => $row['id'], 'userId' => $row['userID'], 'date' => $row['date'], 'message' => $row['message'], 'image' => $row['image'], 'countOfLikes' => $row['countOfLikes'],
                    'countOfComments' => $row['countOfComments'], 'postImagePath'=> $postsImg['path'], 'userLogin' => $userInfo['login'], 'userAvatar' => $userAvatar['path']]);
                    }
                    echo json_encode($post);
                    //echo json_encode($userInfo);
                    
                    // $filePath = $posts['image'];
                    // $postsImg = $Link->query("SELECT * from postsimg Where id='$filePath'")->fetch_assoc();
                    // echo json_encode($postsImg);

                }else{
                    echo "Error";
                }
                break;
            case 'POST':
                $token = substr(getallheaders()['Authorization'], 7);
                $userFromToken = $Link->query("SELECT userID from tokens Where value='$token'")->fetch_assoc();

                if(!is_null($userFromToken)){
                    $userID = $requestData->body->userId;
                    $posts = $Link->query("SELECT * from posts Where userid='$userID'");
                    while($row = $posts->fetch_array(MYSQLI_ASSOC)){
                        $fileId = $row['image'];
                        $postsImg = $Link->query("SELECT * from postsimg Where id='$fileId'")->fetch_assoc();

                        $post[] = (['id' => $row['id'], 'userId' => $row['userID'], 'date' => $row['date'], 'message' => $row['message'], 'image' => $row['image'], 'countOfLikes' => $row['countOfLikes'],
                    'countOfComments' => $row['countOfComments'], 'imageId' => $postsImg['id'], 'imagePath'=> $postsImg['path']]);
                    }
                    echo json_encode($post);
                }else{
                    echo "Error";
                }
                default:
                    break;
            break;
            
        }
    }
?>