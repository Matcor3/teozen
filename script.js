// public/script.js

/**
 * SISTEMA PARTICELLE - "WHO AM I?"
 * Teo, qui usiamo HTML5 Canvas. Immagina una tela dove dipingiamo 
 * pixel per pixel.
 */
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

// Classe Particella: definisce cos'è una "stella"
class Particle {
    constructor(x, y) {
        this.x = Math.random() * canvas.width; // Posizione iniziale casuale
        this.y = Math.random() * canvas.height;
        this.destX = x; // Dove deve arrivare (la forma della scritta)
        this.destY = y;
        this.size = Math.random() * 2 + 1; // Grandezza
        this.speed = Math.random() * 0.05 + 0.02; // Velocità di movimento
        this.friction = Math.random() * 0.9 + 0.1;
    }

    // Calcolo della fisica per muovere la particella verso la destinazione
    update() {
        // Distanza tra posizione attuale e destinazione
        let dx = this.destX - this.x;
        let dy = this.destY - this.y;
        
        // Movimento morbido (easing)
        this.x += dx * this.speed;
        this.y += dy * this.speed;
    }

    // Disegna la particella
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
    
    // CALCOLO DINAMICO DEL FONT
    // Se lo schermo è più piccolo di 768px (tablet/mobile), usa font 40px, altrimenti 80px
    let fontSize = window.innerWidth < 768 ? 40 : 80;

    ctx.fillStyle = 'white';
    // Usiamo la variabile fontSize dentro la stringa del font
    ctx.font = `bold ${fontSize}px Verdana`; 
    ctx.textAlign = 'center';
    ctx.fillText('WHO AM I?', canvas.width/2, canvas.height/2);

    // ... (il resto della funzione con getImageData rimane identico) ...
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

// Ciclo di animazione infinito
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Pulisci la tela
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    requestAnimationFrame(animate); // Richiama se stessa al prossimo frame
}

// Avvia le particelle
init();
animate();

// public/script.js - SOSTITUISCI LA PARTE FINALE DI GSAP CON QUESTA

/**
 * GSAP IMAGE TRAIL EFFECT - CONFINATO ALLA SEZIONE
 * Crea una scia di immagini SOLO quando sei su "About Me"
 */

// 1. Configurazioni e Selezione Elementi
const images = gsap.utils.toArray(".Hero__image");
const section = document.getElementById("identity-section"); // Il nostro recinto
const gap = 100; // Distanza tra le foto (più basso = più foto)
let index = 0; 
const wrapper = gsap.utils.wrap(0, images.length);

// Variabili per la posizione del mouse
let mousePos = { x: 0, y: 0 };
let lastMousePos = { x: 0, y: 0 };
let cachedMousePos = { x: 0, y: 0 };
let isHovering = false; // "Interruttore" per sapere se siamo dentro

// 2. Ascoltiamo il mouse SOLO dentro la sezione
section.addEventListener("mousemove", (e) => {
    // Aggiorniamo la posizione solo se siamo dentro
    mousePos.x = e.clientX;
    mousePos.y = e.clientY;
    isHovering = true;
});

// 3. Gestiamo l'entrata nella sezione (per evitare "salti" o scie improvvise)
section.addEventListener("mouseenter", (e) => {
    // Appena entri, allinea subito le coordinate vecchie con quelle nuove
    lastMousePos.x = e.clientX;
    lastMousePos.y = e.clientY;
    cachedMousePos.x = e.clientX;
    cachedMousePos.y = e.clientY;
    mousePos.x = e.clientX;
    mousePos.y = e.clientY;
    isHovering = true;
});

// Opzionale: Se esci, smetti di calcolare (risparmia memoria)
section.addEventListener("mouseleave", () => {
    isHovering = false;
});

// 4. Funzione di animazione singola immagine (La Caduta)
function playAnimation(img) {
    let tl = gsap.timeline();

    tl.from(img, {
        scale: 0.5,
        duration: 0.5,
        ease: "power1.out"
    })
    .to(img, {
        y: window.innerHeight + 200, // Cade fino a fuori schermo
        rotation: "random([-60, 60])",
        opacity: 0,
        ease: "power1.in", // Accelera cadendo (gravità)
        duration: 2
    }, 0);
}

// 5. Ciclo principale (Ticker)
gsap.ticker.add(() => {
    // Se non siamo sopra la sezione, non fare nulla
    if (!isHovering) return;

    // Calcoliamo la distanza percorsa
    let travelDistance = Math.hypot(
        lastMousePos.x - mousePos.x,
        lastMousePos.y - mousePos.y
    );

    // Interpolazione per fluidità
    cachedMousePos.x = gsap.utils.interpolate(cachedMousePos.x, mousePos.x, 0.1);
    cachedMousePos.y = gsap.utils.interpolate(cachedMousePos.y, mousePos.y, 0.1);

    // Se ci siamo mossi abbastanza... SPAWN!
    if (travelDistance > gap) {
        animateImage();
        lastMousePos.x = mousePos.x;
        lastMousePos.y = mousePos.y;
    }
});

function animateImage() {
    let wrappedIndex = wrapper(index);
    let img = images[wrappedIndex];

    gsap.killTweensOf(img);
    gsap.set(img, { clearProps: "all" });

    // Posiziona l'immagine ESATTAMENTE dove sta il mouse
    gsap.set(img, {
        opacity: 1,
        x: mousePos.x,
        y: mousePos.y,
        xPercent: -50,
        yPercent: -50,
        position: 'fixed', // Importante: resta fissa rispetto allo schermo mentre cade
        pointerEvents: 'none' // Il mouse passa attraverso la foto
    });

    playAnimation(img);
    index++;
}

// public/script.js - AGGIUNGI IN FONDO

/**
 * CUSTOM TEXT SPLITTER (Gratuito)
 * Sostituisce GSAP SplitText per l'effetto Social
 */

// 1. Seleziona tutti i link social
const socialLinks = document.querySelectorAll('.social-split');

// 2. Per ogni link...
socialLinks.forEach(link => {
    // Prendi il testo originale (es. "Instagram")
    const text = link.innerText.trim();
    
    // Svuota l'HTML del link
    link.innerHTML = '';
    
    // 3. Spezza il testo in lettere e crea gli SPAN
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        
        // Se è uno spazio vuoto, usa un carattere speciale per mantenere lo spazio
        span.innerHTML = char === ' ' ? '&nbsp;' : char;
        
        // Assegna l'indice per il ritardo dell'animazione CSS
        // (La prima lettera è 0, la seconda 1, ecc.)
        span.style.setProperty('--char-index', index);
        
        // Inserisci la lettera nel link
        link.appendChild(span);
    });
});
