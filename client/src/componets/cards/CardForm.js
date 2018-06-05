import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { addCard } from '../../actions/cardActions';
// import isEmpty from "../../validation/is-empty";
// Input form
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import './cardStyle.css'

class CardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: null,
      title: "",
      description: "",
      errors: {}
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  fileSelectedHandler = event => {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      this.setState({
        img: reader.result
      })
    };
    
  }
  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  onSubmit(e){
    e.preventDefault();
    const Data = {
      img: this.state.img,
      title: this.state.title,
      description: this.state.description
    }
      this.props.addCard(Data)
    this.setState({title: "", description: "", img: null})
    this.props.history.push('/cards')
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="cardForm">
        <div className="container">
          <div className="col-md-8 m-auto">
            <div>
              <h1 className="display-4 text-center">Create</h1>
              <p className="lead text-center">
                Share 
              </p>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup placeholder="Title" name="title" type="text" value={this.state.title} onChange={this.onChange} error={errors.title} />
                <TextAreaFieldGroup placeholder="Message" name="description" value={this.state.description} onChange={this.onChange} error={errors.description} />
                <input type="file" onChange={this.fileSelectedHandler} name="file" />
                <button type="submit" className="btn btn-dark" >
                  Submit
                </button>
              </form>
            </div>
          </div> 
        </div>
        <br/>
        <div className="flip flip-vertical text-center">
          <div className="front" style={ { backgroundImage: `url(${this.state.img})` } } >
            <h1 className="text-shadow">{this.state.title}</h1>
          </div>
          <div className="back">
            <h2>Message</h2>
            <p className="text-shadow">{this.state.description}</p>
          </div>
        </div>
      </div> 
    )
  }
}
CardForm.propTypes = {
  addCard: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  errors: state.errors
})

export default connect(mapStateToProps, {addCard})(CardForm);
