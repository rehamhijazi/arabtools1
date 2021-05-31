// toolTips
// $(document).ready(function(){
//   $('[data-toggle="tooltip"]').tooltip();
// });


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
  


  //charts
  var ctx = document.getElementById("barChart");

  var BarChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Hepo – Ecosys Integr…",
        "Action Can Cold Zinc…",
        "ATP Product",
        
      ],
      datasets: [
        {
          label:'Hepo – Ecosys Integr…',
          data: [90, 30, 60, 90, 120, 50, 70, 20, 60, 40],
          order: 1,
          maxBarThickness: 20,
          minBarLength: 2,
          backgroundColor: "#036fe7",
        },
        {
          label:'Action Can Cold Zinc…',
          data: [10, 50, 80, 90, 30, 50, 50, 70, 80, 100],
          order: 2,
          maxBarThickness: 20,
          minBarLength: 2,
          backgroundColor: "#f93a5a",
        },
        {
          label:'ATP Product',
          data: [50, 80, 30, 90, 80, 50, 0, 20, 40, 60],
          order: 3,
          maxBarThickness: 20,
          minBarLength: 2,
          backgroundColor: "#f7a556",
        },
      ],
    },
    options: {
     
      legend: {
        rtl:true,
        labels: {
          boxWidth: 12,
        },
      },
    },
  });




  var ctx = document.getElementById("barChart2");

  var BarChart2 = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Hepo – Ecosys Integr…",
        "Action Can Cold Zinc…",
        "ATP Product",
        
      ],
      datasets: [
        {
          label:'Hepo – Ecosys Integr…',
          data: [90, 30, 60, 90, 120, 50, 70, 20, 60, 40],
          order: 1,
          maxBarThickness: 20,
          minBarLength: 2,
          backgroundColor: "#036fe7",
        },
        {
          label:'Action Can Cold Zinc…',
          data: [10, 50, 80, 90, 30, 50, 50, 70, 80, 100],
          order: 2,
          maxBarThickness: 20,
          minBarLength: 2,
          backgroundColor: "#f93a5a",
        },
        {
          label:'ATP Product',
          data: [50, 80, 30, 90, 80, 50, 0, 20, 40, 60],
          order: 3,
          maxBarThickness: 20,
          minBarLength: 2,
          backgroundColor: "#f7a556",
        },
      ],
    },
    options: {
     
      legend: {
        rtl:true,
        labels: {
          boxWidth: 12,
        },
      },
    },
  });
