import { CRYPTOCURRENCY_FILTER } from './CryptoCurrencyActionTypes';
import Axios from 'axios';


export const updateComponentState = (type,payload) => {
    return{
        type,
        payload
    }
}

export const cryptoCurrency = (currency) => dispatch => {
    const url = `https://api.coinmarketcap.com/v1/ticker/?convert=${currency}&limit=10`
    Axios.get(url)
    .then(res => {
    dispatch(updateComponentState(CRYPTOCURRENCY_FILTER, {
                cryptoCurrencyList: res.data
            }));
    })
}