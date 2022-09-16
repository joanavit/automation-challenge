import Page from "./page";

// VARIABLES //
const mercedesUKurl = "https://www.mercedes-benz.co.uk";

// SELECTORS using deep selector //
class homePage extends Page {
    get headerTop() {
        return $('>>>.owc-header__top');
    }
    get cookieWindow() {
        return $('>>>.cmm-cookie-banner__overlay');
    }
    get mercedesLogoIcon() {
        return $(`[href$='/passengercars.html']`);
    }
    get messengerButton() {
        return $('[title="Messenger button"]');
    }
    get ourModelsSection() {
    return $('>>>.dh-io-vmos_3zIAO');
    }
    get hatchbacksModelTopMenu() {
        return $('>>>#hatchbackid');
    }
    get hatchbacksModelTopMenuAfterScolling() {
        return $('>>>#hatchback-portaledId');
    }
    get gridCard() {
        return $('>>>.dh-io-vmos_1PW4e');
    }
    get openMoreOptionsMenu() {
        return $('>>>[aria-label="Open more options menu"]');
    }
    get carConfigIcon() {
        return $('>>>[name="car-config"]');
    }
    async open() {
        await super.open(mercedesUKurl);
    }
}

export default new homePage();