import {slider} from './slider';

slider()

const SEARCH_BTN = document.querySelector('.header__search')
const SEARCH = document.querySelector('.search')
const CLOSE = document.querySelector('.search__close')
const MENU_BTN = document.querySelector('.header__menu-btn')
const MENU = document.querySelector('.header__mobile')
const LANG_ITEM = document.querySelectorAll('.lang-item')
const FILTER_ITEM = document.querySelectorAll('.main-services__filter-item')

const MODAL_BG = document.querySelector('.modal-bg')
const MODAL_SERVICE = document.querySelector('.modal-service')

const CLOSE_MODAL = document.querySelectorAll('.modal__cole-btn')
const SERVICE_LIST = document.querySelector('.main-services__list')
const SERVICE_ITEM = document.querySelectorAll('.main-services__list-item')
const SERVICE_WRAP = document.querySelector('.main-services__wrapper')
const META_BLOCK = document.querySelector('.meta__block')
const META_WRAP = document.querySelector('.meta__block-wrapper')
const META_BTN = document.querySelector('.meta__btn')
const SERVICE_BTN = document.querySelector('.main-services__btn')

// для тестов

//Меню
MENU_BTN.onclick = function () {
    MENU_BTN.classList.toggle('active')
    MENU.classList.toggle('active')
};

//Поиск
SEARCH_BTN.onclick = function () {
    SEARCH.classList.toggle('active')
};

CLOSE.onclick = function () {
    SEARCH.classList.remove('active')
};


// Спрятать/Показать кнопку ЕЩЕ в блоке (Вас может заинтересовать) и (наши услуги)
function servicesBlock () {
    let heightList = SERVICE_LIST.clientHeight
    let heightWrap = SERVICE_WRAP.clientHeight

    if (heightWrap <= heightList) {
        SERVICE_BTN.style.display = 'none'
    }
}
servicesBlock ()

function metaBlock () {
    let heightList = META_BLOCK.clientHeight
    let heightWrap = META_WRAP.clientHeight

    if (heightWrap <= heightList) {
        META_BTN.style.display = 'none'
    }
}
metaBlock ()


//Показать/Спрятать элементы
SERVICE_BTN.addEventListener('click', () =>{
    SERVICE_LIST.classList.toggle('active')
    SERVICE_BTN.classList.toggle('active')
})

META_BTN.addEventListener('click', () =>{
    META_BLOCK.classList.toggle('active')
    META_BTN.classList.toggle('active')
})

SERVICE_ITEM.forEach((item) =>{
    item.addEventListener('click', () =>{
        MODAL_SERVICE.classList.add('active')
        MODAL_BG.classList.add('active')
    })
})

MODAL_BG.addEventListener('click', () => {
    MODAL_BG.classList.remove('active')
    MODAL_SERVICE.classList.remove('active')
})

CLOSE_MODAL.forEach((item) => {
    item.addEventListener('click', () => {
        MODAL_BG.classList.remove('active')
        MODAL_SERVICE.classList.remove('active')
    })
})



FILTER_ITEM.forEach((item) => {
    item.addEventListener('click', () => {
        FILTER_ITEM.forEach((item) => {
            item.classList.remove('active')
        })
        item.classList.add('active')
    })
})


const QUESTIONS = document.querySelectorAll('.questions__item-title')
const QUESTIONS_BTN = document.querySelectorAll('.questions__btn-open')

if (QUESTIONS) {
    const closeButtons = document.querySelectorAll('.questions__btn-close')

    QUESTIONS.forEach((item) => {
        item.addEventListener('click', () => {

            if (item.parentElement.classList.contains('active')) {
                item.parentElement.classList.remove('active')
            } else {
                closeAllQuestions()
                item.parentElement.classList.add('active')
            }
        })
    })

    QUESTIONS_BTN.forEach((item) => {
        item.addEventListener('click', () => {

            if (item.parentElement.classList.contains('active')) {
                item.parentElement.classList.remove('active')
            } else {
                closeAllQuestions()
                item.parentElement.classList.add('active')
            }
        })
    })

    closeButtons.forEach((item) => {
        item.addEventListener('click', () => {
            closeAllQuestions()
        })
    })

    function closeAllQuestions() {
        QUESTIONS.forEach((item) => {
            item.parentElement.classList.remove('active')
        })
        QUESTIONS_BTN.forEach((item) => {
            item.parentElement.classList.remove('active')
        })
    }
}



LANG_ITEM.forEach((item) => {
    item.addEventListener('click', () => {
        LANG_ITEM.forEach((item) => {
            item.classList.remove('active')
        })
        item.classList.add('active')
    })
})

//Раскрытие фильтра в мобильной версии
const TAB_LIST = document.querySelectorAll('.tab')

TAB_LIST.forEach((item) =>{
    item.addEventListener('click', () => {
        item.classList.toggle('active')
    })
})


// Установка выбранного таба


function setActiveSlider2(activeSlider) {
    const FEATURES_SLIDER = document.querySelectorAll('.features__slider')
    FEATURES_SLIDER.forEach((item) => {
        if (item.getAttribute('data-item') !== activeSlider) {
            item.classList.remove('active')
        } else {
            item.classList.add('active')
        }
    })
}
const FEATURES_TAB = document.querySelectorAll('.features__tab-item')
FEATURES_TAB.forEach((item) => {
    item.addEventListener('click', () => {
        FEATURES_TAB.forEach((item) => {
            item.classList.remove('active')
        })
        item.classList.add('active')
        setActiveSlider2(item.getAttribute('data-item'))
    })
})
setActiveSlider2('1')


function setActiveSlider3(activeSlider) {
    const ABOUT_SLIDER = document.querySelectorAll('.about-item')
    ABOUT_SLIDER.forEach((item) => {
        if (item.getAttribute('data-item') !== activeSlider) {
            item.classList.remove('active')
        } else {
            item.classList.add('active')
        }
    })
}
const ABOUT_TAB = document.querySelectorAll('.about__tab-item')
ABOUT_TAB.forEach((item) => {
    item.addEventListener('click', () => {
        ABOUT_TAB.forEach((item) => {
            item.classList.remove('active')
        })
        item.classList.add('active')
        setActiveSlider3(item.getAttribute('data-item'))
    })
})
setActiveSlider3('1')


function setActiveTab(activeTab) {
    const QUESTIONS_LIST = document.querySelectorAll('.questions__list')
    QUESTIONS_LIST.forEach((item) => {
        if (item.getAttribute('data-item') !== activeTab) {
            item.classList.remove('active')
        } else {
            item.classList.add('active')
        }
    })
}
const QUESTIONS_TAB = document.querySelectorAll('.questions__tab-item')
QUESTIONS_TAB.forEach((item) => {
    item.addEventListener('click', () => {
        QUESTIONS_TAB.forEach((item) => {
            item.classList.remove('active')
        })
        item.classList.add('active')
        setActiveTab(item.getAttribute('data-item'))
    })
})
setActiveTab('1')


function setActiveService(activeService) {
    const SERVICE_SLIDER = document.querySelectorAll('.service__slider')
    SERVICE_SLIDER.forEach((item) => {
        if (item.getAttribute('data-item') !== activeService) {
            item.classList.remove('active')
        } else {
            item.classList.add('active')
        }
    })
}
const SERVICE_TAB = document.querySelectorAll('.service__tab-item')
SERVICE_TAB.forEach((item) => {
    item.addEventListener('click', () => {
        SERVICE_TAB.forEach((item) => {
            item.classList.remove('active')
        })
        item.classList.add('active')
        setActiveService(item.getAttribute('data-item'))
    })
})
setActiveService('1')


const DOC_TILE = document.querySelectorAll('.doctors__card-title')
const LIST = document.querySelector('.swiper-wrapper')
DOC_TILE.forEach( (item) =>{
    LIST.innerHTML += '<div class="swiper-slide">'+'<div class="doctors__name-item" >' + item.innerHTML + '</div>'+'</div>'
})

