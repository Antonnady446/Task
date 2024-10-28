var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.left-arrow',
        prevEl: '.right-arrow',
    },
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
});
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.left-arrow',
        prevEl: '.right-arrow',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    on: {
        slideChange: updateSlideNumber,
    }
});

function updateSlideNumber() {
    var currentIndex = swiper.realIndex + 1;
    var totalSlides = swiper.slides.length - 2;
    document.querySelector('.end-number').textContent = currentIndex;
    document.querySelector('.start-number').textContent = totalSlides;
}
updateSlideNumber();
