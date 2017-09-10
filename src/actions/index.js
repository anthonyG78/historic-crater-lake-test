import axios from 'axios';

export const FETCH_HISTORIC_CRATER_LAKE = 'FETCH_HISTORIC_CRATER_LAKE';
export const SELECTED_BRAND = 'SELECTED_BRAND';

/**
 * Fetch the data form the historic-crater-lake API
 * @return {object} action
 */
export function fetchHistoricCraterLake() {
    const url = `https://historic-crater-lake-59853.herokuapp.com/`;
    const request = axios.get(url);

    return {
        type: FETCH_HISTORIC_CRATER_LAKE,
        payload: request,
    }
}

/**
 * Select the brand
 * @return {object} action
 */
export function selectBrand(brand) {
    return {
        type: SELECTED_BRAND,
        payload: brand,
    }
}