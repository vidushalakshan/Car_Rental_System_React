import React from 'react';
import $ from 'jquery';

$("#admin").css("display", "none");

$("#adminLink").bind('click', function(){
    $("#dash").css("display", "none");
    $("#admin").css("display", "block");
});