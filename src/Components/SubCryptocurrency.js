import React, {Component} from 'react';

const priceObj = {
  "IND": "price_ind",
  "USD": "price_usd",
  "EUR": "price_eur"
}

const marke24hchangeObj = {
  "IND": "percent_change_24h",
  "USD": "percent_change_24h",
  "EUR": "percent_change_24h"
}

const marketCapObj = {
  "IND": "market_cap_ind",
  "USD": "market_cap_usd",
  "EUR": "market_cap_eur"
}


class SubCryptoCurreny extends Component {
  state = {
    selectedCurrency: 'IND',
    isAsc:false,
    sortingKey:null
  }

  sortToggleHanlder = () => {
    const {isAsc} = this.state;
    this.setState({isAsc:!isAsc})
  }
  onSort = (key) => { 
    let {  isAsec, sortingKey } = this.state;
    let { cryptocurrentlist} = this.props;
    cryptocurrentlist = cryptocurrentlist.sort((a, b) => isAsec ? a[key] < b[key] ? 1 : -1 : a[key] > b[key] ? 1 : -1);
    this.setState({
      sortingKey: key,
      isAsec: key === sortingKey ? !isAsec : true,
      cryptocurrentlist
    }, () => { this.sortToggleHanlder()})
  }

  onChangeCurrency = (e) => { 
    this.setState({selectedCurrency: e.target.value});
    this.props.cryptoCurrency(e.target.value);
  }
    render(){
          const {cryptocurrentlist} =this.props;
          const {isAsc}= this.state;
        return(
            <div>
            <div className="dropdown">
              <select onChange={this.onChangeCurrency}>
                <option value="IND">IND</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
               <table className="crypto_currency_table">
          <thead>
                <tr>
                  <th onClick={() => this.onSort('name')}>
                    <span className="currency_head_span">
                      {this.state.sortingKey === 'name' &&
                       (isAsc ? <i className="fa fa-sort-down"></i> :
                       <i className="fa fa-sort-up"></i>)}
                    </span>
                    NAME
              </th>
                  <th onClick={() => this.onSort('price_ind')}>
                    <span className="currency_head_span">
                      {this.state.sortingKey === 'price_ind' && (isAsc ? <i className="fa fa-sort-down"></i> :
                        <i className="fa fa-sort-up"></i>)}
                    </span>
                    PRICE
              </th>
                  <th onClick={() => this.onSort('percent_change_24h')}>
                    <span className="currency_head_span">
                    {this.state.sortingKey === 'percent_change_24h' && (isAsc ? <i className="fa fa-sort-down"></i> :
                        <i className="fa fa-sort-up"></i>)}
                    </span>
                    24h CHANGE
              </th>
                  <th onClick={() => this.onSort('market_cap_ind')}>
                    <span className="currency_head_span">
                    {this.state.sortingKey === 'market_cap_ind' && (isAsc ? <i className="fa fa-sort-down"></i> :
                        <i className="fa fa-sort-up"></i>)}
                    </span>
                    MARKET CAPITAL
              </th>
                </tr>
          </thead>
              <tbody>
                {
                  cryptocurrentlist.map((o, ind) => {
                    return <tr key={o.id}>
                      <td>{o.name}</td>
                      <td>
                        <span className="currency_span">
                          {o[priceObj[this.state.selectedCurrency]]}
                          <p>{this.state.selectedCurrency}</p>
                        </span>
                      </td>
                      <td>
                        <span className="currency_span">
                        {o[marke24hchangeObj[this.state.selectedCurrency]]}
                          <p>{this.state.selectedCurrency}</p>
                        </span>
                      </td>
                      <td>
                        <span className="currency_span">
                          {o[marketCapObj[this.state.selectedCurrency]]}
                          <p>{this.state.selectedCurrency}</p>
                        </span>
                      </td>
                    </tr>
                  })
                }
              </tbody>
        </table>
                </div>
        )
    }
}

export default SubCryptoCurreny;