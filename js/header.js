const btnBurguer = document.getElementById("btn-burguer");
const dropdownId = document.getElementById("dropdown-id");

btnBurguer.addEventListener("click", () => {
    dropdownId.classList.toggle("show");
  });
