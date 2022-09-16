import Page from "./page";


// SELECTORS inside the shadow root - using shadow$//
// WIP - some paths need to be reused to not duplicate code
class shadow extends Page {
    // HOMEPAGE || GENERIC && COOKIES //
    get header() {
        return $(`owc-header`).shadow$(`header`);
    }
    get cookieBanner() {
        return $('cmm-cookie-banner');
    }
    get cookieBannerBtnWrapper() {
        return this.cookieBanner.shadow$('cmm-buttons-wrapper');
    }
    get buttonGroup() {
        return this.cookieBannerBtnWrapper.$('.button-group');
    }
    get agreeToAllCookies() {
        return this.buttonGroup.$(`.wb-button--accept-all`);
    }
    //CAR CONFIGURATOR //
    get carConfiguratorFuelTypeGenericPath() {
        return $(`owcc-car-configurator[class*="webcomponent aem-GridColumn"]`).shadow$(`cc-app-container[class="ng-star-inserted"]`).$(`cc-motorization`).$(`cc-motorization-filters`).$(`cc-motorization-filters-form`).$(`form`).$(`[data-primary-filter-id="technicalInformation.engine.fuelType"]`);
    }
    get fuelTypeOptionsWrapper() {
        return this.carConfiguratorFuelTypeGenericPath.$(`.wb-multi-select-control__checkbox-wrapper`);
    }
    get fuelTypeCheckbox() {
        return this.fuelTypeOptionsWrapper.$(`.wb-checkbox-control__checkmark-icon`);
    }
}

export default new shadow();