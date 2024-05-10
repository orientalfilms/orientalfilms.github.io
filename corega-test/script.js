document.addEventListener("DOMContentLoaded", function() {
    const mediaSources = [
        { type: 'image', src: 'slides/Slides/Slides.001.png'},
        { type: 'image', src: 'slides/Slides/Slides.002.png'},
        { type: 'image', src: 'slides/Slides/Slides.003.png'},
        { type: 'image', src: 'slides/Slides/Slides.004.png'},
        { type: 'video', src: 'slides/Slide 5.m4v' },
        { type: 'video', src: 'slides/Slide 6.m4v' },
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
            video.src = media.src;
            video.controls = true;
            video.width = width;  // Set the width of the video
            // video.height = 720; // Set the height of the video
            slide.appendChild(video);
        } else if (media.type === 'image') {
            const image = document.createElement('img');
            image.src = media.src;
            image.alt = "Presentation Image";
            image.width =width;  // Set the width of the video
            //image.height = 720; // Set the height of the video
            slide.appendChild(image);
        }

        slider.appendChild(slide);
    });

    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

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
    }

    function nextSlide() {
        const nextSlide = (currentSlide + 1) % slides.length;
        showSlide(nextSlide);
    }

    function previousSlide() {
        const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prevSlide);
    }

    // document.getElementById('next').addEventListener('click', nextSlide);
    // document.getElementById('prev').addEventListener('click', previousSlide);

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