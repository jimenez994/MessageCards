import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addCard } from '../../actions/cardActions';

// Input form
import TextFieldGroup from '../common/TextFieldGroup';

class CardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
      title: "",
      description: "",
      errors: {}
    }

  }
  render() {
    return (
      <div>
        <h1>card form</h1>
      </div>
    )
  }
}
CardForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  errors: state.errors
})

export default connect(mapStateToProps, {addCard})(CardForm);
