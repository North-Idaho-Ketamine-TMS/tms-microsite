const menuToggle = document.getElementById("menuToggle");
const primaryNav = document.getElementById("primaryNav");

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = primaryNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// Set active nav item based on current path.
if (primaryNav) {
  const current = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
  const links = primaryNav.querySelectorAll("a[href]");
  links.forEach((a) => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === current) a.classList.add("active");
  });
}
