import {CRYPTOCURRENCY_FILTER} from '../actions/CryptoCurrencyActionTypes';

const initialState = {
    cryptoCurrencyList: [],
  
}

const CryptoCurrencyReducer = ( state=initialState, action) => {

    switch(action.type){
        case CRYPTOCURRENCY_FILTER:
        return {...state, ...action.payload}

        default :
        return state;
    }
}

export default CryptoCurrencyReducer;