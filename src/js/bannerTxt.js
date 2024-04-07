// JavaScript to toggle visibility of the banner texts interchangeably
document.addEventListener("DOMContentLoaded", function() {
    var banner1 = document.getElementById("banner_txt_1");
    var banner2 = document.getElementById("banner_txt_2");
  
    function toggleBanners() {
      if (banner1.style.display === "none") {
        banner1.style.display = "block";
        banner2.style.display = "none";
      } else {
        banner1.style.display = "none";
        banner2.style.display = "block";
      }
    }
  
    // Initially display the first banner and start toggling after 5 seconds
    banner1.style.display = "block";
    banner2.style.display = "none";
    setInterval(toggleBanners, 5000); // Change banners every 5 seconds
  });
  