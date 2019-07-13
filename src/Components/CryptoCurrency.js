import React, {Component} from 'react';
import {connect} from 'react-redux';
import {cryptoCurrency } from '../actions/CryptocurrencyAction';
import SubcryptoCurrency from './SubCryptocurrency';
import './CryptoCurrency.css';

class CryptoCurrency extends Component {
  constructor(){
    super();
    this.state = {
      cryptocurrentlist:[],
    }
  }
  
  componentDidMount = () => {
    this.props.cryptoCurrency('IND')
  }
  componentWillReceiveProps = (nextprops) => {
    this.setState({
      cryptocurrentlist: nextprops.cryptoCurrencyList,
    })
  }
  render(){
          const {cryptocurrentlist} = this.state;
  return (
        <div className="crypto_Currency">
          <div>
            {!cryptocurrentlist ?
              <p>...loading</p> :
              <SubcryptoCurrency
                cryptocurrentlist={cryptocurrentlist}
                cryptoCurrency={this.props.cryptoCurrency}
              />
            }
          </div>
    </div>
  );
}

}
const mapStateToProps = (state) => {
  return {
    cryptoCurrencyList: state.CryptocurrencyReducer.cryptoCurrencyList,
    
  }
}

const mapDispatchToProps = {
  cryptoCurrency,
}

export default connect(mapStateToProps,mapDispatchToProps)(CryptoCurrency);
