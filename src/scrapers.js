const puppeteer = require("puppeteer");
const url = "https://www.lechpoznan.pl/terminarz--wyniki,47.html";

async function scrapeGame(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = await page.$x(
    "/html/body/div[2]/div[2]/div/div/div/div[1]/div/div[2]/div[1]/div[1]/div[1]/p[1]/img"
  );
  const src = await el.getProperty("src");
  const srcTxt = await src.jsonValue();

  console.log({ srcTxt });
  browser.close();
}

scrapeGame(url);
