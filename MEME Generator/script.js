"use strict";

const generateMemeBtn = document.querySelector(
  ".meme-generator .generate-meme-btn"
);
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeImg = document.querySelector(".meme-generator img");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url, title, author) => {
  memeImg.setAttribute("src", url);
  //   memeImg.src = url;
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = `Meme by: ${author}`;
};

const generateMeme = () => {
  fetch(`https://meme-api.com/gimme/wholesomememes`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      updateDetails(data.url, data.title, data.author);
    })
    .catch((err) => console.error(`${err} 🔥`));
};

generateMemeBtn.addEventListener("click", generateMeme);

generateMeme();
