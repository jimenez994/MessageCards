import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardItem extends Component {
  render() {
    const { card } = this.props;
    return (
      <div class="flip flip-vertical">
        <div class="front" style={{ backgroundImage: `url(${card.img})` }}>
          <h1 class="text-shadow">{card.title}</h1>
        </div>
        <div class="back">
          <h2>Message</h2>
          <p>{card.description}</p>
        </div>
      </div>
    );
  }
}
CardItem.propTypes = {
  post: PropTypes.object.isRequired
}

export default CardItem;