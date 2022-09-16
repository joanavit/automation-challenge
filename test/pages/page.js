
/**
 * Page - Page Object Base Function to open the browser
 * @param {path} - URL link to open
 * @param {width} - WIP
 * @param {height} - WIP
 */
export default class Page {
    async open(path, width, height) {
        await browser.url(path);
        //if (width || height) {
            //await browser.setWindowSize(width, height);
        //} else {
        //    await browser.maximizeWindow();
        //}
        await browser.setTimeout({
            'pageLoad': 10000,
            'script': 60000
        });
    }
}
