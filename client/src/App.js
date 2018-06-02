import React, { Component } from 'react';
import logo from './logo.svg';
// import backp from "../../src/main/webapp/images/backp.jpeg";
import './App.css';
import axios from 'axios';

class App extends Component {
    state = {
      selectedFile: null,
      img: "",
      title: "",
      description: ""
    }

    fileSelectedHandler = event => {
      this.setState({
        selectedFile: event.target.files[0]
      })
    }
    fileUploadHandler = () => {
      const fd = new FormData();
      
      const data ={
        img: "this.state.selectedFile.name",
        title: "testing",
        description: "some code"
      }
      fd.append("file", this.state.selectedFile);
      fd.append("card", JSON.stringify(data));
      const config = { headers: { "Content-Type": "application/json" } };
      axios.post("http://localhost:8080/api/card/new",  fd,config,{ 
        onUploadProgress: progressEvent => {
          console.log('Upload Progress:'+ Math.round(progressEvent.loaded / progressEvent.total * 100)+ '%')
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
    }
  render() {
  
    return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <img src="" alt=""/>
          <input type="file" style={{ display: "none" }} onChange={this.fileSelectedHandler} ref={fileInput => (this.fileInput = fileInput)}  />
          <button onClick={() => this.fileInput.click()}>Pick File</button>
          <button onClick={this.fileUploadHandler}>upload</button>
      </div>;
  }
}

export default App;
