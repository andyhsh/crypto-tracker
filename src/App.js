import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import { data } from './config/dummyData';

class App extends Component {
  state = {
    data: []
  };

  render() {
    return (
      <div className="container">
        <h1>Cryptocurrency Real-time Price</h1>
        {data.map(currency => (
          <Card
            key={currency.ticker.base}
            name={currency.ticker.base}
            price={currency.ticker.price}
            volume={currency.ticker.volume}
            change={currency.ticker.change}
          />
        ))}
      </div>
    );
  }
}

export default App;
