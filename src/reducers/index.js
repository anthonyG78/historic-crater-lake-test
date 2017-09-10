import { combineReducers } from 'redux';
import historicCraterLake from './reducer_historicCraterLake';
import selectedBrand from './reducer_selectedBrand';

const rootReducer = combineReducers({
    historicCraterLake, 
    selectedBrand,
});

export default rootReducer;
