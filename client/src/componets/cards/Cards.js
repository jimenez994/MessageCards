import React, { Component } from 'react';
import Spinner from "../common/Spinner";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCards } from '../../actions/cardActions';
import CardFeed from './CardFeed';

class Cards extends Component {
  componentDidMount(){
    this.props.getCards();
  }
  render() {
    const { cards, loading } = this.props.card;
    console.log(this.props.card)
    let CardsContent;
    if (cards === null || loading) {
      CardsContent = <Spinner />
    } else {
      CardsContent = <CardFeed cards={cards} />
    }
    return (
      <div className="feed">
        <div className="container">
          { CardsContent }
        </div>
      </div>
    )
  }
}
Cards.propTypes ={
  getCards: PropTypes.func.isRequired,
  card: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  card: state.card
})
export default connect(mapStateToProps, { getCards })(Cards);
