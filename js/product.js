// Load navbar and handle hamburger toggle after DOM is loaded
fetch('includes/product-case-navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar-placeholder').innerHTML = data;

    // Now that it's loaded, select elements
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.navbar ul');

    // Hamburger click
    hamburger.addEventListener('click', () => {
      navList.classList.toggle('active');
      hamburger.classList.toggle('open');
    });

    // Auto close nav when a link is clicked
    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('active');
        hamburger.classList.remove('open');
      });
    });
  })
  .catch(error => console.error('Error loading navbar:', error));





// Product page JavaScript for IoT Web
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
      });
      currentIndex = index;
    }

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'));
        showSlide(index);
        resetAutoSlide();
      });
    });

    // Auto-slide every 5 seconds
    let autoSlideInterval = setInterval(() => {
      let nextIndex = (currentIndex + 1) % slides.length;
      showSlide(nextIndex);
    }, 5000);

    function resetAutoSlide() {
      clearInterval(autoSlideInterval);
      autoSlideInterval = setInterval(() => {
        let nextIndex = (currentIndex + 1) % slides.length;
        showSlide(nextIndex);
      }, 5000);
    }
  });



// Contact form validation and submission
  const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if(name.length < 2) {
    alert('Please enter a valid name (at least 2 characters).');
    contactForm.name.focus();
    return;
  }
  if(!email.match(/^\S+@\S+\.\S+$/)) {
    alert('Please enter a valid email address.');
    contactForm.email.focus();
    return;
  }
  if(message.length < 10) {
    alert('Please enter a message with at least 10 characters.');
    contactForm.message.focus();
    return;
  }

  alert('Thank you for reaching out! We will get back to you soon.');
  contactForm.reset();
});


// Back to top button functionality
const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });



  // Intersection Observer for scroll fade-in effect
  const scrollElements = document.querySelectorAll(".scroll-fade");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // Animate once
      }
    });
  }, {
    threshold: 0.1
  });

  scrollElements.forEach(el => observer.observe(el));