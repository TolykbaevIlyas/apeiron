<?php

    function validatePassword($pass){
        if(validateStringNotLess($pass, 8)){
            return true;
        }
        return false;
    }
?>