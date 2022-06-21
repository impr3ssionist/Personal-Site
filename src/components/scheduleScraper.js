const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(
    "https://www.baseball-almanac.com/teamstats/schedule.php?y=2022&t=SEA"
  );

  const grabDates = await page.evaluate(() => {
    const date = document.querySelectorAll("tr a");
    let gamedays = [];
    date.forEach((day) => {
      gamedays.push(day.innerText);
    });
    return gamedays;
  });

  //   const grabAlbums = await page.evaluate(() => {
  //     const album = document.querySelectorAll(".title");
  //     let albums = [];
  //     album.forEach((alb) => {
  //       albums.push(alb.innerText);
  //     });
  //     return albums;
  //   });

  //   const grabGenres = await page.evaluate(() => {
  //     const genre = document.querySelectorAll(".genres");
  //     let genres = [];
  //     genre.forEach((gen) => {
  //       genres.push(gen.innerText);
  //     });
  //     return genres;
  //   });

  console.log("Dates: ", grabDates);
  //   console.log("Albums: ", grabAlbums);
  //   console.log("Genres: ", grabGenres);

  await browser.close();
})();
