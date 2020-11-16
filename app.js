const card = document.querySelector('.card');
const container = document.querySelector('.container');

const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.description');
const sizes = document.querySelector('.sizes');

container.addEventListener('mousemove', function (e) {
    let axisX = (window.innerWidth / 2 - e.pageX) / 25;
    let axisY = (window.innerHeight / 2 - e.pageY )/ 25;
    
    card.style.transform = `rotateY(${axisX}deg) rotateX(${axisY}deg)`;
}) 

container.addEventListener('mouseenter', function () {
    card.style.transition = "none";
    title.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(200px) rotateZ(-35deg)";
    purchase.style.transform = "translateZ(150px)";
    description.style.transform = "translateZ(150px)";
    sizes.style.transform = "translateZ(150px)";
})

container.addEventListener('mouseleave', function () {
    card.style.transition = "all 0.5s ease";
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    purchase.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
})

container.addEventListener('touchmove', function () {
    let axisX = (window.innerWidth / 2 - e.pageX) / 25;
    let axisY = (window.innerHeight / 2 - e.pageY )/ 25;
    
    card.style.transform = `rotateY(${axisX}deg) rotateX(${axisY}deg)`;
})

container.addEventListener('touchmove', function () {
    card.style.transition = "none";
    title.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(200px) rotateZ(-35deg)";
    purchase.style.transform = "translateZ(150px)";
    description.style.transform = "translateZ(150px)";
    sizes.style.transform = "translateZ(150px)";
})

container.addEventListener('touchend', function () {
    card.style.transition = "all 0.5s ease";
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    purchase.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
})