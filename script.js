// Efecto de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Animación al cargar la página
  window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.animate__animated');
    elements.forEach(el => {
      el.style.opacity = 1;
    });
  });