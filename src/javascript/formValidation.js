(function () {
  emailjs.init("f9pElmO206g1b6Acq");
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

      emailjs.send("service_gfydntr", "template_f6m1d3h", data).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message successfully sent! We will be in touch shortly.");

          form.reset();
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Error sending the message. Please try again later.");
        }
      );
    });
  });
});
