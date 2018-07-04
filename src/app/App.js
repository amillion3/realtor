import React, { Component } from 'react';

import Listings from '../components/Listings/Listings';
import Building from '../components/Building/Building';
import ListingForm from '../components/ListingForm/ListingForm';
import connection from '../firebaseRequests/connection';
import listingRequests from '../firebaseRequests/listings';
import './App.css';

class App extends Component {
  state = {
    listings: [],
    selectedListingId: -1,
  }

  listingSelectEvent = id => {
    this.setState({
      selectedListingId: id,
    });
  }

  formSubmitEvent = newListing => {
    listingRequests.postRequest(newListing)
      .then(() => {
        listingRequests.getRequest()
          .then(listings => {
            this.setState({listings});
          }); // no need for another catch
      })
      .catch(err => {
        console.error('error with listings POST', err);
      });
  }

  componentDidMount () {
    connection();
    listingRequests.getRequest()
      .then(listings => {
        this.setState({listings});
      })
      .catch(err => {
        console.error(err);
      });
  }
  render () {
    const {selectedListingId, listings} = this.state;
    const selectedListing = listings.find(listing => listing.id === selectedListingId) || {nope: 'nope'};
    return (
      <div className="App">
        <div className="col-md-6">
          <Listings
            listings={this.state.listings}
            onListingSelection={this.listingSelectEvent}
            // passing a function down to ListingItem component
          />
        </div>
        <div className="col-md-6">
          <Building listing={selectedListing}/>
        </div>
        <div className="col-md-12">
          <ListingForm
            onSubmit={this.formSubmitEvent}
          />
        </div>
      </div>
    );
  }
}

export default App;
