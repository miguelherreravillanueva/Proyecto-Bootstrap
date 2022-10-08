const myForm = document.getElementById("myForm");
const firstName = document.getElementById("name");
const email = document.getElementById("email");
const password1 = document.getElementById("password");
const password2 = document.getElementById("confirmPassword");
const submit = document.getElementById("submit");
const showUser = document.querySelector(".showUser");
const msgPass1 = document.querySelector(".msgPass1");
const msgPass2 = document.querySelector(".msgPass2");

function onSubmit(e) {
  e.preventDefault();

  const person = {
    name: firstName.value,
    email: email.value,
    password1: password1.value,
    password2: password2.value,
  };

  //Validación que obliga a rellenar todos los campos
  if (firstName.value === "" || email.value === "") {
    showUser.innerHTML = `<div class="alert alert-primary" role="alert">Por favor, rellena los campos.</div>`;
    //Validación para el correo
  } else if (/(\w+?@\w+?\x2E.+)/.test(email.value) == false) {
    showUser.innerHTML = `<div class="alert alert-primary" role="alert">Por favor, introduce un formato de correo correcto.</div>`;
  } else if (password1.value.length == "") {
    msgPass1.innerHTML = `<div class="alert alert-warning" role="alert">Por favor, escribe una contraseña.</div>`;
    password1.focus();
  } else if (password2.value.length == "") {
    msgPass2.innerHTML = `<div class="alert alert-warning" role="alert">Confirma tu contraseña.</div>`;
    password2.focus();
  } else if (password1.value !== password2.value) {
    showUser.innerHTML = `<div class="alert alert-warning" role="alert">Las contraseñas deben coincidir.</div>`;
  } else {
    showUser.innerHTML = `<div class="alert alert-success" role="alert">Tus credenciales han sido guardadas, correctamente!</div>`;
  }
  //Validación de formulario correcto de 3 seg.
  setTimeout(function () {
    showUser.innerHTML = "";
    msgPass1.innerHTML = "";
    msgPass2.innerHTML = "";
  }, 3000);

  if (
    firstName.value !== "" &&
    email.value !== "" &&
    password1.value !== "" &&
    password2.value !== ""
  ) {
    setTimeout(function () {
      window.location.href = "pages/users.html";
    }, 3000);
  }

  arrUsers.push(person);

  localStorage.setItem("user", JSON.stringify(arrUsers));

  const users = JSON.parse(localStorage.getItem("user"));

  const user = users[users.length - 1];

  divUser.innerHTML = `<div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card h-100">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${user.name}</h5>            
            <p><b>Email: </b>${user.email}</p>
          </div>   
        </div>
      </div>
    </div>`;
}

const arrUsers = [];

// function paintUser() {
//     const userStorage = JSON.parse(localStorage.getItem("userStorage"));
//     showUser.innerHTML = `Nombre: ${userStorage.name} Email: ${userStorage.email}`;
// }
// paintUser();

submit.addEventListener("click", onSubmit);
