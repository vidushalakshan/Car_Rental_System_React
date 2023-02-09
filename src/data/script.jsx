import $ from "jquery";

$("#admin").css("display", "none");
$("#driver").css("display", "none");
$("#cars").css("display", "none");
$("#customer").css("display", "none");

$("#adminLink").click(function () {
  $("#dash").css("display", "none");
  $("#admin").css("display", "block");
  $("#driver").css("display", "none");
  $("#cars").css("display", "none");
  $("#customer").css("display", "none");
});

$("#dashLink").click(function () {
  $("#dash").css("display", "block");
  $("#admin").css("display", "none");
  $("#driver").css("display", "none");
  $("#cars").css("display", "none");
  $("#customer").css("display", "none");
});

$("#driverLink").click(function () {
  $("#dash").css("display", "none");
  $("#admin").css("display", "none");
  $("#driver").css("display", "block");
  $("#cars").css("display", "none");
  $("#customer").css("display", "none");
});

$("#carLink").click(function () {
  $("#dash").css("display", "none");
  $("#admin").css("display", "none");
  $("#driver").css("display", "none");
  $("#cars").css("display", "block");
  $("#customer").css("display", "none");
});

$("#customerLink").click(function() {
  $("#dash").css("display", "none");
  $("#admin").css("display", "none");
  $("#driver").css("display", "none");
  $("#cars").css("display", "none");
  $("#customer").css("display", "block");
});


