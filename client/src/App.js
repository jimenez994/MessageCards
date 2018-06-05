import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Cards from './componets/cards/Cards';
import CardForm from './componets/cards/CardForm';

// Componets
import Navbar from "./componets/layout/navbar";
import Landing from "./componets/layout/landing";
import Footer from "./componets/layout/footer";

class App extends Component {
  
  render() {
  
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar/>
            <Route exact path="/" component={Landing}/>
            <div className="container">
              <Route exact path="/cards" component={Cards}/>
              <Route exact path="/create" component={CardForm} />
            </div>
            <Footer/>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
