import { FETCH_HISTORIC_CRATER_LAKE } from '../actions/index';

/**
 * Receive the data form the historic-crater-lake API
 * @return {object} new state
 */
export default (state = {}, action) => {
    switch(action.type){
        case FETCH_HISTORIC_CRATER_LAKE: 
            return {...state, ...action.payload.data};
        default:
            return state;
    }
}