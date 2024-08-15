let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
  
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });




const inputs = document.querySelectorAll(".input"); 

 function focusFunc(){
  let parent = this.parentNode;
  parent.classList.add("focus")
 }

inputs.forEach((input) => {
  input.addEventListener("focus", focusfunc);

})




document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
      document.getElementById('formFeedback').textContent = 'Thank you for your message!';
      document.getElementById('formFeedback').style.color = '#4CAF50'; // Green
  } else {
      document.getElementById('formFeedback').textContent = 'Please fill in all fields.';
      document.getElementById('formFeedback').style.color = '#ff0000'; // Red
  }
});