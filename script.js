// Slideshow function
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 1000); // Change image every 2 seconds (2000ms)

  // Restart slideshow from the first slide when reaching the end
  if (slideIndex === slides.length) {
    slideIndex = 0;
  }
}

// Scroll to Top Deals section when the link is clicked
const topDealsLink = document.querySelector('a[href="#top-deals-section"]');
topDealsLink.addEventListener('click', () => {
  const smallContainers = document.querySelector('.top-deals-section');
  smallContainers.scrollIntoView({ behavior: 'smooth' });
});
function scrollToFooter() {
  // Scroll to the footer section
  document.getElementById('About-us').scrollIntoView({ behavior: 'smooth' });
}

// Toggle search bar visibility
document.getElementById('search-icon').addEventListener('click', function() {
  const searchBar = document.getElementById('search-bar');
  searchBar.style.display = searchBar.style.display === 'block' ? 'none' : 'block';
});
