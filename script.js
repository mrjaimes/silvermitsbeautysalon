function scrollToServicios() {
  document.getElementById("servicios").scrollIntoView({ behavior: "smooth" });
}

AOS.init({
  once: true,
  offset: 0,
  delay: 0,
  duration: 600,
});

//-----------------------Header Fuction

const toggleBtn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu-principal");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});


window.addEventListener("DOMContentLoaded", () => {
  // TODO: aquí va todo el código de frases y partículas
});

window.addEventListener("DOMContentLoaded", () => {
  const frases = [
    { texto: "La belleza comienza en el momento en que decides ser tú misma.", icono: "💅", autor: "Coco Chanel" },
    { texto: "La elegancia es cuando el interior es tan bello como el exterior.", icono: "👑", autor: "Audrey Hepburn" },
    { texto: "La confianza en ti misma es el mejor maquillaje.", icono: "💄", autor: "Diane Von Furstenberg" },
    { texto: "La sonrisa es el mejor accesorio que puedes llevar.", icono: "😊", autor: "Sophia Loren" },
    { texto: "Tu autenticidad es tu mayor encanto.", icono: "🌸", autor: "Silvermist Studio" }
  ];

  const fraseEl = document.getElementById("frase-motivadora");
  const iconoEl = document.querySelector(".icono");
  const autorEl = document.getElementById("autor-frase");
  const contenedor = document.getElementById("frase-contenido");

  function mostrarFrase(fraseObj) {
    contenedor.classList.remove("visible");
    setTimeout(() => {
      fraseEl.textContent = `"${fraseObj.texto}"`;
      iconoEl.textContent = fraseObj.icono;
      autorEl.textContent = `— ${fraseObj.autor}`;
      contenedor.classList.add("visible");
    }, 500);
  }

  function fraseAleatoria() {
    const disponibles = frases.filter(f => f.texto !== fraseEl.textContent.replace(/"/g, ""));
    const fraseObj = disponibles[Math.floor(Math.random() * disponibles.length)];
    mostrarFrase(fraseObj);
  }

  fraseAleatoria();
  setInterval(fraseAleatoria, 3000);

  // Partículas decorativas
  tsParticles.load("tsparticles", {
    fullScreen: { enable: false },
    particles: {
      number: { value: 50 },
      color: { value: "#e8a6b8" },
      shape: { type: "circle" },
      size: {
        value: 8,
        random: { enable: true, minimumValue: 6 }
      },
      opacity: {
        value: 0.5,
        random: { enable: true, minimumValue: 0.3 }
      },
      move: {
        enable: true,
        speed: 1.2,
        direction: "none",
        outModes: { default: "bounce" }
      }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" }
      },
      modes: {
        repulse: { distance: 100 },
        push: { quantity: 4 }
      }
    },
    background: {
      color: "#f6dce3"
    }
  });
});

//-------------------------------------------funcion de seccion frases
function aplicarFondoPorHora() {
  const hora = new Date().getHours();
  const seccion = document.getElementById("frases");

  if (hora >= 6 && hora < 11) {
    seccion.className = "mañana";
  } else if (hora >= 11 && hora < 15) {
    seccion.className = "mediodia";
  } else if (hora >= 15 && hora < 18) {
    seccion.className = "tarde";
  } else {
    seccion.className = "noche";
  }
}

aplicarFondoPorHora();

//-------------------------------------------Saludo 
function mostrarSaludoPorHora() {
  const hora = new Date().getHours();
  const saludoEl = document.getElementById("saludo-especial");
  let saludo = "";

  if (hora >= 6 && hora < 12) {
    saludo = "¡Buenos días, belleza!";
  } else if (hora >= 12 && hora < 18) {
    saludo = "¡Buenas tardes, radiante!";
  } else {
    saludo = "¡Buenas noches, estrella!";
  }

  saludoEl.textContent = saludo;
}

mostrarSaludoPorHora();

//--------------------------------------Particles
 
  tsParticles.load("tsparticles", {
  fullScreen: { enable: false },
  particles: {
    number: { value: 60 },
    color: { value: ["#e8a6b8", "#f3c6d2", "#ffffff"] },
    shape: { type: "circle" },
    size: {
      value: 6,
      random: { enable: true, minimumValue: 3 }
    },
    opacity: {
      value: 0.4,
      random: { enable: true, minimumValue: 0.2 }
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      outModes: { default: "bounce" }
    }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 80 },
      push: { quantity: 3 }
    }
  },
  background: {
    color: "#f6dce3"
  }       
  }
)

//--------------------Carrusel

document.addEventListener("DOMContentLoaded", () => {
  const galeriaSwiper = new Swiper(".galeria-swiper", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

//-------------------FOOTER

document.addEventListener("DOMContentLoaded", () => {
  const hora = new Date().getHours();
  const footer = document.getElementById("footer-silvermist");

  let fondo = "#f6dce3"; // mañana
  if (hora >= 12 && hora < 17) fondo = "#f3c6d2"; // tarde
  else if (hora >= 17 || hora < 6) fondo = "#e8a6b8"; // noche

  footer.style.setProperty("--footer-bg", fondo);
});

document.addEventListener("DOMContentLoaded", () => {
  const hora = new Date().getHours();
  const footer = document.getElementById("footer-silvermist");
  const fraseEl = document.getElementById("frase-footer");

  // Fondo dinámico
  let fondo = "#f6dce3";
  if (hora >= 12 && hora < 17) fondo = "#f3c6d2";
  else if (hora >= 17 || hora < 6) fondo = "#e8a6b8";
  footer.style.setProperty("--footer-bg", fondo);

  // Frases inspiradoras
  const frases = [
    "Tu belleza es tu poder.",
    "La elegancia comienza con el cuidado.",
    "Brilla con tu estilo único.",
    "La confianza es tu mejor accesorio.",
    "Cada detalle cuenta. Cada mirada impacta."
  ];

  fraseEl.textContent = frases[Math.floor(Math.random() * frases.length)];
});

document.addEventListener("DOMContentLoaded", () => {
  const fraseEl = document.getElementById("frase-footer");

  fetch("https://phrasesapi.onrender.com/api/phrases/random")
    .then(response => response.json())
    .then(data => {
      if (data.phrase && data.author) {
        fraseEl.textContent = `"${data.phrase}" — ${data.author}`;
      } else {
        fraseEl.textContent = "La belleza comienza en el momento en que decides ser tú misma.";
      }
    })
    .catch(() => {
      fraseEl.textContent = "La belleza comienza en el momento en que decides ser tú misma.";
    });
});







