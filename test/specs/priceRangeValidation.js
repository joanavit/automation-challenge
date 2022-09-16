import { expect as chaiExpect } from "chai";
import carConfiguratorPage from "../pages/carConfigurator.page";
import homePage from "../pages/home.page";
import shadowPage from "../pages/shadow.page";
import { writeFile, takeBrowserScreenShot } from "../utils/helper";

///// TESTCASE VARIABLES /////
const modelClass = 'A';
const minModelPrice = '£15,000'
const maxModelPrice = '£60,000'
const mainPageTitle = 'Mercedes-Benz Passenger Cars';
const logoLink = "/passengercars.html";
const modelsSectionTitle = 'Our models';
const desiredModel = 'Hatchbacks';
const productClass = 'A-Class';
const productType = 'Hatchback';
const desiredOption = 'Build your car';
const carConfiguratorURL = '/car-configurator.html';
const desiredFuelType = 'Diesel';
const width = 1024;
const height = 768;
const currentBrowser = browser.capabilities.browserName;
const screenShotName = 'MercedesAutomationChallenge';
const activeState = 'active';
const fuelSelectorAfterSelecting = 'Fuel type, selected 1 items';
const ariaLabel = 'aria-label';
const lowestPriceTitle =  'Lowest Price:';
const highestPriceTitle = 'Highest Price:';

///// TESTCASE /////
describe(`Validate ${modelClass} Class models price are between ${minModelPrice} and ${maxModelPrice}`, async () => {
  it(`Open Mercedes-benz United Kingdom market`, async () => {
    await homePage.open();
    // RESIZE WINDOW FOR FIREFOX //
    // this resize is due to the lack of the hatchbacks svg selector which was not possible to find on my behalf
    if (currentBrowser === 'firefox') {
    await browser.setWindowSize(width, height);
    }
    // Assertion to check Mercedes' page title
    await expect(browser).toHaveTitle(mainPageTitle);
    // Assertion to check Mercedes' logo link
    await expect(homePage.headerTop).toHaveUrlContaining(logoLink);
    //// Wait for the chat button to be displayed - it was usually the last item to load on the page
    // Removed because it can only be found with a higher browser resolution
    //await homePage.messengerButton.waitForDisplayed({ timeout: 20000 });
  })
  it(`Agree to all cookies`, async () => {
    // Wait for the cookie banner window to be displayed
    await shadowPage.cookieBannerBtnWrapper.waitForDisplayed({ timeout: 5000 });
    // Wait for the button wrapper to be displayed
    await shadowPage.agreeToAllCookies.waitForDisplayed({ timeout: 5000 });
    // Agree to all cookies
    await shadowPage.agreeToAllCookies.click();
    // Assertion to check the cookie banner window is no longer present
    chaiExpect(await shadowPage.cookieBannerBtnWrapper).to.not.be.true;
    //// Arrow down 2x - aid to the next "scrollIntoView" function
    await browser.keys('\uE015');
    await browser.keys('\uE015');
  })
  it(`Under “${modelsSectionTitle}” - Select “${desiredModel}”`, async () => {
    //#TODO - get the hatchbacksModel svg selector when the window is in maximum size - could not find the ids in that scenario
    // Scroll the "Hatcbacks" button into view
    await homePage.hatchbacksModelTopMenu.scrollIntoView();
    // Click to make sure the right model is selected. Note: The "Hatcbacks" button's id changes when it becomes a part of the floating top menu
    await homePage.hatchbacksModelTopMenuAfterScolling.click();
    // Assertion to check "Hatchbacks" is selected
    await expect(homePage.hatchbacksModelTopMenuAfterScolling).toHaveProperty(activeState, true);
  })
  it(`Mouse over the “${modelClass} Class” model available and proceed to “${desiredOption}”`, async () => {
    // Scroll the first car Card on the grid into view
    await homePage.gridCard.scrollIntoView(); 
    // Assertion to check card's titles
    await expect(homePage.gridCard).toHaveTextContaining(productClass,productType);
    // Move to the first car Card on the grid
    await homePage.gridCard.moveTo();
    // Click on the "+" icon
    await homePage.openMoreOptionsMenu.click();
    await homePage.carConfigIcon.waitForDisplayed({ timeout: 6000 });
    // Arrow up 2x - aid to find the next option
    await browser.keys('\uE013');
    await browser.keys('\uE013');
    // Click on the option "Build your car"
    await homePage.carConfigIcon.click();
    // Wait for the header of the car configurator's page to be displayed
    await homePage.headerTop.waitForDisplayed({ timeout: 5000 });
    // Wait for the car configurator's stage to be displayed
    await carConfiguratorPage.stage.waitForDisplayed({ timeout: 10000 });
    // Assertion to check the car configurator's url
    await expect(browser).toHaveUrlContaining(carConfiguratorURL);
    // Arrow down 2x - aid to the next "click" function
    await browser.keys('\uE015');
    await browser.keys('\uE015');
    ///////////////////////////////////////////////////////////////
    // ACTION TO DO ONLY IN FIREFOX  //
    if (currentBrowser === 'firefox') {
      // Arrow down 2x - aid to the next "click" function
      await browser.keys('\uE015');
      await browser.keys('\uE015');
    }
    ///////////////////////////////////////////////////////////////
  })
  it(`Filter by Fuel type “${desiredFuelType}”`, async () => {
    // Click on the "Fuel Type" drop down to open it
    await carConfiguratorPage.fuelSelector.click();
    ///////////////////////////////////////////////////////////////
    // ACTION TO DO ONLY IN FIREFOX  //
    if (currentBrowser === 'firefox') {
      // Arrow down 2x - aid to the next "click" function
      await browser.keys('\uE015');
      await browser.keys('\uE015');
    }
    ///////////////////////////////////////////////////////////////
    // Store element that is the wrapper that envolves all the fuel types
    const fuelTypeOptionsWrapper = await shadowPage.carConfiguratorFuelTypeGenericPath; 
    // Scroll the "Fuel Type's Wrapper" into view
    await fuelTypeOptionsWrapper.scrollIntoView(); 
    // Assertion to check "Fuel Type's Wrapper" is displayed
    await expect(fuelTypeOptionsWrapper).toBeDisplayed();
    // On the "Fuel Type" drop down click on the "Diesel" checkbox - this selector could be improved to look for "Diesel"
    await shadowPage.fuelTypeCheckbox.click(); 
    // Arrow up 1x - aid to the next "click" function
    await browser.keys('\uE013');
    //Close the "Fuel Type" drop down
    await carConfiguratorPage.fuelSelector.click();
    // Assertion to check "Fuel Type" drop down has one option selected
    await expect(carConfiguratorPage.fuelSelector).toHaveAttributeContaining(ariaLabel, fuelSelectorAfterSelecting)
    //// Assertion to check the  "Fuel Type's Wrapper" has closed
    chaiExpect(shadowPage.fuelTypeCheckbox).not.to.be.true;
  })
  it(`Take and save a screenshot of the results`, async () => {
    // WARN - Every time the tests runs, the screenshow is overwritten
    await takeBrowserScreenShot(screenShotName);
  })
  it(`Save the value “£” of the highest and lowest price results in a text file”`, async () => {
    // Get the lowest price from the first price cell
    const lowestPrice = await carConfiguratorPage.priceCell;
    // Get the text from the price cell (comes as an "object object")
    const lowestPriceText = await lowestPrice.getText();
    // Convert "object object" to string
    const lowestPriceString = JSON.stringify(lowestPriceText);
    // Arrow up 2x - aid to the next "selectByAttribute" function
    await browser.keys('\uE013');
    await browser.keys('\uE013');
    // Get the highest price  from the first price cell
    const sortByButton = await carConfiguratorPage.sortByButton;
    // Click on the "Sort by" dropdown and selec the option "Price (highest first)"
    await sortByButton.selectByAttribute('value', '11: price|DESCENDING');
    const highestPrice = await carConfiguratorPage.priceCell;
     // Get the text from the price cell (comes as an "object object")
    const highestPriceText = await highestPrice.getText();
    // Convert "object object" to string
    const highestPriceString = JSON.stringify(highestPriceText);
    // Assetions for highest and lowest price results
    chaiExpect(lowestPriceString && highestPriceString).to.be.a('string').and.to.not.be.empty;
    chaiExpect(lowestPriceString).to.not.eql(highestPriceString);
    chaiExpect(lowestPriceString && highestPriceString).to.contain('£');
    //// Write highest and lowest price results to a text file and named according to the browser
    // WARN - Every time the tests runs, the files are overwritten
    await writeFile(lowestPriceTitle, lowestPriceString, highestPriceTitle, highestPriceString)
})
})
