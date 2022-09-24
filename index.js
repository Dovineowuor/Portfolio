function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  // Implementing dark and light mode toggler on site

function logSubmit(event) {
      
      log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
      event.preventDefault();
    }
    
    const form = document.getElementById('form');
    const log = document.getElementById('log');
    form.addEventListener('submit', logSubmit);



