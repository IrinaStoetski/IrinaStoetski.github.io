const getMoviesList = async () => await getData(`${BASE_END_POINT}/films`);

const getPeopleLinks = (characters) =>
  characters.map((item) => {
    const splittedString = item.split("/");
    console.log(splittedString);
    const id = splittedString[splittedString.length - 1];

    return `<a href="people.html?id=${id}">${item}</a>, `;
  });

const getMovieCardLayout = (movie) => {
  const {
    uid,
    properties: { title, director, opening_crawl },
  } = movie;

  return `<li class="movie" >
           
             <div class="image"> <img src=${imagesMap[uid]} alt="${title} poster image" /></div>
                <div class="movie-info"> <h2 class="movie-title">${title}</h2>
                  <p>Directed by: <span class="movie-director">${director}</span></p>
                    <p>${opening_crawl}</p>
                    <a class="movie-link" href="movie.html?id=${uid}">See movie details</a> 
                </div> 
          </li>`;
};

const renderMoviesList = (list) => {
  const contentElement = document.querySelector(".content");
  const newContent = list.map(getMovieCardLayout).join("");

  contentElement.innerHTML = newContent;
};

async function renderStarWarsPage() {
  const movies = await getMoviesList();

  renderMoviesList(movies.result);
}

renderStarWarsPage();
