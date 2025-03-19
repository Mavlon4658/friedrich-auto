const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

function getCurrentTime() {
    const now = new Date();

    const options = { timeZone: "Europe/Moscow", hour: "2-digit", minute: "2-digit", hour12: false };
    const formatter = new Intl.DateTimeFormat("ru-RU", options);

    const parts = formatter.formatToParts(now);
    const hours = parts.find(part => part.type === "hour").value;
    const minutes = parts.find(part => part.type === "minute").value;

    return { 
        hour: +hours, 
        minute: +minutes
    };
}

const timeTable = document.querySelectorAll('.header-phone');


if (getCurrentTime().hour >= 10 && getCurrentTime().hour < 20) {
    timeTable.forEach(el => {
        el.classList.add('active');
    })
} else {
    timeTable.forEach(el => {
        el.classList.remove('active');
    })
}

// modals
const modalCls = ['.diagnostic-modal', '.car-modal', '.rent-modal'];

modalCls.forEach(cls => {
    const modal = document.querySelector(cls);
    const modalOpenBtns = document.querySelectorAll(`${cls}__open`);
    const modalCloseBtn = document.querySelector(`${cls} .modal-close`);
    const modalBg = document.querySelector(`${cls} .modal-bg`);

    const modalClose = () => {
        bodyVisible();
        modal.classList.remove('active');
        modal.classList.add('end-active');
        setTimeout(() => {
            modal.classList.remove('end-active');
        }, 400);
    }

    if (modalOpenBtns.length) {
        modalOpenBtns.forEach(btn => {
            btn.onclick = e => {
                e.preventDefault();
                modal.classList.add('active');
                bodyHidden();
            }
        })
    
        modalCloseBtn.onclick = () => modalClose();
    
        modalBg.onclick = () => modalClose();
    }

})
// modals end

const carModalSwp = new Swiper('.car-modal__left .swiper', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.car-modal__left .btn-next',
        prevEl: '.car-modal__left .btn-prev',
    }
})

const carModalCardList = document.querySelectorAll('.car-modal__left ul li');

if (carModalSwp) {
    carModalCardList.forEach((el, elID) => {
        el.onclick = () => {
            carModalSwp.slideTo(elID);
        }
    })

    carModalSwp.on('slideChange', function (e) {
        carModalCardList.forEach((item, itemID) => {
            if (itemID == carModalSwp.realIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        })
    });
}

const header = document.querySelector('header.header');
const fixedPanel = document.querySelector('.fixed-panel');

function handleScroll () {
    if (scrollY > 100) {
        header.classList.add('fixed');
        fixedPanel.classList.add('active');
    } else {
        header.classList.remove('fixed');
        fixedPanel.classList.remove('active');
    }
}

handleScroll();

window.addEventListener('scroll', function () {
    handleScroll();
})

const homeSwp = new Swiper('.home .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 13,
    speed: 4000,
    loop: true,
    autoplay: {
        delay: 0,
        reverseDirection: false,
        disableOnInteraction: false,
    },
    watchSlidesProgress: false,
    allowTouchMove: false,
    breakpoints: {
        700: {
            spaceBetween: 20
        }
    }
})

const caseSwp = new Swiper('.cases .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    freeMode: true,
    breakpoints: {
        1550: {
            slidesPerView: 3,
            spaceBetween: 30,
            freeMode: false,
        },
        1050: {
            slidesPerView: 2,
            spaceBetween: 30,
            freeMode: false,
        }
    }
})

const reviewSwp = new Swiper('.reviews .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    freeMode: true,
    speed: 900,
    loop: true,
    autoplay: {
        delay: 3000,
    },
    watchSlidesProgress: false,
    // allowTouchMove: false,
    breakpoints: {
        700: {
            spaceBetween: 24,
            freeMode: false,
        }
    },
    navigation: {
        nextEl: '.reviews .btn-next',
        prevEl: '.reviews .btn-prev',
    }
});

const carService = new Swiper('.car-service__swp .swiper', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.car-service__swp .btn-next',
        prevEl: '.car-service__swp .btn-prev',
    }
})

const carServiceCards = document.querySelectorAll('.car-service__left ul li');

if (carServiceCards.length) {
    carServiceCards.forEach((el, elID) => {
        el.onclick = () => {
            carService.slideTo(elID);
        }
    });

    carService.on('slideChange', function (e) {
        carServiceCards.forEach((item, itemID) => {
            if (itemID == carService.realIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    });
    
}

const phoneInp = document.querySelectorAll('input[type="tel"]');

if (phoneInp.length) {
    phoneInp.forEach(el => {
        IMask(el, {
            mask: '+{7}(000) 000-00-00',
        })
    });
}

const navs = document.querySelector('.navigation');
const navsBg = document.querySelector('.navigation-bg');
const navsCloseBtn = document.querySelector('.navigation .btn-close');
const navsOpenBtn = document.querySelector('.navigation-open');

if (navs) {
    navsOpenBtn.onclick = () => {
        navs.classList.add('active');
        bodyHidden();
    }

    const navsClose = () => {
        navs.classList.remove('active');
        navs.classList.add('end-active');
        bodyVisible();
        setTimeout(() => {
            navs.classList.remove('end-active');
        }, 400);
    }

    navsCloseBtn.onclick = () => navsClose();
    navsBg.onclick = () => navsClose();
}

document.querySelectorAll('.wrapper .tn-atom').forEach(element => {
    element.classList.add('autoink');

    const pEl = document.createElement('div');
    pEl.className = 'autoink-icon';
    
    let div = document.createElement('div');
    div.className = 'ink animate';
    div.style.cssText = 'height: 200px; width: 250px; top: -20px; left: -140px;';
    
    pEl.appendChild(div);
    element.appendChild(pEl);
});

const determineText = document.querySelectorAll('.determine-content__right ul li');
const determineImg = document.querySelectorAll('.determine-content__left .main-img');
let clrInterval;

if (determineText.length) {
    const changeDetermineEl = (ID) => {
        determineText.forEach((el, elID) => {
            if (ID == elID) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        })
        determineImg.forEach((el, elID) => {
            if (ID == elID) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        })
    }
    let count = 0;

    clrInterval = setInterval(() => {
        count++;
        changeDetermineEl(count);

        if (count == 4) {
            count = -1;
        }
    }, 4000);

    determineText.forEach((el, elID) => {
        el.onclick = () => {
            clearInterval(clrInterval);
            changeDetermineEl(elID);
            count = elID;
            clrInterval = setInterval(() => {
                count++;
                changeDetermineEl(count);
        
                if (count == 4) {
                    count = -1;
                }
            }, 4000);
        }
    })
}

const offerSwp = new Swiper('.offer-swp .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    freeMode: true,
    breakpoints: {
        spaceBetween: 30,
        freeMode: false,
    },
    navigation: {
        nextEl: '.offer .btn-swp__next',
        prevEl: '.offer .btn-swp__prev',
    }
})

function getDateAfterDays() {
    let today = new Date();
    today.setDate(today.getDate() + 7);
    
    let day = today.getDate().toString().padStart(2, '0');
    let month = (today.getMonth() + 1).toString().padStart(2, '0');
    
    return `${day}.${month}`;
}

const discoutDay = document.querySelector('.discount-day');

if (discoutDay) {
    discoutDay.textContent = getDateAfterDays();
}

let NameAry = ['Николай', 'Александр', 'Андрей', 'Сергей', 'Дмитрий', 'Алексей', 'Игорь', 'Олег', 'Владимир', 'Евгений', 'Антон', 'Павел'];
let days = ['13.03.2025', '09.03.2025', '08.03.2025', '03.03.2025', '01.03.2025', '28.02.2025', '27.02.2025', '22.02.2025', '18.02.2025', '10.02.2025', '24.01.2025', '20.01.2025', '15.01.2025', '14.01.2025', '05.01.2025']

function getRandomDateLastTwoMonths() {
    let dayIndex = Math.floor(Math.random() * days.length);
    return days[dayIndex];
}

function getRandomName() {
    
    let randomIndex = Math.floor(Math.random() * NameAry.length);
    return NameAry[randomIndex];
}

const homeCardHead = document.querySelectorAll('.home-card__head .name');
if (homeCardHead.length) {
    homeCardHead.forEach(el => {
        el.textContent = getRandomDateLastTwoMonths() + ', ' + getRandomName();
    })
}