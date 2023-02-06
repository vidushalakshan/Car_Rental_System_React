import $ from 'jquery';

$("#admin").css("display", "none");

$("#adminLink").click(function () {
    $("#dash").css("display", "none");
    $("#admin").css("display", "block");
});

$("#dashLink").click(function () {
    $("#dash").css("display", "block");
    $("#admin").css("display", "none");
});
