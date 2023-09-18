const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

function createMP3frame(url) {
  const mp3HTML = `
    <iframe src="https://vivekfy.onrender.com/low-audiodl?url=${url}" width="100%" height="100%" allowtransparency="true" scrolling="no" style="border:none"></iframe>
  `;

  main.innerHTML = mp3HTML;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const url = search.value;
    createMP3frame(url);
});
