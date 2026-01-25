/* public/script.js - VERSIONE FINALE */

/* =========================================
   1. SISTEMA PARTICELLE - "WHO AM I?"
   ========================================= */
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particlesArray = [];

// Impostiamo la dimensione del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Gestiamo il ridimensionamento della finestra
window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init(); // Ricalcoliamo tutto se la finestra cambia
});

// Classe Particella
class Particle {
    constructor(x, y) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.destX = x;
        this.destY = y;
        this.size = Math.random() * 2 + 1;
        this.speed = Math.random() * 0.05 + 0.02;
        this.friction = Math.random() * 0.9 + 0.1;
    }

    update() {
        let dx = this.destX - this.x;
        let dy = this.destY - this.y;
        this.x += dx * this.speed;
        this.y += dy * this.speed;
    }

    draw() {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

function init() {
    particlesArray = [];
    
    // Calcolo font responsive
    let fontSize = window.innerWidth < 768 ? 40 : 80;

    ctx.fillStyle = 'white';
    ctx.font = `bold ${fontSize}px Verdana`; 
    ctx.textAlign = 'center';
    ctx.fillText('WHO AM I?', canvas.width/2, canvas.height/2);

    const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height);
    for (let y = 0; y < textCoordinates.height; y += 7) {
        for (let x = 0; x < textCoordinates.width; x += 7) {
            if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
                let positionX = x;
                let positionY = y;
                particlesArray.push(new Particle(positionX, positionY));
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    requestAnimationFrame(animate);
}

// Avvia le particelle
init();
animate();


/* =========================================
   2. GSAP IMAGE TRAIL (About Me Section)
   ========================================= */
const images = gsap.utils.toArray(".Hero__image");
const section = document.getElementById("identity-section");
const gap = 100; // Distanza tra le foto
let index = 0; 
const wrapper = gsap.utils.wrap(0, images.length);

let mousePos = { x: 0, y: 0 };
let lastMousePos = { x: 0, y: 0 };
let cachedMousePos = { x: 0, y: 0 };
let isHovering = false;

if (section) {
    section.addEventListener("mousemove", (e) => {
        mousePos.x = e.clientX;
        mousePos.y = e.clientY;
        isHovering = true;
    });

    section.addEventListener("mouseenter", (e) => {
        lastMousePos.x = e.clientX;
        lastMousePos.y = e.clientY;
        cachedMousePos.x = e.clientX;
        cachedMousePos.y = e.clientY;
        mousePos.x = e.clientX;
        mousePos.y = e.clientY;
        isHovering = true;
    });

    section.addEventListener("mouseleave", () => {
        isHovering = false;
    });
}

function playAnimation(img) {
    let tl = gsap.timeline();
    tl.from(img, {
        scale: 0.5,
        duration: 0.5,
        ease: "power1.out"
    })
    .to(img, {
        y: window.innerHeight + 200,
        rotation: "random([-60, 60])",
        opacity: 0,
        ease: "power1.in",
        duration: 2
    }, 0);
}

// Controllo per evitare errori se non c'è la sezione
if (images.length > 0 && section) {
    gsap.ticker.add(() => {
        if (!isHovering) return;

        let travelDistance = Math.hypot(
            lastMousePos.x - mousePos.x,
            lastMousePos.y - mousePos.y
        );

        cachedMousePos.x = gsap.utils.interpolate(cachedMousePos.x, mousePos.x, 0.1);
        cachedMousePos.y = gsap.utils.interpolate(cachedMousePos.y, mousePos.y, 0.1);

        if (travelDistance > gap) {
            animateImage();
            lastMousePos.x = mousePos.x;
            lastMousePos.y = mousePos.y;
        }
    });
}

function animateImage() {
    let wrappedIndex = wrapper(index);
    let img = images[wrappedIndex];

    gsap.killTweensOf(img);
    gsap.set(img, { clearProps: "all" });

    gsap.set(img, {
        opacity: 1,
        x: mousePos.x,
        y: mousePos.y,
        xPercent: -50,
        yPercent: -50,
        position: 'fixed',
        pointerEvents: 'none'
    });

    playAnimation(img);
    index++;
}


/* =========================================
   3. SOCIAL TEXT SPLITTER
   ========================================= */
const socialLinks = document.querySelectorAll('.social-split');

if (socialLinks.length > 0) {
    socialLinks.forEach(link => {
        const text = link.innerText.trim();
        link.innerHTML = '';
        
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.innerHTML = char === ' ' ? '&nbsp;' : char;
            span.style.setProperty('--char-index', index);
            link.appendChild(span);
        });
    });
}