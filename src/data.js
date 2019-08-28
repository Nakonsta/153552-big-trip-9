// Карточки событий

let allCities = [`Lima`, `New York`, `Capetown`, `Sydney`, `London`, `Dublin`, `Tokyo`, `Quito`];
let descriptionTextArr = [`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`, `Cras aliquet varius magna, non porta ligula feugiat eget.`, `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`, `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`, `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`, `Sed sed nisi sed augue convallis suscipit in sed felis.`, `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`, `In rutrum ac purus sit amet tempus.`];
const POINTS_COUNT = 3;

let optionsArr = [
  {
    name: `Add luggage`,
    price: 10,
    isApply: true,
  },
  {
    name: `Switch to comfort class`,
    price: 150,
    isApply: true,
  },
  {
    name: `Add meal`,
    price: 2,
    isApply: true,
  },
  {
    name: `Choose seats`,
    price: 9,
    isApply: true,
  },
  {
    name: `Travel by train`,
    price: 40,
    isApply: true,
  }
];

const createSet = (array, maxSize, minSize = 1, probability = 0.5) => {
  let resultSet = new Set();
  for (let i = 0; i < array.length; i++) {
    if (Math.random() > probability) {
      resultSet.add(array[i]);
    }
    if (resultSet.size === maxSize) {
      break;
    }
  }
  if (resultSet.size === 0 && minSize === 1) {
    resultSet.add(array[0]);
  }
  return resultSet;
};

const getPoint = () => ({
  type: [`bus to`, `check-in at`, `drive to`, `flight to`, `restaurant at`, `ship to`, `sightseeing at`, `taxi to`, `train to`, `transport to`, `trip to`][Math.floor(Math.random() * 11)],
  city: Array.from(createSet(allCities, 1))[0],
  photo: [`http://picsum.photos/300/150?r=${Math.random()}`, `http://picsum.photos/300/150?r=${Math.random()}`, `http://picsum.photos/300/150?r=${Math.random()}`],
  description: Array.from(createSet(descriptionTextArr, 3)).join(` `),
  isFavorite: Boolean(Math.round(Math.random())),
  date: Date.now() + Math.floor(Math.random() * 30 + 30) * 24 * 60 * 60 * 1000,
  timeStart: {
    hours: Math.floor(Math.random() * 4) + 7,
    mins: Math.floor(Math.random() * 5 + 1) * 10
  },
  timeEnd: {
    hours: Math.floor(Math.random() * 10) + 12,
    mins: Math.floor(Math.random() * 5 + 1) * 10
  },
  price: Math.floor(Math.random() * 100 + 1) * 10,
  options: Array.from(createSet(optionsArr, 2, 0, 0.6))
});

let pointsObjectsArray = new Array(POINTS_COUNT).fill(``).map(getPoint);

// Меню

const getMenu = () => ({
  menuPoints: [`Table`, `Stats`],
});

// Фильтры

const getFilters = () => ({
  filters: [`Everything`, `Future`, `Past`],
});

// Общая стоимость

export {getPoint, pointsObjectsArray, getMenu, getFilters};
