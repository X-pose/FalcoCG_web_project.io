// script.js

document.addEventListener('DOMContentLoaded', function () {
    var feedbackLink = document.getElementById('FeedbackLink');
    var HomeLink = document.getElementById('HomeLink');
    var ServicesLink = document.getElementById("ServicesLink")
    var AboutLink = document.getElementById("AboutLink")
    var ContactLink = document.getElementById("ContactLink")

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

    if (AboutLink) {
        AboutLink.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            var AboutSection = document.getElementById('About');
            
            if (AboutSection ) {
                AboutSection .scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
    
    if (ServicesLink) {
        ServicesLink.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            var ServicesSection = document.getElementById('Services');
            
            if (ServicesSection ) {
                ServicesSection .scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
    if (ContactLink) {
        ContactLink.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            var ContactSection = document.getElementById('Contact');
            
            if (ContactSection ) {
                ContactSection .scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
    

});
