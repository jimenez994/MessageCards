import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardItem from './CardItem';

class CardFeed extends Component {
  render() {
    const { cards } = this.props;
    return cards.map(card =>  <CardItem key={card.id} card={card}/>)
  }
}

CardFeed.propTypes = {
  cards: PropTypes.array.isRequired
}
export default CardFeed;