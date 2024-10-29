$(".menu-toggle").click(function () {
  $(".menu").slideToggle();
});

$(function () {
  // Inicializar ResponsiveSlides.js sin los controles de navegación y pager
  $(".rslides").responsiveSlides({
    auto: true,
    speed: 500,
    timeout: 4000,
    pager: false,
    nav: false, // Desactiva los botones generados automáticamente
    pause: false,
  });

  // Control de las diapositivas manualmente
  let currentIndex = 0;
  const $slides = $(".rslides li");
  const totalSlides = $slides.length;

  // Función para mostrar una diapositiva específica
  function showSlide(index) {
    $slides.removeClass("active").eq(index).addClass("active");
    currentIndex = index;
  }

  // Evento para el botón siguiente
  $(".swiper-button-next").click(function () {
    const nextIndex = (currentIndex + 1) % totalSlides;
    showSlide(nextIndex);
  });

  // Evento para el botón anterior
  $(".swiper-button-prev").click(function () {
    const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(prevIndex);
  });

  // Mostrar el botón cuando se hace scroll hacia abajo
  window.addEventListener("scroll", function () {
    const backToTopButton = document.getElementById("backToTop");
    if (window.scrollY > 200) {
      // Muestra el botón después de 200px de desplazamiento
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });

  // Al hacer clic en el botón, subir hasta arriba
  document
    .getElementById("backToTop")
    .addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});
