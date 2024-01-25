document.addEventListener('DOMContentLoaded', function () {
    // Get the height of homeSectionDiv and set it as the height of its parent (.home)
    var homeSection = document.getElementById('Home');
    var aboutSection = document.getElementById('About');
    var feedbackSection = document.getElementById('Feedback');
    var serviceSection = document.getElementById('Services');
    var contactSection = document.getElementById('Contact');
    const viewportHeight = window.innerHeight;

    if (homeSection.offsetHeight < viewportHeight) {
        homeSection.style.minHeight = viewportHeight + 'px';
    }
    if (aboutSection.offsetHeight < viewportHeight) {
        aboutSection.style.minHeight = viewportHeight + 'px';
    }
    if (feedbackSection.offsetHeight < viewportHeight) {
        feedbackSection.style.minHeight = viewportHeight + 'px';
    }
    if (serviceSection.offsetHeight < viewportHeight) {
        serviceSection.style.minHeight = viewportHeight + 'px';
    }
    if (contactSection.offsetHeight < viewportHeight) {
        contactSection.style.minHeight = viewportHeight + 'px';
    }
});
