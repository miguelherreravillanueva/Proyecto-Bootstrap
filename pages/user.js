
const users = JSON.parse(localStorage.getItem("user")) || [];
console.log(users);
const divPerson = document.querySelector(".divPerson");


 for (let i = 0; i < users.length; i++) {
  let divCard = document.createElement("div");
  divPerson.appendChild(divCard);
  divCard.innerHTML = `
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
      <div class="card h-100">
        <img src="../images/usuario.png" class="card-img-top" alt="Usuario">
        <div class="card-body">
          <h5 class="card-title"><b>Usuario: </b>${users[i].name}</h5>
          <p><b>email: </b>${users[i].email}</p>
        </div>
      </div>
    </div>
  </div>`;
            
}