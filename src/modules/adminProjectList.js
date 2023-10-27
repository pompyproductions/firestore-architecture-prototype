function newVSep() {
  const elem = document.createElement("div");
  elem.classList.add("vsep");
  return elem
}

function newListItem(id, data) {
  const elem = document.createElement("li");
  elem.setAttribute("data-id", id)

  const title = document.createElement("h3");
  title.textContent = data.title;
  
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.textContent = "✖";
  
  const year = document.createElement("p");
  year.textContent = data.year;
  
  const imageButton = document.createElement("button");
  if (data.thumbnail) {
    imageButton.textContent = "Update image";
    imageButton.classList.add("green");
  } else {
    imageButton.textContent = "Upload image"
  }

  elem.append(
    deleteButton, 
    title, 
    newVSep(),
    year, 
    imageButton
  );
  elem.classList.add("list-item");

  return elem;
}

export { newListItem }