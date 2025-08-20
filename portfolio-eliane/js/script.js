document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger"); 
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.querySelector(".main-content");

  hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    mainContent.classList.toggle("shift");
    hamburger.classList.toggle("active"); // animação X
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contatoForm");
  const msgSucesso = document.getElementById("msg-sucesso");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // evita recarregar a página

    // Exibe mensagem
    msgSucesso.style.display = "block";

    // Limpa os campos do formulário
    form.reset();

    // Esconde a mensagem depois de 4s
    setTimeout(() => {
      msgSucesso.style.display = "none";git 
    }, 4000);
  });
});