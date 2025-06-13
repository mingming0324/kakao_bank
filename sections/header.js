$(".drop-btn").click(function() {
  $(".drop-down__content").toggleClass("is_active");
  $(".drop-btn").toggleClass("is_active");
});

$("window").click(function(event) {
  if (!$(event.target).closest(".drop-btn").lengh) {
    $(".drop-down_content").removeClass("is_active");
    $(".drop-btn").addClass("is_active");
  }
});