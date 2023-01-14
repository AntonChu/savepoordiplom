const button = document.getElementsByClassName('light-mode-button');
const theme = document.getElementsByTagName('link');
const banners = document.getElementsByClassName('main-theme');
const searchbutton = document.getElementsByClassName('search-button');
const popup = document.getElementsByClassName('popup');
const closeButton = document.getElementsByClassName('close-button');
const carouselDots = document.getElementsByClassName('carousel-navigation-button');

const bannersArr = Array.from(banners);
const carouselNavigation = Array.from(carouselDots);

setLightTheme();
theme[0].setAttribute('href', `${localStorage.lightTheme}`);
bannerSlider();

button[0].onclick = function() {
    if (theme[0].getAttribute('href') === 'css/darkstyle.css') {
        theme[0].setAttribute('href', 'css/style.css');
        localStorage.lightTheme = 'css/style.css';
        return;
    }

    if (theme[0].getAttribute('href') === 'css/style.css') {
        theme[0].setAttribute('href', 'css/darkstyle.css');
        localStorage.lightTheme = 'css/darkstyle.css';
        return;
    }
}
   
function setLightTheme() {
    if (localStorage.length === 0) {
        const time =  new Date().toISOString().substring(11, 16);

        if (time > '07:00' && time < '20:00') {
            localStorage.lightTheme = 'css/style.css';
        } else {
            localStorage.lightTheme = 'css/darkstyle.css';
        }
    }
}

function bannerSlider() {
    let index;

    setInterval(() => {
        index = bannersArr.findIndex((item) => item.className.includes('main-active'));
        console.log(index);

        if (index < bannersArr.length - 1) {
            bannersArr[index].classList.toggle('main-active');
            bannersArr[++index].classList.toggle('main-active');
        } else {
            bannersArr[index].classList.toggle('main-active');
            index = 0;
            bannersArr[index].classList.toggle('main-active');
        }
    }, 5000)
}

searchbutton[0].onclick = function() {
    popup[0].classList.toggle('popup-active');
}

closeButton[0].onclick = function() {
    popup[0].classList.toggle('popup-active');
}

carouselNavigation.forEach((item) => item.onclick = function() {
    carouselNavigation.forEach((el) => el.className = 'carousel-navigation-button');
    item.classList.toggle('carousel-active'); 
})