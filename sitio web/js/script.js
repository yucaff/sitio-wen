function mostrarSeccion(id) {
  document.querySelectorAll('.slide').forEach(section => {
    section.classList.remove('visible');
  });
  document.getElementById(id).classList.add('visible');
}

function mostrarBienvenida() {
  document.getElementById("modal-bienvenida").style.display = "block";
  escribirTexto("titulo-escribir", "🌸 Bienvenid@ a Kawaii Services 🌸", 60);
}

function cerrarModal() {
  document.getElementById("modal-bienvenida").style.display = "none";
}

function escribirTexto(id, texto, velocidad) {
  let i = 0;
  const elemento = document.getElementById(id);
  elemento.innerHTML = ""; // limpiar antes de escribir
  function escribir() {
    if (i < texto.length) {
      elemento.innerHTML += texto.charAt(i);
      i++;
      setTimeout(escribir, velocidad);
    }
  }
  escribir();
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarSeccion("inicio");

  const formContacto = document.getElementById('form-contacto');
  if (formContacto) {
    formContacto.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('email').value;
      if (!email.includes("@")) {
        alert("Por favor, ingresa un correo válido.");
        return;
      }
      alert('¡Gracias por tu mensaje! 💌');
      this.reset();
    });
  }

  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const user = document.getElementById('usuario').value;
      const pass = document.getElementById('password').value;

      if (user === "admin" && pass === "kawaii123") {
        alert("¡Bienvenido, admin! 🐰");
      } else {
        alert("Usuario o contraseña incorrectos 😿");
      }

      this.reset();
    });
  }
});
