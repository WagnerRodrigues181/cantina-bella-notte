document.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll(".filtro-btn");
  const cards = document.querySelectorAll(".prato-card");

  botoes.forEach((btn) => {
    btn.addEventListener("click", () => {
      botoes.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const categoria = btn.dataset.categoria;
      cards.forEach((card) => {
        if (card.dataset.categoria === categoria) {
          card.style.display = "flex";
          setTimeout(() => card.classList.add("reveal--visivel"), 10);
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
