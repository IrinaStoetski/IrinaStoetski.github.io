const getMovieIdFromURL = () => {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);

  return params.get("id");
};

const getMovieDetails = async (id) =>
  await getData(`${BASE_END_POINT}/films/${id}`);

const getDataByLink = (link) => getData(link);

const renderPageTitle = (title) => {
  const element = document.querySelector(".main-title");

  element.innerHTML = title;
};

const getCharactersNames = async (characters) => {
  const data = await Promise.allSettled(characters.map(getDataByLink));

  return data.map((result) => result.value.result.properties.name).join(", ");
};

const renderMainContent = async (data, movieId) => {
  const { characters, opening_crawl, release_date } = data;
  const contentElement = document.querySelector(".movie-content");
  const charactersInfo = await getCharactersNames(characters);

  contentElement.innerHTML = `
   <div class="movie-details">
    <div class="movie-details-image"> 
      <img src="${imagesMap[movieId]}" alt=""/>
    </div>
    <div class="movie-details-description">
      <p>${opening_crawl}</p>
      <p><b>Characters:</b> ${charactersInfo}</p>
      <p><b>Release date:</b> ${getFormattedDate(release_date)}
    </div>
   </div>
  `;
};

const renderMoviePage = async () => {
  const movieId = getMovieIdFromURL();
  const data = await getMovieDetails(movieId);
  const {
    properties: { title, ...rest },
  } = data.result;

  renderPageTitle(title);
  renderMainContent(rest, movieId);
};

renderMoviePage();
