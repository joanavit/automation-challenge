
const currentBrowser = browser.capabilities.browserName;
const fs = require('fs'); //used to write a file

/**
 * takeBrowserScreenShot - Saves a .png screenshot for both browsers
 * @param {screenShotName}  {String} - Leave empty and the screenshot will be named "BROWSERNAME_randomString"
 */
export const takeBrowserScreenShot = async (screenShotName) => {
    //Generate a random string
    const randomString = Math.random().toString(36).substring(2,7);
    const desiredString = screenShotName;
    if (desiredString) {
        if (currentBrowser === 'chrome') {
            await browser.saveScreenshot('./test/screenshots/CHROME_' + desiredString + '.png');
          } 
          if (currentBrowser === 'firefox') {
            await browser.saveScreenshot('./test/screenshots/FIREFOX_' + desiredString + '.png');
          } 
    } else {
        if (currentBrowser === 'chrome') {
            await browser.saveScreenshot('./test/screenshots/CHROME_' + randomString + '.png');
          } 
          if (currentBrowser === 'firefox') {
            await browser.saveScreenshot('./test/screenshots/FIREFOX_' + randomString + '.png');
          } 
    }
}

/**
 * writeFile - Write the given string results to a text file named according to the browser, example of the output below:
 * Title1: String1
 * Title2: String2
 * @param {stringOneTitle} {String}  - Desired title (i.e. "Title:")
 * @param {stringOne} {String} - Value to write to the text file
 * @param {stringTwoTitle} {String} - - Desired title (i.e. "Title:")
 * @param {stringTwo} {String} - - Value to write to the text file
 */
export const writeFile = async (stringOneTitle, stringOne, stringTwoTitle, stringTwo) => {
   if (currentBrowser === 'chrome') {
    fs.writeFile("test/priceResults/chrome_Output.txt", stringOneTitle + stringOne + "\n" + stringTwoTitle + stringTwo, async (err) => {
      if (err)
        console.log(err);
      else {
        console.log("File written successfully in Chrome!");
      }
    });
  }
  if (currentBrowser === 'firefox') {
  fs.writeFile("test/priceResults/firefox_Output.txt", stringOneTitle + stringOne + "\n" + stringTwoTitle + stringTwo, async (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully in Firefox!");
    }
    });
  }
}

