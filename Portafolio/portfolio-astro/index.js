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



