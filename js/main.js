// Load navbar.html
fetch('includes/navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar-placeholder').innerHTML = data;

    // Now that navbar is loaded, bind hamburger logic
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('open');
      });
    }
  })
  .catch(error => console.error('Error loading navbar:', error));
  

  // Load footer.html
  fetch('includes/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));




// Smooth scroll polyfill fallback handled by CSS scroll-behavior in modern browsers
const scrollElements = document.querySelectorAll('.scroll-reveal');

  const scrollInView = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 100
    );
  };

  const handleScroll = () => {
    scrollElements.forEach(el => {
      if (scrollInView(el)) {
        el.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll);


  // Contact form validation & submission demo
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Simple client-side validation
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if(name.length < 2) {
      alert('Please enter a valid name (at least 2 characters).');
      form.name.focus();
      return;
    }
    if(!email.match(/^\S+@\S+\.\S+$/)) {
      alert('Please enter a valid email address.');
      form.email.focus();
      return;
    }
    if(message.length < 10) {
      alert('Please enter a message with at least 10 characters.');
      form.message.focus();
      return;
    }

    // Here you would handle actual submission via AJAX or form action

    alert('Thank you for reaching out! We will get back to you soon.');
    form.reset();
  });


// Carousel functionality for project showcase
  const track = document.querySelector('.carousel-track');
  const originalSlides = document.querySelectorAll('.carousel-track .project-card');
  const dotContainer = document.getElementById('carousel-dots');

  let currentIndex = 0;
  const totalSlides = originalSlides.length;

  // Clone the first slide and append
  const firstClone = originalSlides[0].cloneNode(true);
  firstClone.classList.add('cloned');
  track.appendChild(firstClone);

  // Create dots
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('button');
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.addEventListener('click', () => {
      currentIndex = i;
      updateDots();
      slideTo(currentIndex);
    });
    dotContainer.appendChild(dot);
  }

  const dots = document.querySelectorAll('#carousel-dots button');
  dots[0].classList.add('active');

  function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex % totalSlides].classList.add('active');
  }

  function slideTo(index) {
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(-${index * 100}%)`;
    updateDots();
  }

  function resetToStart() {
    track.style.transition = 'none';
    track.style.transform = `translateX(0)`;
    currentIndex = 0;
    updateDots();
  }

  function nextSlide() {
    currentIndex++;
    slideTo(currentIndex);

    if (currentIndex === totalSlides) {
      setTimeout(() => {
        resetToStart();
      }, 2000);
    }
  }

  let slideInterval = setInterval(nextSlide, 6000);

  // Optional: pause on hover
  track.addEventListener('mouseenter', () => clearInterval(slideInterval));
  track.addEventListener('mouseleave', () => slideInterval = setInterval(nextSlide, 4000));


  // Hamburger menu toggle for mobile navigation
  document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('open');
      });
    }
  });



// Header not hide on scroll down, show on scroll up
let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 80) {
    // Scroll down
    header.style.transform = "translateY(-100%)";
  } else {
    // Scroll up
    header.style.transform = "translateY(0)";
  }

  lastScrollTop = scrollTop;
});


