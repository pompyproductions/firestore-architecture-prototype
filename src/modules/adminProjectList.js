function newVSep() {
  const elem = document.createElement("div");
  elem.classList.add("vsep");
  return elem
}

function newListItem(data) {
  const elem = document.createElement("li");

  const title = document.createElement("h3");
  title.textContent = data.title;
  
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.textContent = "✖";
  
  const year = document.createElement("p");
  year.textContent = data.year;
  
  const uploadButton = document.createElement("button");
  uploadButton.textContent = "Upload";

  elem.append(
    deleteButton, 
    title, 
    newVSep(),
    year, 
    uploadButton
  );
  elem.classList.add("list-item");

  return elem;
}

export { newListItem }