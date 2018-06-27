import React, { Component } from 'react';

import Listings from '../components/Listings/Listings';
import Building from '../components/Building/Building';
import ListingForm from '../components/ListingForm/ListingForm';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="col-md-6">
          <Listings></Listings>
        </div>
        <div className="col-md-6">
          <Building></Building>
        </div>
        <div className="col-md-12">
          <ListingForm></ListingForm>
        </div>
      </div>
    );
  }
}

export default App;
