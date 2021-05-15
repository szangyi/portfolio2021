$(document).ready(function () {
  function toggleSidebarProjectExplore() {
    console.log("rakatt");

    $("main").toggleClass("move-to-left");
    $("body").toggleClass("no-y-scrollbar");
    $(".sidebar-projectexplore").toggleClass("no-y-scrollbar");

    // var text = $(buttonExplore).text() == "Explore the project" ? "Back to all" : "Explore the project";
    // $(buttonExplore).text(text).toggleClass("active");
  }

  function showProject1() {
    $("#sidebar-project1explore").toggleClass("hidden");
    const project1button = document.querySelector("#btn-project1explore");
    if (project1button.text === "Explore the project") {
      project1button.text = "Back to all";
      project1button.style.right = "-35px";
    } else {
      project1button.text = "Explore the project";
      project1button.style.right = "-65px";
    }
  }

  function showProject2() {
    $("#sidebar-project2explore").toggleClass("hidden");
    const project2button = document.querySelector("#btn-project2explore");
    if (project2button.text === "Explore the project") {
      project2button.text = "Back to all";
      project2button.style.right = "-35px";
    } else {
      project2button.text = "Explore the project";
      project2button.style.right = "-65px";
    }
  }

  $(".button-projectexplore").on("click tap", function () {
    toggleSidebarProjectExplore();
  });

  $("#btn-project1explore").on("click tap", function () {
    showProject1();
  });

  $("#btn-project2explore").on("click tap", function () {
    showProject2();
  });

  $(document).keyup(function (e) {
    if (e.keyCode === 27) {
      toggleSidebarProjectExplore();
    }
  });
});
