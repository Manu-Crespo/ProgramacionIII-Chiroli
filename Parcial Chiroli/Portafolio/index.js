document.getElementById("scroll").addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

  const form = document.getElementById("contact-form");
  const messageBox = document.getElementById("form-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_4dim1yw", "template_ousz0q6", this)
      .then(() => {
        // Mensaje bonito
        messageBox.textContent = "¡Mensaje enviado con éxito!";
        messageBox.className = "success";

        // Limpiar formulario
        form.reset();

        // Ocultar mensaje después de unos segundos
        setTimeout(() => {
          messageBox.className = "";
          messageBox.textContent = "";
        }, 4000);
      })
      .catch(() => {
        messageBox.textContent = "Hubo un error al enviar el mensaje. Intenta nuevamente.";
        messageBox.className = "error";

        setTimeout(() => {
          messageBox.className = "";
          messageBox.textContent = "";
        }, 4000);
      });
  });

  document.querySelectorAll('#offcanvasSidebar .nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = this.getAttribute('href');

    // Si es un enlace con hash (#)
    if (target.startsWith('#')) {
      e.preventDefault(); // evitar que falle

      // Cerrar offcanvas
      const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasSidebar'));
      offcanvas.hide();

      // Esperar la animación
      setTimeout(() => {
        const el = document.querySelector(target);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300); // El tiempo default del offcanvas
    }
  });
});

document.getElementById("cv-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const enlace = document.createElement("a");
    enlace.href = "/cv.pdf";     // ruta al archivo
    enlace.download = "cv.pdf";  // nombre del archivo
    enlace.click();
});


