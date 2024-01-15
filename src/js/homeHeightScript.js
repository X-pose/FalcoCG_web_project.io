document.addEventListener('DOMContentLoaded', function () {
    // Get the height of homeSectionDiv and set it as the height of its parent (.home)
    var homeSectionDiv = document.getElementById('HomeSectionDiv');
    var particlesDiv = homeSectionDiv.parentElement;
    var home = particlesDiv.parentElement

    var ContactContainerDiv = document.getElementById('ContactContainer')
    var particles3Div = ContactContainerDiv.parentElement
    var Contact = particles3Div.parentElement

    var CanvasFeedback = document.getElementsByClassName('particles-js-canvas-el')
    var feedbackSection = document.getElementById('Feedback')

   

    Contact.style.height = ContactContainerDiv.clientHeight + 'px'
    home.style.height = homeSectionDiv.clientHeight + 'px';

    // Optionally, you can listen for resize events to update the height dynamically
    window.addEventListener('resize', function() {
        CanvasFeedback.style.height = feedbackSection.clientHeight + 'px'
        CanvasFeedback.style.width = '100vw'
        home.style.height = homeSectionDiv.clientHeight + 'px';
        Contact.style.height = ContactContainerDiv.clientHeight + 'px'
    });
});
