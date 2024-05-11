document.addEventListener("DOMContentLoaded", function() {
    const mediaSources = [
        { type: 'video', src: 'slides/Slide 1.m4v' },
        { type: 'video', src: 'slides/Slide 2.m4v' },
        { type: 'image', src: 'slides/Slides/Slides.003.png'},
        { type: 'video', src: 'slides/Slide 4.m4v' },
        { type: 'video', src: 'slides/Slide 6.m4v' },
        { type: 'video', src: 'slides/Slide 7.m4v' },
        { type: 'video', src: 'slides/Slide 8.m4v' },
        { type: 'image', src: 'slides/Slides/Slides.009.png'},
        { type: 'image', src: 'slides/Slides/Slides.010.png'},
        { type: 'image', src: 'slides/Slides/Slides.011.png'},
        { type: 'image', src: 'slides/Slides/Slides.012.png'},
        { type: 'image', src: 'slides/Slides/Slides.013.png'},
        { type: 'video', src: 'slides/Slide 14.m4v' },
        { type: 'video', src: 'slides/Slide 15.m4v' },
        { type: 'video', src: 'slides/Slide 16.m4v' },
        { type: 'video', src: 'slides/Slide 17.m4v' },
        { type: 'video', src: 'slides/Slide 18.m4v' },
        { type: 'video', src: 'slides/Slide 19.m4v' },
        { type: 'video', src: 'slides/Slide 20.m4v' },
        { type: 'video', src: 'slides/Slide 22.m4v' },
        { type: 'video', src: 'slides/Slide 23.m4v' },
        { type: 'video', src: 'slides/Slide 24.m4v' },
        { type: 'video', src: 'slides/Slide 30.m4v' },
        { type: 'video', src: 'slides/Slide 31.m4v' },
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
            }
        });
    
        slides[index].style.display = 'block';
        const video = slides[index].querySelector('video');
        if (video) video.play();
        currentSlide = index;
        updateSlideNumber(index); // Update slide number display
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

    // Initialize the first slide
    showSlide(0);
});