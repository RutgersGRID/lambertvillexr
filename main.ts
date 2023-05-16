function prependBase() {
  document.querySelectorAll("a").forEach((link) => {
    let url = link.getAttribute("href");
    if (url?.startsWith("/")) {
      url = import.meta.env.BASE_URL + url.slice(1);
      link.setAttribute("href", url);
    }
  });

  document.querySelectorAll("a-asset-item").forEach((item) => {
    let url = item.getAttribute("src");
    if (url?.startsWith("/")) {
      url = import.meta.env.BASE_URL + url.slice(1);
      item.setAttribute("src", url);
      item.flushToDOM();
    }
  });
}

prependBase();
