


$(".sidebar").load("../sidebar.html", function () {
  
    $(".sidebar #menu ul  .parent .child .child-parent .active")
      .parent()
      .parent()
      .fadeIn()
      .parent()
      .parent()
      .fadeIn()
      .parent()
      .addClass("active");
  
    $(".sidebar #menu ul  .parent .child .child-parent .active")
      .parent()
      .parent()
      .fadeIn()
      .siblings("a")
      .addClass("active-link");
  
    $(".sidebar #menu ul  .parent .child  .active")
      .parent()
      .parent()
      .fadeIn()
      .parent()
      .addClass("active");
  
    $(".sidebar #menu ul  .parent > a").on("click", function (e) {
      e.preventDefault();
      $(this).siblings("ul").slideToggle();
      $(this).parent().toggleClass("active");
    });
  
    $(".sidebar #menu ul  .parent  .child-parent")
      .siblings("a")
      .on("click", function (e) {
        e.preventDefault();
        $(this).siblings("ul").slideToggle();
        $(this).toggleClass("active-link");
      });
  });
  





 
