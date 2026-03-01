(function () {
  const path = window.location.pathname.replace(/\/+$/, "");
  const links = document.querySelectorAll("[data-nav] a");

  links.forEach(a => {
    const href = a.getAttribute("href").replace(/\/+$/, "");
    const isActive =
      href === path ||
      (href.endsWith("/index.html") && href.replace("/index.html", "") === path);

    if (isActive) a.classList.add("active");
  });
})();