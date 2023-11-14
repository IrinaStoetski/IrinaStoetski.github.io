const round = (count, roundNumber) => {
  return Math.round(count / roundNumber) * roundNumber;
};

const roundBuilders = (count) => {
  return Math.round(count / 10) * 10;
};

const roundCommunities = (count) => {
  if (count < 200) {
    return round(count, 10);
  } else if (count >= 200 && count < 1000) {
    return round(count, 50);
  } else if (count >= 1000) {
    return round(count, 100);
  }
};

const roundListings = (count) => {
  return round(count, 500);
};

const getRoundedEntity = (entity, count) => {
  switch (entity) {
    case "builders":
      return roundBuilders(count);
    case "communities":
      return roundCommunities(count);
    case "listings":
      return roundListings(count);
  }
};

const roundButtons = document.querySelectorAll(".round-btn");

roundButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const roundedEntity = button.dataset.target;
    const count = Number(
      document.querySelector(`input[data-value=${roundedEntity}]`).value
    );
    const roundedCount = getRoundedEntity(roundedEntity, count);

    document.getElementById(`${roundedEntity}-result`).innerHTML = roundedCount;
  });
});
