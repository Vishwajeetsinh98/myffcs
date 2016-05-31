$(document).ready(function(){
  $('.timetable-menu-list').slideUp(0);
  $('.timetable-results').slideUp(0);
  $(".timetable-title-panel .submit-button").click(function(){
    $(".timetable-menu-list").slideDown(400);
  });
  $(".close").click(function(){
    $(".timetable-menu-list").slideUp(400);

    $(".timetable-title-panel").show();

  });
  $('.timetable-results-trigger').click(function(){
    $('.timetable-menu-list').slideUp("slow",function(){
      $('.timetable-results').slideDown("slow");
    });
  });

  var windowWidth = $(window).width();
  var windowHeight = $(window).height();
  $(".custom-card-action").on("click",function(e){
    if($(this).hasClass("front")){
      $(this).closest($('.custom-card')).find($(".custom-card-front")).hide();
      $(this).closest($('.custom-card')).find($('.custom-card-edit')).fadeIn("slow");
      $(this).html('<i class="fa fa-times" aria-hidden="true"></i>');
      $(this).addClass("edit");
      $(this).removeClass("front");
      if(windowWidth<=600){
        $(this).closest($('.custom-card')).width($(this).closest($('.custom-card')).find($('.custom-card-edit')).width());
      }
    } else{
      $(this).closest($('.custom-card')).find($(".custom-card-edit")).hide();
      $(this).closest($('.custom-card')).find($('.custom-card-front')).fadeIn("slow");
      $(this).html('<i class="fa fa-ellipsis-v" aria-hidden="true"></i>');
      $(this).addClass("front");
      $(this).removeClass("edit");
    }
  });
  $(".custom-card-action-active").on("click",function(e){
    $(".custom-card-edit").hide();
    $(".custom-card-front").fadeIn("slow");
    $(this).html('<i class="fa fa-ellipsis-v" aria-hidden="true"></i>');
    $(this).addClass("custom-card-action-inactive",function(){
      $(this).removeClass("custom-card-action-active");
    });
  });


  /*Responsiveness*/
  /*var Window_ht=$(window).height();
  var Window_wt=$(window).width();
  if(Window_wt<1000){
      $(".timetable").css("width",Window_wt/2.5);
  }
  else if(Window_wt>1000 && Window_wt<1100)
  {
    $(".timetable").css("width",Window_wt/2);
  }
  else {
      $(".timetable").css("width","96%");
  }
});*/
});
/*$(window).resize(function()
{
  /*Responsiveness*/
  /*var Window_ht=$(window).height();
  var Window_wt=$(window).width();
  if(Window_wt<1000){
      $(".timetable").css("width",Window_wt/2.5);
  }
  else if(Window_wt>1000 && Window_wt<1100)
  {
    $(".timetable").css("width",Window_wt/2);
  }
  else {
      $(".timetable").css("width","96%");
  }
});*/
