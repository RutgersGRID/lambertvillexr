window.addEventListener("load", (event) => {
  document.querySelectorAll("a").forEach((link) => {
    let url = link.getAttribute("href");
    if (url?.startsWith("/")) {
      url = import.meta.env.BASE_URL + url.slice(1);
      link.setAttribute("href", url);
    }
  });
});
