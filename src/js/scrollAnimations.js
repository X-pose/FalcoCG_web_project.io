document.addEventListener('DOMContentLoaded', function () {


    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
           
            console.log(entry);
            // Use entry.target directly as it's a reference to the observed element
            var element = entry.target;

            console.log(entry);

            //Each of these if blocks can be used to style relevent elements
           


            if (element.classList.contains('AboutPara')) {

               
                if (entry.isIntersecting) {
                    console.log("intersecting now with AboutPara");
                    element.style.opacity = '1';
                    element.style.filter = 'blur(0)';
                    element.style.transform = 'scale(1)';
                    element.style.transition = 'all 2s ease';
                } else {
                    console.log("Not intersecting now with AboutPara");
                    element.style.opacity = '0';
                    element.style.filter = 'blur(5px)';
                    element.style.transform = 'scale(0.1)';
                    element.style.transition = 'all 1s ';
                }
            }

            if (element.classList.contains('LogoMain')) {

               
                if (entry.isIntersecting) {
                    console.log("intersecting now with AboutPara");
                    element.style.opacity = '1';
                    element.style.filter = 'blur(0)';
                    element.style.transform = 'scale(1)';
                    element.style.transition = 'all 2s ease';
                } else {
                    console.log("Not intersecting now with AboutPara");
                    element.style.opacity = '0';
                    element.style.filter = 'blur(5px)';
                    element.style.transform = 'scale(0.1)';
                    element.style.transition = 'all 1s ';
                }
            }

            if (element.classList.contains('ServiceBox')) {

                const delay = 0.2; // Adjust the delay value as needed

                if (entry.isIntersecting) {
                    console.log("intersecting now");
                    element.style.opacity = '1';
                    element.style.filter = 'blur(0)';
                    element.style.transform = 'scale(0.8)';
                    element.style.transition = `all 2s ease ${index * delay}s`; // Apply delay
                } else {
                    console.log("Not intersecting now");
                    element.style.opacity = '0';
                    element.style.filter = 'blur(5px)';
                    element.style.transform = 'scale(0.1)';
                    element.style.transition = `all 2s ${index * delay}s`; // Apply delay
                }
            }


            if (element.classList.contains('carouselItem')) {

                const delay = 0.2; // Adjust the delay value as needed

                if (entry.isIntersecting) {
                    console.log("intersecting now");
                    element.style.opacity = '1';
                    element.style.filter = 'blur(0)';
                    element.style.transform = 'translateX(0) scale(0.6)';
                    element.style.transition = `all 2s ease ${index * delay}s`; // Apply delay
                } else {
                    console.log("Not intersecting now");
                    element.style.opacity = '0';
                    element.style.filter = 'blur(5px)';
                    element.style.transform = 'translateX(-100%)  scale(0.6)';
                    element.style.transition = `all 2s ${index * delay}s`; // Apply delay
                }
            }


            if (element.classList.contains('optionRow')) {

                const delay = 0.2; // Adjust the delay value as needed

                if (entry.isIntersecting) {
                    console.log("intersecting now");
                    element.style.opacity = '1';
                    element.style.filter = 'blur(0)';
                    element.style.transform = 'translateX(0)';
                    element.style.transition = `all 2s ease ${index * delay}s`; // Apply delay
                } else {
                    console.log("Not intersecting now");
                    element.style.opacity = '0';
                    element.style.filter = 'blur(5px)';
                    element.style.transform = 'translateX(-100%)';
                    element.style.transition = `all 2s ${index * delay}s`; // Apply delay
                }
            }
            
        });
    }); // Adjust the threshold as needed

    const Section2 = document.querySelectorAll('.Sec2Head, .AboutPara, .ServiceBox, .LogoMain, .carouselItem, .optionRow'); //Add your class names or ID names as parameters
   
    Section2.forEach(element => {
        observer.observe(element);
    });
});
