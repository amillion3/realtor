import React, { Component } from 'react';

import Listings from '../components/Listings/Listings';
import Building from '../components/Building/Building';
import ListingForm from '../components/ListingForm/ListingForm';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Listings></Listings>
        <Building></Building>
        <ListingForm></ListingForm>
      </div>
    );
  }
}

export default App;
