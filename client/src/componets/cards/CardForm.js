import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addCard, addCardWithImg } from '../../actions/cardActions';
import isEmpty from "../../validation/is-empty";
// Input form
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';

class CardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      img: "",
      title: "",
      description: "",
      errors: {}
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  fileSelectedHandler = event => {
    // const img = fileConvertor(event.target.files[0]) + ""
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    let img = ""
    reader.onload = () => {
      img = reader.result
      this.setState({
        selectedFile: img
      })
    };
    
  }
  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  onSubmit(e){
    e.preventDefault();
    const Data = {
      img: this.state.selectedFile,
      title: this.state.title,
      description: this.state.description
    }
      this.props.addCard(Data)

    this.setState({title: "", description: "", selectedFile: ""})
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="cardForm">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create</h1>
              <p className="lead text-center">
                Share 
              </p>
              <img src="data:image/png;base64, " alt="Red dot" />
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup placeholder="Title" name="title" type="text" value={this.state.title} onChange={this.onChange} error={errors.title} />
                <TextAreaFieldGroup placeholder="Description" name="description" value={this.state.description} onChange={this.onChange} error={errors.description} />
                <input type="file" onChange={this.fileSelectedHandler} name="file" />
                <button type="submit" className="btn btn-dark" >
                  Submit
                </button>
              </form>

            </div>
          </div>
        </div>
      </div> 
    )
  }
}
CardForm.propTypes = {
  addCard: PropTypes.func.isRequired,
  addCardWithImg: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  errors: state.errors
})

export default connect(mapStateToProps, {addCard, addCardWithImg})(CardForm);
