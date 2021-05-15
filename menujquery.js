$(document).ready(function () {
  function toggleSidebar() {
    $(".button").toggleClass("active");
    $("main").toggleClass("move-to-right");
    $(".sidebar-item").toggleClass("active");
    $("body").toggleClass("no-y-scrollbar");
  }

  $(".button").on("click tap", function () {
    toggleSidebar();
  });

  $(document).keyup(function (e) {
    if (e.keyCode === 27) {
      toggleSidebar();
    }
  });
});
