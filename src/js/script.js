let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;
let sliderWidth = document.querySelector('.slider--width').clientWidth;
document.querySelector('.slider--width').style.width = `${sliderWidth * totalSlides}px`;


let goNext = () => {
    currentSlide++;

    let slidesCorrent = document.querySelectorAll('.slider--corrent');
    slidesCorrent.forEach((itemSlide) => {
        let dataSlide = itemSlide.getAttribute('data-slide-to');
        if (currentSlide == dataSlide) {
            itemSlide.innerHTML += 'Ativo'
        }
    })


    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    updateMarginSlide()
}

let goPrev = () => {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateMarginSlide()
}

let updateMarginSlide = () => {
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth; // Largura de cada slider

    document.querySelector('.slider--width').style.marginLeft = `-${(sliderItemWidth * currentSlide)}px`; //Multiplico pela numero do corrent slide
}

// setInterval(goNext, 3000)
