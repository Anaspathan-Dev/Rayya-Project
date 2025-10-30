// Custom Timeline Functionality
document.addEventListener('DOMContentLoaded', function() {
    const timelinePoints = document.querySelectorAll('.timeline-point');
    const timelineProgress = document.querySelector('.timeline-progress');
    const video = document.getElementById('timelineVideo');
    
    // Set initial active point
    let activeIndex = 0;
    
    // Timeline point click event
    timelinePoints.forEach((point, index) => {
        point.addEventListener('click', function() {
            // Remove active class from all points
            timelinePoints.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked point
            this.classList.add('active');
            activeIndex = index;
            
            // Update progress bar
            const progressWidth = ((index) / (timelinePoints.length - 1)) * 100;
            timelineProgress.style.width = `${progressWidth}%`;
            
            // Change video
            const videoSrc = this.getAttribute('data-video');
            if (videoSrc) {
                changeVideo(videoSrc);
            }
        });
    });
    
    // Video change function
    function changeVideo(videoSrc) {
        video.pause();
        video.innerHTML = '';
        
        const source = document.createElement('source');
        source.src = videoSrc;
        source.type = 'video/mp4';
        video.appendChild(source);
        
        video.load();
        video.play().catch(e => {
            console.log('Video play failed:', e);
        });
    }
    
    // Auto-play timeline (optional)
    let autoPlayInterval;
    
    function startAutoPlay() {
        autoPlayInterval = setInterval(() => {
            activeIndex = (activeIndex + 1) % timelinePoints.length;
            timelinePoints[activeIndex].click();
        }, 5000); // Change every 5 seconds
    }
    
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }
    
    // Start auto-play (comment out if not needed)
    // startAutoPlay();
    
    // Pause auto-play on hover
    document.querySelector('.custom-timeline').addEventListener('mouseenter', stopAutoPlay);
    document.querySelector('.custom-timeline').addEventListener('mouseleave', startAutoPlay);
});

// Swiper Configuration
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // Mobile first - 1 slide
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
    },
    breakpoints: {
        // When window width is >= 576px (Small devices)
        576: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        // When window width is >= 768px (Tablets)
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        // When window width is >= 992px (Desktop)
        992: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
    },
});

// --------------------------
// Custom Simple Slider (Yoga & Meditation Section)
// --------------------------
document.addEventListener('DOMContentLoaded', function () {
  // Select all slider containers (you can duplicate the section later)
  const sliders = document.querySelectorAll('.slider-container');

  sliders.forEach((slider) => {
    const nextBtn = slider.querySelector('.next-btn');
    const slides = [
      {
        img: 'images/trainer.jpg',
        title: 'Yoga & Meditation',
        text: 'In a world full of distractions and demands, our Yoga and Meditation programs offer a grounding sanctuary — a space to reconnect, reflect, and restore. Designed for all levels, our sessions blend breath, movement, and mindfulness to awaken your body and calm your mind.',
      },
      {
        img: 'images/trainer.jpg',
        title: 'Mindfulness & Healing',
        text: 'Our healing programs integrate movement, meditation, and mindfulness to help you reconnect with your inner peace and balance.',
      },
      {
        img: 'images/trainer.jpg',
        title: 'Holistic Fitness',
        text: 'Rediscover your strength and vitality through mindful fitness designed for both body and mind connection.',
      },
      {
        img: 'images/trainer.jpg',
        title: 'Spiritual Wellbeing',
        text: 'Reconnect with your soul through guided practices that combine breathwork, meditation, and deep awareness.',
      },
    ];

    let currentIndex = 0;

    // Function to update slide content
    function updateSlide() {
      const imgEl = slider.querySelector('.left-image img');
      const titleEl = slider.querySelector('.right-content h2');
      const textEl = slider.querySelector('.right-content p');

      // Fade-out effect
      slider.classList.add('fade');
      setTimeout(() => {
        imgEl.src = slides[currentIndex].img;
        titleEl.textContent = slides[currentIndex].title;
        textEl.textContent = slides[currentIndex].text;

        // Fade-in effect
        slider.classList.remove('fade');
      }, 300);
    }

    // Next button click event
    nextBtn.addEventListener('click', function () {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlide();
    });
  });
});
