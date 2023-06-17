<?php
    function route($method, $urlList, $requestData){
        global $Link, $UploadDir;
        switch ($method) {
            case 'GET':

                break;
            case 'POST':
                switch($urlList[1]){
                    case 'postupload':
                        $file = $_FILES['input'];

                        if($file['type'] == 'image/jpeg' || $file['type'] == 'image/plain'){

                            $pathToUpload = $UploadDir . "/upload_". time() . "_" . basename($file['name']);

                            move_uploaded_file($file['tmp_name'], $pathToUpload);

                            $fileInsertsResult = $Link->query("INSERT INTO uploads(path) VALUES('$pathToUpload')");

                            if(!$fileInsertsResult){
                                setHTTPStatus("500","DB save failed");
                                return;
                            }else{
                                setHTTPStatus("200",null);
                                echo json_encode(["path" => $pathToUpload]);
                            }
                        }else{
                            setHTTPStatus("403","wrong file type");
                        }
                        break;
                    case 'json':
                        

                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
    }
}
?>