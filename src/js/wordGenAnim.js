
document.addEventListener("DOMContentLoaded", function() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefjhijklmnopqrstuvwxyz";
    
    const spanDesign = document.querySelector("#spanDesign");
  
    function runAnimation1() {
      let iteration = 0;
      let interval = null;
      clearInterval(interval);
  
      interval = setInterval(() => {
        spanDesign.innerText = spanDesign.innerText
          .split("")
          .map((letter, index) => {
            if(index < iteration) {
              return spanDesign.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 52)];
          })
          .join("");
  
        if(iteration >= spanDesign.dataset.value.length){ 
          clearInterval(interval);
        }
        
        iteration += 1 / 3;
      }, 30);
    }


    const spanDesign1 = document.querySelector("#spanPerf");
  
    function runAnimation2() {
      let iteration = 0;
      let interval = null;
      clearInterval(interval);
  
      interval = setInterval(() => {
        spanDesign1.innerText = spanDesign1.innerText
          .split("")
          .map((letter, index) => {
            if(index < iteration) {
              return spanDesign1.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 52)];
          })
          .join("");
  
        if(iteration >= spanDesign1.dataset.value.length){ 
          clearInterval(interval);
        }
        
        iteration += 1 / 3;
      }, 30);
    }
    
    const spanDesign2 = document.querySelector("#spanTexture");
  
    function runAnimation3() {
      let iteration = 0;
      let interval = null;
      clearInterval(interval);
  
      interval = setInterval(() => {
        spanDesign2.innerText = spanDesign2.innerText
          .split("")
          .map((letter, index) => {
            if(index < iteration) {
              return spanDesign2.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 52)];
          })
          .join("");
  
        if(iteration >= spanDesign2.dataset.value.length){ 
          clearInterval(interval);
        }
        
        iteration += 1 / 3;
      }, 30);
    }

    const spanDesign3 = document.querySelector("#spanElegence");
  
    function runAnimation4() {
      let iteration = 0;
      let interval = null;
      clearInterval(interval);
  
      interval = setInterval(() => {
        spanDesign3.innerText = spanDesign3.innerText
          .split("")
          .map((letter, index) => {
            if(index < iteration) {
              return spanDesign3.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 52)];
          })
          .join("");
  
        if(iteration >= spanDesign3.dataset.value.length){ 
          clearInterval(interval);
        }
        
        iteration += 1 / 3;
      }, 30);
    }
  
  
    // Run the animation immediately
    runAnimation1()
    runAnimation2()
    runAnimation3()
    runAnimation4()
  
    // Run the animation every 5 seconds
    setInterval(runAnimation1, 5000)
    setInterval(runAnimation2,5000)
    setInterval(runAnimation3,5000)
    setInterval(runAnimation4,5000)
  });
  
  