quote = document.querySelector("#hero-quote");
backgroundImage = document.querySelector(".hero-section");

images = ["hero-section", "hero-section1", "hero-section2"];

i = 1;
setInterval((e) => {
  if (i == images.length) {
    i = 0;
  }
  backgroundImage.classList = [];
  backgroundImage.classList.add(images[i]);
  i++;
}, 5000);

fetch("https://animechan.xyz/api/random/anime?title=naruto")
  .then((response) => response.json())
  .then((data) => (quote.innerHTML = data.quote));