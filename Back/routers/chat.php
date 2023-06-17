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
                    $user = $Link->query("SELECT * from chat Where chatUsers='$userID'");
                    while($row = $user->fetch_array(MYSQLI_ASSOC)){
                        $chatToken = $row['ChatToken'];
                        $userChatToken = $Link->query("SELECT * from chat Where ChatToken='$chatToken'");
                        while($roww = $userChatToken->fetch_array(MYSQLI_ASSOC)){
                            // echo json_encode($roww['ChatUsers']);
                            // echo json_encode($userID);
                            if($roww['ChatUsers'] != $userID){
                                $chatUserId = $roww['ChatUsers'];
                                $users = $Link->query("SELECT * from users where id='$chatUserId'")->fetch_assoc();
                                $userAvatarPath = $Link->query("SELECT * from useravatar Where userid='$chatUserId'")->fetch_assoc();
                                // while($roww = $users->fetch_array(MYSQLI_ASSOC)){

                                // }
                                
                                // echo json_encode($roww);
                                //$usersChat[] = ($roww);
                                $usersChat[] = (['chatId' => $roww['id'], 'chatToken' => $roww['ChatToken'], 'userId' => $users['id'],
                            'userName' => $users['name'], 'userSecondName' => $users['secondName'], 'login' => $users['login'],
                            'userAvatarPath' => $userAvatarPath['path']]);
                            }
                            
                        }
                        
                        //$usersChat[] = ($row) ;
                        
                    }
                     echo json_encode($usersChat);
                    // echo json_encode($user);

                }else{
                    echo "Error";
                }

                break;
            case 'POST':

                $token = substr(getallheaders()['Authorization'], 7);
                $userFromToken = $Link->query("SELECT userID from tokens Where value='$token'")->fetch_assoc();
                if(!is_null($userFromToken)){
                    $userID = $userFromToken['userID'];
                    $secondUserID = $requestData->parameters['UserID'];
                    $chatRoom = $userID . $secondUserID;
                    $chatRoomToken = hash("sha1", $chatRoom);
                    $chatFromRoomTokenFirstAccess = $Link->query("SELECT * from chat Where ChatUsers='$secondUserID'")->fetch_assoc();
                    $chatFromRoomTokenSecondAccess = $Link->query("SELECT * from chat Where ChatUsers='$userID'")->fetch_assoc();
                    
                    // echo "1First:";
                    // echo json_encode($chatFromRoomTokenFirstAccess);
                    // echo "2Second:";
                    // echo json_encode($chatFromRoomTokenSecondAccess);

                    if(is_null($chatFromRoomTokenFirstAccess) || is_null($chatFromRoomTokenSecondAccess)){
                        $chatFirstUser = $Link->query("INSERT INTO `chat` (`id`, `ChatToken`, `ChatUsers`) VALUES (NULL, '$chatRoomToken', '$userID')");
                        $chatSecondUser = $Link->query("INSERT INTO `chat` (`id`, `ChatToken`, `ChatUsers`) VALUES (NULL, '$chatRoomToken', '$secondUserID')");
                        echo json_encode($chatRoomToken);
                        // echo "First:";
                        // echo json_encode($chatFromRoomTokenFirstAccess);
                        // echo "Second:";
                        // echo json_encode($chatFromRoomTokenSecondAccess);
                        echo "Creating";
                    }else{
                        // echo "First:";
                        // echo json_encode($chatFromRoomTokenFirstAccess);
                        // echo "Second:";
                        // echo json_encode($chatFromRoomTokenSecondAccess);
                        // echo "Created";
                        echo json_encode($chatRoomToken);

                    }
                    //echo json_encode($chatFromRoomTokenFirstAccess);
                    //echo json_encode($chatFromRoomTokenSecondAccess);
                    // if()
                    // $chatUsers;
                    // while($row = $chatFromRoomToken->fetch_array(MYSQLI_ASSOC)){
                    //     $chatUsers = $row['ChatUsers'];
                    //     if(!($chatUsers == $userID || $chatUsers == $secondUserID)){
                            //$chatFirstUser = $Link->query("INSERT INTO `chat` (`id`, `ChatToken`, `ChatUsers`) VALUES (NULL, '$chatRoomToken', '$userID')");
                            //$chatSecondUser = $Link->query("INSERT INTO `chat` (`id`, `ChatToken`, `ChatUsers`) VALUES (NULL, '$chatRoomToken', '$secondUserID')");
                    //         echo "Create";
                    //     }else{
                    //         echo "created";
                    //     }
                    // }
                    // echo json_encode($chatUsers);

                    // if(true){
                         //$chatFirstUser = $Link->query("INSERT INTO `chat` (`id`, `ChatToken`, `ChatUsers`) VALUES (NULL, '$chatRoomToken', '$userID')");
                         //$chatSecondUser = $Link->query("INSERT INTO `chat` (`id`, `ChatToken`, `ChatUsers`) VALUES (NULL, '$chatRoomToken', '$secondUserID')");
                    // }else{
                    //     echo "Bad";
                    // }
                }else{
                    echo "Errroesdfasdf";
                }

                // $password = hash("sha1", $requestData->body->password);
                // $name = $requestData->body->name;
                // $secondName = $requestData->body->secondName;
                // $login = $requestData->body->login;
                // $email = $requestData->body->email;
                // $status = $requestData->body->status;

                break;
            
            default:
                break;
        }
    }

?>