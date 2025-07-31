let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;
let sliderWidth = document.querySelector('.slider--width').clientWidth;
document.querySelector('.slider--width').style.width = `${sliderWidth * totalSlides}px`;


let goNext = () => {
    currentSlide++;
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

setInterval(goNext, 5000)

// Acabamentos

// Imagens por acabamento
// No seu script.js, dentro do objeto imagesByAcabamento
const imagesByAcabamento = {
    "tijolo": [
        "./src/images/tijolo-join.jpg",
        "./src/images/surf-prototipo-4-compressed.jpg",
        "./src/images/tijolo-branco.jpg"
    ],
    "pedra-madeira": [
        "./src/images/pedra-madeira-ex1.jpg",

    ],
    "pedra-ferro": [
        "./src/images/surf-49-compressed.jpg",

    ],
    "madeira-demolicao": [
        "./src/images/madeira-demolição.jpg",
        
    ],
    "travertino-romano": [
        "./src/images/travertino-romano-exemplo.jpg",
        "./src/images/travertino-romano-ex1.jpg"
    ],
    "tijolo-dry-joint": [
        "./src/images/tijolo-cafe-brasil-ex1.jpeg",
        "./src/images/tijolo-dry-ex2.jpeg"
    ]
};

// Índice atual do carrossel
let currentIndex = 0;

// Abre o modal com imagens específicas
function openModal(acabamento) {
    const carrossel = document.querySelector('.carousel-images');
    carrossel.innerHTML = ''; // Limpa o carrossel

    // Verifica se há imagens disponíveis para o acabamento selecionado
    if (imagesByAcabamento[acabamento]) {
        imagesByAcabamento[acabamento].forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Imagem de ${acabamento}`;
            img.classList.add('carousel-image'); // Adiciona uma classe padrão
            if (index === 0) {
                img.classList.add('active'); // Define a primeira imagem como ativa
            }
            carrossel.appendChild(img);
        });
    } else {
        console.error(`Acabamento "${acabamento}" não encontrado!`);
    }

    // Reseta o índice atual
    currentIndex = 0;

    // Abre o modal
    const modal = document.querySelector('.modal');
    modal.style.display = 'flex';

}

// Fecha o modal
function closeModal() {
    document.querySelector('.modal').style.display = 'none';

}

// Troca a imagem do carrossel
function changeSlide(direction) {
    const images = document.querySelectorAll('.carousel-images img');
    images[currentIndex].classList.remove('active'); // Esconde a imagem atual

    currentIndex = (currentIndex + direction + images.length) % images.length; // Calcula o próximo índice

    images[currentIndex].classList.add('active'); // Mostra a nova imagem
}


var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".navbar a");

    menuBtn.addEventListener("click", function () {
        navbar.classList.toggle("active");
        menuBtn.classList.toggle("open");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navbar.classList.remove("active");
            menuBtn.classList.remove("open");
        });
    });
});













