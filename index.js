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

  body{
    padding:0% 3% 10% 3%;
    text-align:center;
    }
    h1{
    color: #32a852;
    margin-top:30px;
    }
 
    button{
        cursor: pointer;
        border: 1px solid #555;
        text-align: center;
        padding: 5px;
        margin-left: 8px;
    }
    .dark{
        background-color: #222;
        color: #e6e6e6;
    }