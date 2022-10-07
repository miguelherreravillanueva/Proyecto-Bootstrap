

const myForm = document.getElementById("myForm")
const firstName = document.getElementById("name");
const email = document.getElementById("email");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const submit = document.getElementById("submit")
const showUser = document.querySelector(".showUser");

function onSubmit(e) {
    e.preventDefault();
    //Validación que obliga a rellenar todos los campos
    if (firstName.value === "" || email.value === "") {
        showUser.innerHTML = "Por favor, rellena los campos.";
        //Validación para el correo
    } else if (/(\w+?@\w+?\x2E.+)/.test(email.value) !== true) {
        showUser.innerHTML = "Por favor, introduce un formato de correo correcto.";
    } else {
        showUser.innerHTML = "Tus credenciales han sido guardadas, gracias.";
    }
    //Validación de formulario correcto de 3 seg.
    setTimeout(function () {
        showUser.innerHTML = "";
    }, 3000);

    const user = {
        name: firstName.value,
        email: email.value,
        password1: password1.value,
        password2: password2.value,
    };
    localStorage.setItem("userStorage", JSON.stringify(user));

    // paintUser();

}

function verifyPassword() {  //ESTA FUNCIÓN DEBE IR ENLAZADA CON LA ANTERIOR, PERO NO SÉ CUÁNTOS else if SE PUEDEN HACER EN UNA MISMA FUNCIÓN.
    //Validación de contraseña
    if (password1.length == 0 || password2.length == 0) {
        alert("Por favor, escribe una contraseña.")
    }
    //  Validación para que ambas contraseñas coincidan
    if (password1 != password2) {
        alert("Las contraseñas deben coincidir.");
        return false;
        //Validación de contraseña
    } else {
        alert("Contraseña correcta.");
        return true;
    }
    //Validación de contraseña errónea 3 seg. (ESTE CÓDIGO NO SE LEE, LO MÁS PROBABLE ES QUE ESTÉ MAL, OBVIO)
    setTimeout(function () {
        password1 && password2;
    }, 3000);
}

//     var password = document.getElementById("password").value;  
//    //validación de la extensión mínima de la contraseña  
//     if(password.length < 8) {  
//        document.getElementById("message").innerHTML = "La contraseña debe tener al menos 8 caracteres";  
//        return false;  
//     } else {
//         alert("Contraseña incorrecta.")
//     }


// function paintUser() {
//     const userStorage = JSON.parse(localStorage.getItem("userStorage"));
//     showUser.innerHTML = `Nombre: ${userStorage.name} Email: ${userStorage.email}`;
// }
// paintUser();
myForm.addEventListener("submit", onSubmit);