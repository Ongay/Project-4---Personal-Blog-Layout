const menuToggle = document.querySelector('#menu-toggle');
const mobileNavContainer = document.querySelector('#mobile-nav');

menuToggle.onclick = () => {
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('mobile-nav--active');
};

let topSlideImg;
const imgArr = [];

for (let i = 1; i < 4; i++) {
    let image = document.createElement('img');
    image.src = `images/${i}.jpg`;
    image.alt = `Some slide image ${i}`;
    image.id = `slide__image_${i}`;
    image.dataset.x = `${i}`;
    image.style.position = 'absolute';
    image.style.top = '-100%';
    image.style.left = '0';
    imgArr.push(image);
    document.querySelector('.top__images_wrap').append(image);
}

function renderSlideImage() {
    let inputArr = document.querySelectorAll('.slider__btn');
    inputArr.forEach(item => {
        if (item.checked == true) {
            imgArr.forEach(image => {
                if (image.dataset.x == item.dataset.x) {
                    image.style.top = '0';
                    image.style.position = 'unset';
                    topSlideImg = image;
                }
            });
        }
    })
}
renderSlideImage();

function changeImg(bullet) {
    let num = bullet.target.dataset.x;
    let imgNum = topSlideImg.dataset.x;
    if (num > imgNum) {
        topSlideImg.style.position = 'absolute';
        topSlideImg.style.top = '100%';
        imgArr.forEach(image => {
            if (image.dataset.x == num) {
                image.style.top = '0';
                image.style.position = 'unset';
                topSlideImg = image;
            }
        })
    } else if (num < imgNum) {
        topSlideImg.style.position = 'absolute';
        topSlideImg.style.top = '-100%';
        imgArr.forEach(image => {
            if (image.dataset.x == num) {
                image.style.top = '0';
                image.style.position = 'unset';
                topSlideImg = image;
            }
        })
    }
};

function slideLeft() {
    let num = topSlideImg.dataset.x;
    topSlideImg.style.position = 'absolute';
    topSlideImg.style.top = '-100%';
    imgArr.forEach(image => {
        if (image.dataset.x == num) {
            image.style.top = '0';
            image.style.position = 'unset';
            topSlideImg = image;

        }
    })
}