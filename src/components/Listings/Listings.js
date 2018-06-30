import React from 'react';
import PropTypes from 'prop-types';
import ListingItem from '../ListingItem/ListingItem';
import {listingShape} from '../../propz/listingsProp';

import './Listings.css';

class Listings extends React.Component {
  // allows us to set prop types, on a component
  static propTypes = {
    // an array of objects
    listings: PropTypes.arrayOf(listingShape),
  };

  render () {
    const {listings} = this.props;
    // const listings = this.props.listing // ES 5
    const listingsItemComponents = listings.map((listing, index) => {
      return (
        <ListingItem
          listing={listing}
          index={index}
          key={listing.id}
        />
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
