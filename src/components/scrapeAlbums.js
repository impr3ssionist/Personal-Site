const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("https://www.allmusic.com/newreleases");

  const grabartists = await page.evaluate(() => {
    const artist = document.querySelectorAll(".artist");
    let artists = [];
    artist.forEach((art) => {
      artists.push(art.innerText);
    });
    return artists;
  });

  const grabAlbums = await page.evaluate(() => {
    const album = document.querySelectorAll(".title");
    let albums = [];
    album.forEach((alb) => {
      albums.push(alb.innerText);
    });
    return albums;
  });

  const grabGenres = await page.evaluate(() => {
    const genre = document.querySelectorAll(".genres");
    let genres = [];
    genre.forEach((gen) => {
      genres.push(gen.innerText);
    });
    return genres;
  });

  console.log("Artists: ", grabartists);
  console.log("Albums: ", grabAlbums);
  console.log("Genres: ", grabGenres);

  await browser.close();
})();
