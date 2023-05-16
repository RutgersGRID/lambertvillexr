function prependBase() {
  console.log("try prepend base");
  document.querySelectorAll("a").forEach((link) => {
    console.log("found link ", link);
    let url = link.getAttribute("href");
    if (url?.startsWith("/")) {
      url = import.meta.env.BASE_URL + url.slice(1);
      link.setAttribute("href", url);
    }
  });

  document.querySelectorAll("a-asset-item").forEach((item) => {
    console.log("found asset-item ", item);
    let url = item.getAttribute("src");
    if (url?.startsWith("/")) {
      url = import.meta.env.BASE_URL + url.slice(1);
      item.setAttribute("src", url);
    }
  });
}

window.addEventListener("load", (event) => prependBase);
