// navigation bar used javascript code
function toggleNav() {
  document.querySelector('.nav').classList.toggle('show');
}
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (window.scrollY > 50) { 
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});


// cards section 1
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //Responsive breakpoints
    breakpoints:{
        
        0:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        },
    }
  });
  
  // cards section 2
  const carousel = document.querySelector('.carousel');

  // Automatic sliding
  let index = 0;
  const images = carousel.querySelectorAll('img');
  const totalImages = images.length;

  function autoSlide() {
    index = (index + 1) % totalImages;
    carousel.scrollTo({
      left: index * (carousel.clientWidth / 3),
      behavior: 'smooth',
    });
  }

  setInterval(autoSlide, 3000); // Slides every 3 seconds

  // Optional: Add event listeners for manual sliding
  document.getElementById('left').addEventListener('click', () => {
    index = (index - 1 + totalImages) % totalImages;
    carousel.scrollTo({
      left: index * (carousel.clientWidth / 3),
      behavior: 'smooth',
    });
  });

  document.getElementById('right').addEventListener('click', () => {
    index = (index + 1) % totalImages;
    carousel.scrollTo({
      left: index * (carousel.clientWidth / 3),
      behavior: 'smooth',
    });
  });



  var swiper1 = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,

    // Pagination
    pagination: {
      el: ".swiper1-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper1-button-next",
      prevEl: ".swiper1-button-prev",
    },
  });


  