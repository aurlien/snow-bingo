import "./style.css";
import spinner from "./spinner.svg";
import { snowTypes } from "./data";

const delay = 0;
var counter = 0;
var loading = false;

const items = snowTypes.sort(() => Math.random() - 0.5);

document.querySelector("#app").innerHTML = `
  <h1>Sn❆Bingo</h1>
  <div class="container">
    <div id="card"></div>
    <div id="info"></div>
  </div>
`;

const card = document.querySelector("#card");
const info = document.querySelector("#info");

const setItem = (item) => {
  const cardContent = `
      <span>${item.key}</span>
      <div>
        [${item.code}]
      </div>
  `;

  const infoContent = `
    <h2>${item.name}</h2>
    <p>
      ${counter + 1} / ${items.length}
    </p>
  `;

  if (loading) {
    card.innerHTML = `
      <img src=${spinner} />
    `;

    setTimeout(() => {
      loading = false;
      card.innerHTML = cardContent;
      info.innerHTML = infoContent;
    }, delay);
  } else {
    card.innerHTML = cardContent;
    info.innerHTML = infoContent;
  }
};

const next = () => {
  if (counter < snowTypes.length - 1) {
    loading = true;
    setItem(items[++counter]);
  }
};

const previous = () => {
  if (counter > 0) {
    setItem(items[--counter]);
  }
};

const handleKeyDown = (key) => {
  const callback = {
    ArrowLeft: () => previous(),
    ArrowRight: () => next(),
  }[key];

  callback?.();
};

setItem(items[0]);

document.addEventListener("keydown", (event) => handleKeyDown(event.key));
card.addEventListener("touchstart", () => next());
