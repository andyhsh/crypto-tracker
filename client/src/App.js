import React, { Component } from 'react';
import io from 'socket.io-client';
import Card from './components/Card';
import { data } from './config/dummyData';

class App extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.socket = io('http://localhost:4000');
    this.socket.on('connect', test => {
      console.log('User connected (client browser)');
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Cryptocurrency Real-time Price</h1>
        <div className="container__cards">
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
      </div>
    );
  }
}

export default App;
