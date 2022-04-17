chrome.storage.local.get(["shows"]).then((res) => {
  res.shows.forEach((show) => {
    renderShow(show);
  });
});

function renderShow(show) {
  const showDivision = document.createElement("div");
  const showsContainer = document.getElementById("shows-container");

  const title = document.createElement("h3");
  const image = document.createElement("img");

  title.textContent = show.show?.name;
  image.src = show.show?.image?.medium;

  showDivision.appendChild(title);
  showDivision.appendChild(image);

  showsContainer.appendChild(showDivision);
}
