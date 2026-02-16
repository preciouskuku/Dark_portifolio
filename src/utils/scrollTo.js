// src/utils/scrollTo.js
export const scrollTo = (id, offset = 0) => {
  const el = document.getElementById(id);
  if (!el) return;

  const top = el.offsetTop - offset; // adjust for fixed navbar if needed

  window.scrollTo({
    top,
    behavior: "smooth",
  });
};
