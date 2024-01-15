document.addEventListener('DOMContentLoaded', function () {
    // Get the height of homeSectionDiv and set it as the height of its parent (.home)
    var homeSectionDiv = document.getElementById('HomeSectionDiv');
    var particlesDiv = homeSectionDiv.parentElement;
    var home = particlesDiv.parentElement

    var ContactContainerDiv = document.getElementById('ContactContainer')
    var particles3Div = ContactContainerDiv.parentElement
    var Contact = particles3Div.parentElement

    //For Home particles
    var partical1 = document.getElementById('particles-js')

    //For Feedback particals
    var feedbackSection = document.getElementById('Feedback')
    var partical2 = document.getElementById('particles-js2')
   
    //For Contact particales
    var ContactSection = document.getElementById('Contact')
    var partical3 = document.getElementById('particles-js3')

    Contact.style.height = ContactContainerDiv.clientHeight + 'px'
    home.style.height = homeSectionDiv.clientHeight + 'px';

    // Optionally, you can listen for resize events to update the height dynamically
    window.addEventListener('resize', function() {

       home.style.height = homeSectionDiv.clientHeight + 'px';
    
    Contact.style.height = ContactContainerDiv.clientHeight + 'px';

    partical1.style.height = home.clientHeight + 'px';  
    partical3.style.height = ContactSection.clientHeight + 'px';
    partical2.style.height = feedbackSection.clientHeight + 'px';
       
    });
});
