const puppeteer = require("puppeteer")

async function main() {
    try {

        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36")

        await page.goto("https://web.whatsapp.com/");

        await page.waitForSelector("._2_1wd")
        await delay(5000);

        const contactName = "Elber";
        await page.click(`span[title='${contactName}']`);
        await page.waitForSelector(".OTBsx");

        const editor = await page.$("div[tabindex='-1']");
        await editor.focus();

        const amountOfMessages = 500;

        for (var i = 0; i < amountOfMessages; i++) {
            await page.evaluate(() => {
                const message = "testando boot de whats";
                document.execCommand("insertText", false, message)
            });
            await page.click("span[data-testid='send']");
            await delay(500)
        }

    } catch (error) {
        console.log("erro mine", error);
    }
};

main();

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    })
}

