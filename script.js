const cards = [...document.querySelectorAll(".card")];
const empty = document.getElementById("empty");
const searchInput = document.getElementById("siteSearch");
const searchForm = document.getElementById("searchForm");
const filters = [...document.querySelectorAll(".filter")];

function filterSites(query) {
  const term = query.toLowerCase().trim();
  let visible = 0;
  cards.forEach(card => {
    const match = !term || card.dataset.search.includes(term);
    card.hidden = !match;
    if (match) visible++;
  });
  if (empty) empty.hidden = visible !== 0;
}

searchForm?.addEventListener("submit", event => {
  event.preventDefault();
  filterSites(searchInput.value);
  document.getElementById("heritage")?.scrollIntoView({ behavior: "smooth" });
});

filters.forEach(button => {
  button.addEventListener("click", () => {
    filters.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    filterSites(button.dataset.filter);
  });
});
