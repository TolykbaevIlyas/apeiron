<?php
    /* 
        В данном файле собраны вспомогательные функций для формирования HTTP-статусов
    */

    function setHTTPStatus($status= "200", $message = null){
        switch($status){
            default:
            case "200":
                $status = "HTTP/1.0 200 OK";
                break;
            case "400":
                $status = "HTTP/1.0 400 Bad request";
                break;
            case "401":
                $status = "HTTP/1.0 401 ";
                break;
            case "403":
                $status = "HTTP/1.0 404 Forbidden";
                break;
            case "404":
                $status = "HTTP/1.0 404 Not found";
                break;
            case "409":
                $status = "HTTP/1.0 409 Conflick";
                break;
            case "500":
                $status = "HTTP/1.0 500 Internal Server Error";
                break;
        }
        header($status);
        if(!is_null($message)){
            echo json_encode(['message' => $message]);
        }
    }

?>