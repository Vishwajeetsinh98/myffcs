$(document).ready(function(){
  $('.timetable-menu-list').slideUp(0);
  $(".timetable-title-panel .submit-button").click(function(){
    $(".timetable-title-panel").hide();
    $(".timetable-menu-list").slideDown("slow");
  });
  $(".close").click(function(){
    $(".timetable-menu-list").slideUp("slow");
    $(".timetable-title-panel").show();
  });
});
