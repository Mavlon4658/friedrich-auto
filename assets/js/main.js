const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

const homeSwp = new Swiper('.home .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 13,
    freeMode: true,
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