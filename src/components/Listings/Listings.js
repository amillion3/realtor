import React from 'react';
import PropTypes from 'prop-types';
import {listingShape} from '../../propz/listingsProp';

import './Listings.css';

class Listings extends React.Component {
  // allows us to set prop types, on a component
  static propTypes = {
    // an array of objects
    listings: PropTypes.arrayOf(listingShape)
  };

  render () {
    const {listings} = this.props;
    // const listings = this.props.listing // ES 5
    const listingsItemComponents = listings.map(listing => {
      return (
        <li key={listing.id}>{listing.price}</li>
      );
    });
    return (
      <div className='Listings'>
        <h2>Listings</h2>
        <ul>
          {listingsItemComponents}
        </ul>
      </div>
    );
  }
};

export default Listings;
