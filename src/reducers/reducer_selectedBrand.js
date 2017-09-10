import { SELECTED_BRAND } from '../actions/index';

/**
 * Receive the selected brand data
 * @return {object} new state
 */
export default (state = {}, action) => {
    switch(action.type){
        case SELECTED_BRAND: 
            return action.payload;
        default:
            return state;
    }
}