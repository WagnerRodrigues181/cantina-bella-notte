document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("reveal--visivel");
          }, i * 80);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
});

/*=== Scroll reveal via IntersectionObserver ===*/
document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal--visivel");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  elementos.forEach((el) => observer.observe(el));
});
