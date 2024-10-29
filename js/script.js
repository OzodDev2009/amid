gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const t1 = gsap.timeline({ defaults: { duration: 0.25 } })
t1.from('.logo', { y: -50, opacity: 0 })
    .from('.link1', { y: -50, opacity: 0 })
    .from('.link2', { y: -50, opacity: 0 })
    .from('.link3', { y: -50, opacity: 0 })
    .from('.link4', { y: -50, opacity: 0 })
    .from('.nav-btn', { y: -50, opacity: 0 })

const t2 = gsap.timeline({ defaults: { duration: 0.50 } })
    .from('.main__info', { x: -50, opacity: 0 })
    .from('.main__img', { x: 50, opacity: 0 })
    .from('.imgs', { x: 50, opacity: 0 })

const t3 = gsap.timeline({ defaults: { duration: 0.50 } })
    .from('.img1', { y: -50, opacity: 0 })
    .from('.img2', { y: -50, opacity: 0 })
    .from('.img3', { y: -50, opacity: 0 })
    .from('.img4', { y: -50, opacity: 0 })
    .from('.img5', { y: 50, opacity: 0 })
    .from('.img6', { y: 50, opacity: 0 })
    .from('.img7', { y: 50, opacity: 0 })
    .from('.img8', { y: 50, opacity: 0 })

const t4 = gsap.timeline({ defaults: { duration: 0.50 } })
    .from('.texts-title', { x: -50, opacity: 0 })
    .from('.texts-text', { x: 50, opacity: 0 })

const gamburger = document.querySelector('.gamburger');
const nav = document.querySelector('.navbar');
const navBtn = document.querySelector('.navbar-btn');

gamburger.addEventListener('click', function () {
    nav.classList.toggle('navActive')
    navBtn.classList.toggle('navButton')
})

console.log(gamburger);
console.log(nav);

var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

console.log(swiper);

var myGallery = document.getElementById('myGallery')
lightGallery(myGallery)

console.log(myGallery);

function animateNumber(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 100);

    const updateNumber = () => {
        if (start < target) {
            start += increment;
            element.textContent = Math.min(Math.floor(start), target);
            requestAnimationFrame(updateNumber);
        } else {
            element.textContent = target;
        }
    };

    updateNumber();
}

const spans = document.querySelectorAll('.span1');

spans.forEach(span => {
    const target = parseInt(span.getAttribute('data-target'));
    animateNumber(span, target, 10000);
});