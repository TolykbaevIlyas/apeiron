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
                    $users = $Link->query("SELECT * from users");
                    while($row = $users->fetch_array(MYSQLI_ASSOC)){
                        $chatUserId = $row['id'];
                        $user = $Link->query("SELECT * from users where id='$chatUserId'")->fetch_assoc();
                        $userAvatarPath = $Link->query("SELECT * from useravatar Where userid='$chatUserId'")->fetch_assoc();
                        //echo json_encode($row);
                    //     $fileId = $row['image'];
                    //     $postsImg = $Link->query("SELECT * from postsimg Where id='$fileId'")->fetch_assoc();

                         $usersAll[] = (['id' => $row['id'], 'name' => $row['name'], 'secondName' => $row['secondName'], 'login' => $row['login'], 'email' => $row['email'], 'status' => $row['status'],'userAvatarPath' => $userAvatarPath['path']]);
                     }
                    echo json_encode($usersAll);
                    // echo json_encode($user);

                }else{
                    echo "Error";
                }

                break;
            case 'POST':
                break;
            
            default:
                break;
        }
    }
?>