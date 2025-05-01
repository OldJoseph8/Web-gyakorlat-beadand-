document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  let valid = true;
  const form = e.target;
  const inputs = form.querySelectorAll('input, textarea');

  inputs.forEach(input => {
    if (!input.value || input.value.length < 10) {
      alert(`${input.name} mező érvénytelen (minimum 10 karakter)!`);
      valid = false;
    }

    if (input.type === "email") {
      const regex = /^\S+@\S+\.\S+$/;
      if (!regex.test(input.value)) {
        alert("Érvénytelen email formátum!");
        valid = false;
      }
    }
  });

  if (valid) {
    alert("Sikeres beküldés!");
    form.reset();
  }
});
