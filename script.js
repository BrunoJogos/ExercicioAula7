const botao = document.getElementById("btnMensagem");
const mensagem = document.getElementById("mensagem");


botao.addEventListener("click", () => {
  mensagem.textContent = "✔ Commit realizado com sucesso! (exemplo)";
});