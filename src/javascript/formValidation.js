(function () {
  emailjs.init("mGDUnoM3sWAx7labJ");
})();

document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = new FormData(this);
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
      };

      // Envía el correo
      emailjs.send("service_tk7wuzg", "template_ddwjt0w", data).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message successfully sent! We will be in touch shortly.");
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Error sending the message. Please try again later.");
        }
      );
    });
  });
});
