export function slider() {

    //Слайдер Центр офтальмологии
    const tabSlider = new Swiper('.tab__slider', {
        loop: true,
        centeredSlides: false,
        clickable: true,
        spaceBetween: 20,
        navigation: {
            nextEl: '.tab__slider-prev',
            prevEl: '.tab__slider-next',
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
            },
            425: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 2,
            },
        },
    });

    const aboutSlider = new Swiper('.about__main-slider', {
        loop: true,
        centeredSlides: true,
        slidesPerView: 1,
        slideShow: 1,
        spaceBetween: 20,
        clickable: true,
        navigation: {
            nextEl: '.about__main-prev',
            prevEl: '.about__main-next',
        },
        pagination: {
            el: '.about__main-pagination',
            type:'bullets',
            clickable: true,
        },
    });

    const aboutPageSlider = new Swiper('.about__list-slider', {
        loop: true,
        centeredSlides: false,
        slideShow: 1,
        clickable: true,
        navigation: {
            nextEl: '.about__about-prev',
            prevEl: '.about__about-next',
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            425: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1199: {
                slidesPerView: 1,
                spaceBetween: 70,
            },
        },
    });

    const aboutReviewsSlider = new Swiper('.reviews', {
        loop: true,
        centeredSlides: false,
        slideShow: 2,
        clickable: true,
        navigation: {
            nextEl: '.reviews__prev',
            prevEl: '.reviews__next',
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            425: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1199: {
                slidesPerView: 2,
                spaceBetween: 70,
            },
        },
    });

    const answersSlider = new Swiper('.answers__video-list', {
        loop: false,
        centeredSlides: false,
        slideShow: 3,
        clickable: true,
        navigation: {
            nextEl: '.answers__video-prev',
            prevEl: '.answers__video-next',
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            425: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1199: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1700: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });

    const doctorName = new Swiper(".doctors__list-name", {
        spaceBetween: 20,
        slidesPerView: 1,
        freeMode: false,
        watchSlidesProgress: false,
        clickable: true,
        navigation: {
            nextEl: '.doctors__list-prev',
            prevEl: '.doctors__list-next',
        },
    });
    const doctorCard = new Swiper(".doctors__card-wrapper", {
        slidesPerView: 1,
        navigation: {
            nextEl: '.doctors__card-prev',
            prevEl: '.doctors__card-next',
        },
        thumbs: {
            swiper: doctorName
        },
        breakpoints: {
            320: {
                spaceBetween: 20,
            },
            767: {
                spaceBetween: 30,
            },
            1199: {
                spaceBetween: 70,
            },
        },
    });
}

