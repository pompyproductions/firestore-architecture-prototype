const container = document.querySelector("#project-thumbnails");

function createThumbnail(url) {
  const elem = document.createElement("img");
  elem.setAttribute("src", url);
  return elem;
}

export { createThumbnail };