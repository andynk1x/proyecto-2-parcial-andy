const body = document.body;
const blackBtn = document.querySelector('.black-btn');
const whiteBtn = document.querySelector('.white-btn');
const imageCard = document.getElementById('imageCard');
const cartButton = document.getElementById('cartButton');
const form = document.querySelector('.form-card');
const colorInput = document.getElementById('colorInput');


const blackCar = "https://res.cloudinary.com/unix-center/image/upload/c_limit,dpr_3.0,f_auto,fl_progressive,g_center,h_580,q_75,w_906/giy3ihqtb1mrqybodl3a.jpg";
const whiteCar = "https://img.sm360.ca/images/article/humberviewgroup-941/114236//410908_2021_mercedes-benz_gle-class1684437019338.jpg";

imageCard.style.backgroundImage = `url(${blackCar})`;


blackBtn.addEventListener('click', () => {
    colorInput.value = "negro";

    body.style.background = "#0a0a0a";
    body.style.color = "white";

    document.querySelector('.product-card').style.background = "#1a1a1a";
    document.querySelector('.form-card').style.background = "#1a1a1a";

    cartButton.style.background = "#afa2a2";

    imageCard.style.backgroundImage = `url(${blackCar})`;
});


whiteBtn.addEventListener('click', () => {
    colorInput.value = "blanco";

    body.style.background = "#000000";
    body.style.color = "#111";

    document.querySelector('.product-card').style.background = "#fffdfd";
    document.querySelector('.form-card').style.background = "#000000";

    cartButton.style.background = "#111";
    cartButton.style.color = "#000000";

    imageCard.style.backgroundImage = `url(${whiteCar})`;
});

cartButton.addEventListener('click', () => {
    cartButton.textContent = "✔ Agregado";
    cartButton.style.background = "green";

    setTimeout(() => {
        cartButton.textContent = "Agregar al carrito";
        cartButton.style.background = "#ffffff";
    }, 2000);
});


form.addEventListener('submit', (e) => {
    const nombre = form.querySelector('input[name="nombre"]').value.trim();
    const edad = form.querySelector('input[name="edad"]').value;

    if (nombre === "" || edad === "") {
        e.preventDefault();
        alert("Completa todos los campos");
    }

    if (edad <= 0) {
        e.preventDefault();
        alert("Edad inválida");
    }
});