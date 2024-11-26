document.addEventListener("DOMContentLoaded", function () {
    const mediaSources = [
        { type: 'image', src: 'slides/Slides/Slides.001.png' },
        { type: 'image', src: 'slides/Slides/Slides.002.png' },
        { type: 'image', src: 'slides/Slides/Slides.003.png' },
        { type: 'video', src: 'slides/Slide 3_compressed.mp4' },
        { type: 'image', src: 'slides/Slides/Slides.004.png' },
        { type: 'video', src: 'slides/Slide 4_compressed.mp4' },
        { type: 'image', src: 'slides/Slides/Slides.005.png' },
        { type: 'image', src: 'slides/Slides/Slides.006.png' },
        { type: 'video', src: 'slides/Slide 6_compressed.mp4' },
        { type: 'image', src: 'slides/Slides/Slides.007.png' },
        { type: 'image', src: 'slides/Slides/Slides.008.png' },
        { type: 'image', src: 'slides/Slides/Slides.009.png' },
        { type: 'video', src: 'slides/Slide 9_compressed.mp4' },
        { type: 'image', src: 'slides/Slides/Slides.010.png' },
        { type: 'video', src: 'slides/Slide 10_compressed.mp4' },
        { type: 'image', src: 'slides/Slides/Slides.011.png' },
        { type: 'video', src: 'slides/Slide 11_compressed.mp4' },
        { type: 'image', src: 'slides/Slides/Slides.012.png' },
        { type: 'video', src: 'slides/Slide 12_compressed.mp4' },
        { type: 'image', src: 'slides/Slides/Slides.013.png' },
        { type: 'video', src: 'slides/Slide 13_compressed.mp4' },
        { type: 'image', src: 'slides/Slides/Slides.014.png' },
        { type: 'video', src: 'slides/Slide 14_compressed.mp4' },
        { type: 'image', src: 'slides/Slides/Slides.015.png' },
        { type: 'video', src: 'slides/Slide 15_compressed.mp4' },
        { type: 'image', src: 'slides/Slides/Slides.016.png' },
        { type: 'video', src: 'slides/Slide 16_compressed.mp4' },
        { type: 'image', src: 'slides/Slides/Slides.017.png' },
        { type: 'video', src: 'slides/Slide 17_compressed.mp4' },
        { type: 'image', src: 'slides/Slides/Slides.018.png' },
        { type: 'video', src: 'slides/Slide 18_compressed.mp4' },
        { type: 'image', src: 'slides/Slides/Slides.019.png' },
        { type: 'video', src: 'slides/Slide 19_compressed.mp4' },
        { type: 'image', src: 'slides/Slides/Slides.020.png' },
        { type: 'video', src: 'slides/Slide 20_compressed.mp4' },
        { type: 'image', src: 'slides/Slides/Slides.021.png' },
        { type: 'video', src: 'slides/Slide 21_compressed.mp4' },
        { type: 'image', src: 'slides/Slides/Slides.022.png' },
        { type: 'video', src: 'slides/Slide 22_compressed.mp4' },
        { type: 'image', src: 'slides/Slides/Slides.023.png' },
        { type: 'video', src: 'slides/Slide 23_compressed.mp4' },
        { type: 'image', src: 'slides/Slides/Slides.024.png' },
        { type: 'video', src: 'slides/Slide 24_compressed.mp4' },
        { type: 'image', src: 'slides/Slides/Slides.025.png' },
        { type: 'video', src: 'slides/Slide 25_compressed.mp4' },
        { type: 'image', src: 'slides/Slides/Slides.026.png' },
        { type: 'image', src: 'slides/Slides/Slides.027.png' },
        { type: 'video', src: 'slides/Slide 27_compressed.mp4' },
        { type: 'image', src: 'slides/Slides/Slides.028.png' },
        { type: 'video', src: 'slides/Slide 28_compressed.mp4' },
        { type: 'image', src: 'slides/Slides/Slides.029.png' },
        { type: 'image', src: 'slides/Slides/Slides.030.png' },
        { type: 'image', src: 'slides/Slides/Slides.031.png' },
        { type: 'image', src: 'slides/Slides/Slides.032.png' },
        { type: 'video', src: 'slides/Slide 32_compressed.mp4' },
        { type: 'image', src: 'slides/Slides/Slides.033.png' },
        { type: 'image', src: 'slides/Slides/Slides.034.png' },
        { type: 'image', src: 'slides/Slides/Slides.035.png' },
        { type: 'video', src: 'slides/Slide 35_compressed.mp4' },
        { type: 'image', src: 'slides/Slides/Slides.036.png' },
        { type: 'video', src: 'slides/Slide 36_compressed.mp4' },
        { type: 'image', src: 'slides/Slides/Slides.037.png' },
        { type: 'video', src: 'slides/Slide 37_compressed.mp4' },
        { type: 'image', src: 'slides/Slides/Slides.038.png' },
        { type: 'image', src: 'slides/Slides/Slides.039.png' },
        { type: 'video', src: 'slides/Slide 39_compressed.mp4' },
        { type: 'image', src: 'slides/Slides/Slides.040.png' },
        { type: 'video', src: 'slides/Slide 40_compressed.mp4' },
        { type: 'image', src: 'slides/Slides/Slides.041.png' }
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

        // Add click handler if URL exists
        if (media.url) {
            slide.style.cursor = 'pointer';
            slide.addEventListener('click', () => {
                window.open(media.url, '_blank'); // Open in new tab
            });
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
        // Play the video if it exists
        if (video) video.play();

        // For the first video, we need to mute it to ensure autoplay is possible
        if (video && index === 0) {
            video.muted = true;
            video.play();
        }

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
    document.addEventListener('keydown', function (event) {
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
    let touchStartTime = 0;

    function handleTouchStart(event) {
        touchStartX = event.changedTouches[0].screenX;
        touchStartTime = new Date().getTime();
    }

    function handleTouchMove(event) {
        touchEndX = event.changedTouches[0].screenX;
    }

    // Define a minimum swipe distance (in pixels) for swipe actions to be considered valid
    const swipeThreshold = 50; // you can adjust this value based on your needs
    const timeThreshold = 500; // maximum time allowed to swipe

    function handleTouchEnd() {
        const swipeDistance = Math.abs(touchEndX - touchStartX);
        const touchEndTime = new Date().getTime(); // record the time when the touch ends
        const swipeDuration = touchEndTime - touchStartTime; // calculate the duration of the swipe

        if (swipeDistance > swipeThreshold && swipeDuration < timeThreshold) { // Only consider a swipe if it exceeds the threshold
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