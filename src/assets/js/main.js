//  First Tab Slider initialization
var swiper = new Swiper(".timelessSwiper", {
    slidesPerView: 1.5,
    spaceBetween: 10,
    breakpoints: {
        640: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3.5,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4.5,
            spaceBetween: 30,
        },
    },
    scrollbar: {
        el: ".timeless-swiper-scrollbar",
        draggable: true
    },
});

//  Second Tab Slider initialization
var swiper = new Swiper(".trendingSwiper", {
    slidesPerView: 1.5,
    spaceBetween: 10,
    breakpoints: {
        640: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3.5,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4.5,
            spaceBetween: 30,
        },
    },
    scrollbar: {
        el: ".trending-swiper-scrollbar",
        draggable: true
    },
});

//  Third Tab Slider initialization
var swiper = new Swiper(".kidsSwiper", {
    slidesPerView: 1.5,
    spaceBetween: 10,
    breakpoints: {
        640: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3.5,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4.5,
            spaceBetween: 30,
        },
    },
    scrollbar: {
        el: ".kids-swiper-scrollbar",
        draggable: true
    },
});


// GSAP Animation code

document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const elementX = (mouseX / window.innerWidth) * 50;
    const elementY = (mouseY / window.innerHeight) * 50;

    // Animate the element using GSAP
    gsap.to(".blue-shape,.orange-shape,.green-shape", {
        rotateX: -elementX,
        rotateY: -elementY,
        duration: 0.5,
        ease: "power2.out"
    });
});

// Text animation 

const texts = document.querySelectorAll('.text-animation');
texts.forEach(text => {
    const splitText = new SplitType(text, { types: 'words, chars' });

    gsap.from(splitText.chars, {
        duration: 0.5,
        y: 100,
        opacity:0.2,
        stagger: 0.02,
        ease: "power2.out",
        scrollTrigger: {
            trigger: text,
            start: 'top 80%',
            // scrub: 1, // optional if we need smooth scrubbing on scroll animation
            // toggleActions: 'play none none reverse'
        }
    });
});

// box fade up animation
gsap.from('.box', {
    duration: 0.5,
    opacity: 0,
    y: 100,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".third-section",
        start: 'top 80%',
    }
});
gsap.from('.tab-content', {
    duration: 0.5,
    delay: 0.2,
    opacity: 0,
    xPercent: 100,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".tab-content",
        start: 'top 80%',
    }
});
