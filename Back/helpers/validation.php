<?php
    function validateStringNotLess($str = '', $length = 5){
        if(strlen($str) >= $length){
            return true;
        }else{
           return false; 
        }
    }


?>