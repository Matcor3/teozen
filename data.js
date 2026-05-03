// public/data.js

const allProjects = [
    // --- FOOD ---
    {
        category: "food", // ETICHETTA IMPORTANTE
        title: "Carbonara",
        image: "images/food-1.jpg", 
        description: "Classica con percorino e guanciale.",
 
    },

    // --- DIY / INVENTIONS ---
    {
        category: "diy", // ETICHETTA IMPORTANTE
        title: "Alimentatore da banco",
        image: "images/diy2.jpg", // Trova un'immagine per questo!
        description: "Alimentatore PC trasformato in alimentatore da banco regolabile.",
    
    },
    {
        category: "diy",
        title: "Portafoglio in pelle",
        image: "images/diy1.jpg",
        description: "Poratafoglio minimalista fatto a mano in pelle",

    },
   
    // --- ART PROJECTS (Galleria) ---
    {
        category: "art",
        title: "All eyes on me",
        image: "images/art1.jpg", 
        description: "Collage di occhi umani."
    },
    {
        category: "art",
        title: "M for Matteo",
        image: "images/art2.jpg",
        description: "Fusione digitale di ritratti e lettere."
    },
    {
        category: "art",
        title: "Keta",
        image: "images/art4.jpg",
        description: "Collage psichedelico."
    },
    {
        category: "art",
        title: "Outside the door",
        image: "images/art5.jpg",
        description: "Collage con paesaggi naturali."
    },
    {
        category: "art",
        title: "Incrocio",
        image: "images/art6.jpg",
        description: "Quadro astratto fatto con vernice acrilica."
    },
    {
        category: "art",
        title: "Paesaggio strano",
        image: "images/art7.jpg",
        description: "Paesaggio astratto con vernice acrilica."
    },
    {
        category: "art",
        title: "Buco colorato",
        image: "images/art8.jpg",
        description: "Buco non del tutto nero con vernice acrilica."
    },
    {
        category: "art",
        title: "Diverso",
        image: "images/art9.jpg",
        description: "Collage di esseri anormali."
    },
    {
        category: "art",
        title: "Escape",
        image: "images/art10.jpg",
        description: "Collage dinamico di uscita."
    },
    {
        category: "art",
        title: "Relax",
        image: "images/art11.jpg",
        description: "Collage rilassante."
    },
    {
        category: "art",
        title: "Grime face",
        image: "images/art3.jpg",
        description: "Grime effect su ritratto digitale."
    },
    {
        category: "art",
        title: "TEO ZEN",
        image: "images/art12.jpg",
        description: "Poster minimalista."
    },
    {
        category: "art",
        title: "Hypnotic circle",
        image: "images/art15.jpg",
        description: "Cerchio con puntini ipnotico."
    },
    {
        category: "art",
        title: "Cambiamento climatico",
        image: "images/art16.jpg",
        description: "Il mondo sta cambiando - E tu cosa fai?"
    },
    {
        category: "art",
        title: "Spiral",
        image: "images/art13.jpg",
        description: "Spirale della passione."
    },
    {
        category: "art",
        title: "Wave",
        image: "images/art14.png",
        description: "Effetto ondoso ipnotico."
    },
    {
        category: "art",
        title: "Anime style",
        image: "images/art17.jpg",
        description: "Tributo agli anime - Progetto t-shirt."
    },
    {
        category: "art",
        title: "Make Art",
        image: "images/art18.jpg",
        description: "Tributo all'arte - Progetto t-shirt."
    },
    {
        category: "art",
        title: "Everything is complicated",
        image: "images/art19.jpg",
        description: "Tutto è complicato - Progetto t-shirt."
    },
    {
        category: "art",
        title: "Matcore colorful",
        image: "images/art20.jpg",
        description: "Scritta Matccore colorata"
    },
    {
        category: "art",
        title: "Sliced head",
        image: "images/art21.jpg",
        description: "Testa a fette frontale."
    },
    {
        category: "art",
        title: "sliced head 2",
        image: "images/art22.jpg",
        description: "Testa a fette laterale."
    },
    {
        category: "art",
        title: "M flower",
        image: "images/art23.jpg",
        description: "Effetto 3D con fiore."
    },
    {
        category: "art",
        title: "Matcore slime",
        image: "images/art24.jpg",
        description: "Scritta 3D Matcore con effetto slime."
    },
    {
        category: "art",
        title: "Cartoonizer",
        image: "images/art25.jpg",
        description: "Effetto cartone animato pre IA."
    },
    {
        category: "art",
        title: "Time machine",
        image: "images/art26.jpg",
        description: "Collage digitale pre IA."
    },
    {
        category: "art",
        title: "Double Exposure",
        image: "images/art27.jpg",
        description: "Effetto doppia esposizione."
    },
    {
        category: "art",
        title: "Piccolo mondo",
        image: "images/art28.jpg",
        description: "Manipolazione digitale pre IA."
    },
    {
        category: "art",
        title: "Nascosto",
        image: "images/art29.jpg",
        description: "Si vede quello che si vuole vedere."
    },
    {
        category: "art",
        title: "Just Breathe",
        image: "images/art30.jpg",
        description: "Murales purtroppo cancellato."
    },
    {
        category: "art",
        title: "Keep clean",
        image: "images/art31.jpg",
        description: "Murales come monito a tenere pulito."
    },
    {
        category: "art",
        title: "Trap",
        image: "images/art32.jpg",
        description: "Tutto è una trappola."
    },
    {
        category: "art",
        title: "Non mollare",
        image: "images/art33.jpg",
        description: "Murales per non mollare."
    },
    {
        category: "art",
        title: "M 3D",
        image: "images/art34.jpg",
        description: "Disegno effetto 3D."
    },
    {
        category: "art",
        title: "Oggetto sospeso",
        image: "images/art35.jpg",
        description: "Disegno 3D effetto sospeso."
    },
    {
        category: "art",
        title: "La grande onda di Kanagawa",
        image: "images/art36.jpg",
        description: "Tributo a un'immagine iconica di Hokusai."
    },
    {
        category: "art",
        title: "Giardino Zen",
        image: "images/art38.jpg",
        description: "Acquerello di un giardino zen."
    },
    {
        category: "art",
        title: "Mondi",
        image: "images/art39.jpg",
        description: "Disegno di mondi immaginari."
    },
    {
        category: "art",
        title: "Sfera di vetro",
        image: "images/art40.jpg",
        description: "Disegno di una sfera di vetro."
    },
    {
        category: "art",
        title: "Amore",
        image: "images/art41.jpg",
        description: "Tecnica disegno su dita."
    },
    {
        category: "art",
        title: "Friendship",
        image: "images/art42.jpg",
        description: "Tecnica disegno su dita."
    },
    {
        category: "art",
        title: "Escluso",
        image: "images/art43.jpg",
        description: "Tecnica disegno su dita."
    },

   // --- CODING PROJECTS ---
    {
        category: "coding",
        title: "Prompt Image Generator", // PROGETTO LOCALE
        image: "images/cod2.jpg", 
        description: "Ti aiuta a creare immagini con AI basate su prompt testuali.",
        url: "projects/prom-ima-gen/index.html" // Questo ricarica la pagina stessa (o metti il link github)
    },
    {
        category: "coding",
        title: "Kaleido Art", // PROGETTO LOCALE
        image: "images/cod1.jpg",
        description: "Un orologio digitale con effetto pioggia verde.",
        url: "projects/kaleido-art/index.html" // <-- LINK RELATIVO (LOCALE)
    },
    {
        category: "coding",
        title: "Reflex trainer", // PROGETTO LOCALE
        image: "images/cod4.jpg",
        description: "Testa i tuoi riflessi con questo semplice gioco interattivo.",
        url: "projects/reflex-trainer/index.html" // <-- LINK RELATIVO (LOCALE)
    },
    {
        category: "coding",
        title: "Hacker Simulator", // PROGETTO LOCALE
        image: "images/cod5.jpg",
        description: "Simula un attacco hacker con questo gioco.",
        url: "projects/hacker/index.html" // <-- LINK RELATIVO (LOCALE)
    },
    {
        category: "coding",
        title: "Scrittura Veloce", // PROGETTO VERCEL
        image: "images/cod3.jpg",
        description: "Dashboard React per monitorare le crypto in tempo reale.",
        url: "https://scrittura-veloce.vercel.app/" // <-- LINK ASSOLUTO (ESTERNO)
    }
];