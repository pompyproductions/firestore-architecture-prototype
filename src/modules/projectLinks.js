const container = document.querySelector("#project-thumbnails");

function createThumbnail(id, url) {
  const elem = document.createElement("img");
  elem.setAttribute("src", url);
  elem.setAttribute("data-id", id)
  return elem;
}

export { createThumbnail };