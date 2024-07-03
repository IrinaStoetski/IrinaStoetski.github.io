const BASE_END_POINT = "https://www.swapi.tech/api";
const imagesMap = {
  1: "https://i.ebayimg.com/images/g/~iwAAOSwlkhdj3yZ/s-l1600.jpg",
  2: "https://i.ebayimg.com/00/s/NzI5WDUyOQ==/z/y-0AAOSwlgRjNu5s/$_12.JPG?set_id=880000500F",
  3: "https://i.ebayimg.com/images/g/hwcAAOSw1oVi~UXk/s-l1200.jpg",
  4: "https://cdn.europosters.eu/image/1300/posters/star-wars-episode-iv-a-new-hope-i90218.jpg",
  5: "https://cdn.europosters.eu/image/1300/posters/star-wars-episode-v-the-empire-strikes-back-i90219.jpg",
  6: "https://i5.walmartimages.com/seo/Star-Wars-Episode-6-Poster-Print-24-x-36_8323c451-c6f6-4991-886e-5fb7306349e5.9ed05a9e53e2127eadf6745d966a03a1.jpeg",
};

async function getData(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("There was a problem with the fetch operation");
  }

  const data = await response.json();

  return data;
}

const getFormattedDate = (isoDate) => {
  const [year, month, day] = isoDate.split("-");

  return `${month}/${day}/${year}`;
};
