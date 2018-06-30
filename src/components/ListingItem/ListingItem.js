import React from 'react';
// import PropTypes from 'prop-types';
import './ListingItem.css';
import { listingShape } from '../../propz/listingsProp';

class ListingItem extends React.Component {
  static propTypes = {
    // brings in the shape from line 3
    listing: listingShape,
  }
  render () {
    const {listing} = this.props;
    return (
      <li index={listing.id}>{listing.price}</li>
    );
  }
}

export default ListingItem;
