// Handle toggling the navbar
function updateClasses() {
  $("#toggle").toggleClass("active");
  $("#menu").toggleClass("active");
  $("#overview").toggleClass("active");
}

function handleToggle() {
  $("#toggle").click(updateClasses);
  $("#menu a").click(updateClasses);
}

$(document).ready(handleToggle);
