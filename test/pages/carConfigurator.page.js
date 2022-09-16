import Page from "./page";

// VARIABLES //
////////////////////////////////////////////////////////////////////

// SELECTORS using deep selector //
class carConfiguratorPage extends Page {
    get stage() {
        return $('>>>.wb-360-viewer__overlay');
    }
    get filterContainers() {
        return $('>>>.cc-motorization-filters-form');
    }
    get fuelSelector(){
        return $('>>>.wb-multi-select-control__button');
    }
    get fuelWrapper(){
        return $('>>>.wb-multi-select-control__checkbox-wrapper');
    }
    get fuelOptions(){
        return $('>>>wb-checkbox-control');
    }
    get sortByButton(){
        return $('>>>#motorization-filters-sorting-options');
    }
    get priceCell() {
        return $('>>>.wb-type-copy-strong.cc-motorization-header__price');
    }
}

export default new carConfiguratorPage();