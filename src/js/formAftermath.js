var submitted = false;

// Function to show the response message in the center of the viewport
function showResponseMessage() {
  $('.form').fadeOut(500);
  
  // Fade in the response message
  $('#response-message').fadeIn(1000);

  // Set a timeout for fading out the response message
  setTimeout(function() {
    $('#response-message').fadeOut(1000);
    $('.form').fadeIn(3000);
  }, 2000);
}
