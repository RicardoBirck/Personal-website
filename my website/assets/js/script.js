import { renderFooter } from '../../partials/footer.js';

document.addEventListener('DOMContentLoaded', () => {
  const footerElement = document.getElementById('footer');
  footerElement.innerHTML = renderFooter();  
});

import { renderNav } from '../../partials/nav.js';

document.addEventListener('DOMContentLoaded', () => {
  const footerElement = document.getElementById('nav');
  footerElement.innerHTML = renderNav();  
});


document.addEventListener("DOMContentLoaded", function() {
  const video = document.getElementById("video");
  const videoContainer = document.getElementById("videoContainer");

  // Add event listener to play/pause the video when clicked
  videoContainer.addEventListener("click", function() {
    if (video.paused) {
      video.play(); // Play the video if it is paused
    } else {
      video.pause(); // Pause the video if it is already playing
    }
  });
});





const fitbodyButton = document.getElementById("fitbodyWebsiteButton");

fitbodyButton.addEventListener("click", function() {
    window.open("https://www.emilymeer.com/bodylura-app-dashboard", "_blank");
  });


const linguafrancaButton = document.getElementById("linguafrancaWebsiteButton");

linguafrancaButton.addEventListener("click", function() {
      window.open("https://www.emilymeer.com/lingua-franca-app", "_blank");
    });


const essentializeButton = document.getElementById("essentializeButton");

essentializeButton.addEventListener("click", function() {
    window.location.href = "/my website/pages/essentialize.html"; 
});

const essentializeButton2 = document.getElementById("essentializeButton2");

essentializeButton2.addEventListener("click", function() {
    window.location.href = "/my website/pages/essentialize.html"; 
});


document.getElementById("objectivismButton").addEventListener("click", function() {
    window.location.href = "/my website/pages/objectivism.html"; 
  });

document.getElementById("objectivismButton2").addEventListener("click", function() {
    window.location.href = "/my website/pages/objectivism.html"; 
  });
