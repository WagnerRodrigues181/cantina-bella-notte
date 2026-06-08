document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();

  // Navbar scroll
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("navbar--scrolled", window.scrollY > 80);
  });

  // Menu mobile
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  toggle.addEventListener("click", () => {
    links.classList.toggle("navbar__links--open");
    toggle.classList.toggle("navbar__toggle--open");
  });
  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      links.classList.remove("navbar__links--open");
      toggle.classList.remove("navbar__toggle--open");
    });
  });

  // Botão voltar ao topo
  const btnTopo = document.getElementById("btnTopo");
  window.addEventListener("scroll", () => {
    btnTopo.classList.toggle("btn-topo--visivel", window.scrollY > 400);
  });
  btnTopo.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );
});
