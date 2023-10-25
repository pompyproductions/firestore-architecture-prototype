function newListItem(data) {
  const elem = document.createElement("li");
  const title = document.createElement("h3");
  title.textContent = data.title;
  const year = document.createElement("p");
  year.textContent = data.year;
  elem.append(title, year);

  return elem;
}

export { newListItem }