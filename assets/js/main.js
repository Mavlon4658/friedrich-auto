const homeSwp = new Swiper('.home .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
})

const caseSwp = new Swiper('.cases .swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
})

const reviewSwp = new Swiper('.reviews .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 24,
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