const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
})

searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add("focused");
    searchInputEl.setAttribute("placeholder", "통합검색");
})

searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove("focused");
    searchInputEl.setAttribute("placeholder", "");
})

const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");
window.addEventListener("scroll", _.throttle(function () {
    if(window.scrollY > 500) {
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: "none"
        });
        gsap.to(toTopEl, .2, {
            x: 0
        });
    } else {
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: "block"
        });
        gsap.to(toTopEl, .2, {
            x: 100
        });
    }
}), 300);

toTopEl.addEventListener("click", function () {
    gsap.to(window, .7, {
        scrollTo: 0
    });
});

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7,
        opacity: 1
    });
});

new Swiper(".notice-line .swiper-container", {
    direction: "vertical",
    autoplay: true,
    loop: true
});

new Swiper(".promotion .swiper-container", {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    delay: 5000,
    autoplay: true,
    loop: true,

    pagination: {
        el: ".promotion .swiper-pagination",
        clickable: true
    },

    navigation: {
        nextEl: ".promotion .swiper-next",
        prevEl: ".promotion .swiper-prev"
    }
});

const promotionEl = document.querySelector(".promotion");
const togglePromotionEl = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
togglePromotionEl.addEventListener("click", function () {
    isHidePromotion = !isHidePromotion;
    if(isHidePromotion) {
        promotionEl.classList.add("hide");
    } else {
        promotionEl.classList.remove("hide");
    }
});

function random(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
};

function floatingObject(selector, delay, size) {
    gsap.to(
        selector, 
        random(1.5, 2.5),
        {
            y: size,
            delay: random(0, delay),
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        }
    );
};

floatingObject(".floating1", .5, 15);
floatingObject(".floating2", 1, 15);
floatingObject(".floating3", 1.5, 20);

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl,
            triggerHook: .8
        })
        .setClassToggle(spyEl, "show")
        .addTo(new ScrollMagic.Controller());
});

new Swiper(".awards .swiper-container", {
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: true,
    loop: true,

    navigation: {
        nextEl: ".awards .swiper-next",
        prevEl: ".awards .swiper-prev"
    }
});

const thisYearEl = document.querySelector(".this-year");
thisYearEl.textContent = new Date().getFullYear();