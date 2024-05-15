document.addEventListener("DOMContentLoaded", function() {
    const mediaSources = [
        { type: 'image', src: 'slides/Slides/Slides.001.png'},
        { type: 'image', src: 'slides/Slides/Slides.002.png'},
        { type: 'image', src: 'slides/Slides/Slides.003.png'},
        { type: 'image', src: 'slides/Slides/Slides.004.png'},
        { type: 'video', src: 'slides/Slide 5.m4v' },
        { type: 'video', src: 'slides/Slide 6.m4v' },
        { type: 'image', src: 'slides/Slides/Slides.007.png'},
        { type: 'image', src: 'slides/Slides/Slides.008.png'},
        { type: 'video', src: 'slides/Slide 9.m4v' },
        { type: 'image', src: 'slides/Slides/Slides.010.png'},
        { type: 'video', src: 'slides/Slide 11.m4v' },
        { type: 'image', src: 'slides/Slides/Slides.012.png'},
        { type: 'image', src: 'slides/Slides/Slides.013.png'},
        { type: 'image', src: 'slides/Slides/Slides.014.png'},
        { type: 'image', src: 'slides/Slides/Slides.015.png'},
        { type: 'image', src: 'slides/Slides/Slides.016.png'},
        { type: 'image', src: 'slides/Slides/Slides.017.png'},
        { type: 'video', src: 'slides/Slide 18.m4v' },
        { type: 'video', src: 'slides/Slide 19.m4v' },
        { type: 'image', src: 'slides/Slides/Slides.020.png'},
        { type: 'image', src: 'slides/Slides/Slides.021.png'},
        { type: 'image', src: 'slides/Slides/Slides.022.png'},
        // Add more media sources as needed
    ];
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    const slider = document.getElementById('mediaSlider');
    mediaSources.forEach((media, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        if (index === 0) slide.classList.add('active'); // First media is active

        if (media.type === 'video') {
            const video = document.createElement('video');
            video.src = media.src; // Set the source of the video
            video.width = width;  // Set the width of the video
            video.loop = true; // Loop the video
            video.controls = false // Hide the video controls
            slide.appendChild(video);
        } else if (media.type === 'image') {
            const image = document.createElement('img');
            image.src = media.src;
            image.alt = "Image";
            image.width = width;  // Set the width of the video
            slide.appendChild(image);
        }

        slider.appendChild(slide);
    });

    updateMediaWidths(); // Call once on load
    window.addEventListener('resize', updateMediaWidths); // Adjust on window resize

    function updateMediaWidths() {
        const width = window.innerWidth;
        const mediaElements = document.querySelectorAll('.slide img, .slide video');
        mediaElements.forEach(el => {
            el.style.width = `${width}px`; // Update width to match the window
        });
    }

    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function updateSlideNumber(index) {
        const slideNumberElement = document.getElementById('slideNumber');
        slideNumberElement.textContent = `${index + 1} of ${slides.length}`;
    }    

    function showSlide(index) {
        slides.forEach((slide, idx) => {
            slide.style.display = 'none';
            if (slides[idx].querySelector('video')) {
                slides[idx].querySelector('video').pause();
                slides[idx].querySelector('video').currentTime = 0;
            }
        });
    
        slides[index].style.display = 'block';
        const video = slides[index].querySelector('video');
        if (video) video.play();
        currentSlide = index;
        updateSlideNumber(index); 

        showHUD(); 
        setTimeout(hideHUD, 2000); 
    }

    function nextSlide() {
        if (currentSlide < slides.length - 1) { // Check if not the last slide
            showSlide(currentSlide + 1);
        }
    }

    function previousSlide() {
        if (currentSlide > 0) { // Check if not the first slide
            showSlide(currentSlide - 1);
        }
    }

    // Hide HUD
    const hud = document.querySelector('.hud');

    function hideHUD() {
        hud.style.opacity = '0';
    }

    function showHUD() {
        hud.style.opacity = '1';
    }

    function startHUD() {
        setTimeout(hideHUD, 2000);
    }

    // Add event listeners to show and hide HUD
    startHUD();

    hud.addEventListener('mouseenter', showHUD);
    hud.addEventListener('mouseleave', hideHUD);

    // Function to show HUD and then hide after 3 seconds
    function handleHudClick() {
        showHUD();
        setTimeout(hideHUD, 2000); 
    }

    // Add click event on the slider to handle HUD visibility
    slider.addEventListener('click', handleHudClick);

    // Add event listeners to the buttons
    document.getElementById('next').addEventListener('click', nextSlide);
    document.getElementById('prev').addEventListener('click', previousSlide);

    // Add keyboard navigation
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') {
            nextSlide();
        }
        if (event.key === 'ArrowLeft') {
            previousSlide();
        }
    });

    // Add swipe navigation
    let touchStartX = 0;
    let touchEndX = 0;

    function handleTouchStart(event) {
        touchStartX = event.changedTouches[0].screenX;
    }

    function handleTouchMove(event) {
        touchEndX = event.changedTouches[0].screenX;
    }

    // Define a minimum swipe distance (in pixels) for swipe actions to be considered valid
    const swipeThreshold = 50; // you can adjust this value based on your needs

    function handleTouchEnd() {
        const swipeDistance = Math.abs(touchEndX - touchStartX);
        if (swipeDistance > swipeThreshold) { // Only consider a swipe if it exceeds the threshold
            if (touchEndX < touchStartX) {
                nextSlide();  // Swiping left to go to the next slide
            } else if (touchEndX > touchStartX) {
                previousSlide();  // Swiping right to go to the previous slide
            }
        }
    }

    slider.addEventListener('touchstart', handleTouchStart);
    slider.addEventListener('touchmove', handleTouchMove);
    slider.addEventListener('touchend', handleTouchEnd);

    // Initialize the first slide
    showSlide(0);
});