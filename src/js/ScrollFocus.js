// script.js

document.addEventListener('DOMContentLoaded', function () {
    var feedbackLink = document.getElementById('feedbackLink');
    var HomeLink = document.getElementById('HomeLink');

    if (feedbackLink) {
        feedbackLink.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            var feedbackSection = document.getElementById('Feedback');
            
            if (feedbackSection) {
                feedbackSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }

    if (HomeLink) {
        HomeLink.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            var HomeSection = document.getElementById('Home');
            
            if (HomeSection ) {
                HomeSection .scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
    

});
