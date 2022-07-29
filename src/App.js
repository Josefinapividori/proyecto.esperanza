import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Shop from './Components/Shop';
import Contact from './Components/Contact';
import Servicios from './Components/Servicios';
import Portfolio from './Components/Portfolio';
import Login from './Components/Login';
import Register from './Components/Register';

import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      shopData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getShopData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({shopData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getShopData();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={ <>
              <Header data={this.state.shopData.main} />
              <About data={this.state.shopData.main} />
              <Portfolio data={this.state.shopData.portfolio} />
              <Servicios data={this.state.shopData.servicios} />
              <Contact data={this.state.shopData.main} />
              <Footer data={this.state.shopData.main} /></>} />
          </Routes>
        </div>
        <div className= "Container">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/shop" element={<Shop data={this.state.shopData.shop} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user" element={ <>
              <Header data={this.state.shopData.main} />
              <About data={this.state.shopData.main} />
              <Shop data={this.state.shopData.shop} />
              <Portfolio data={this.state.shopData.portfolio} />
              <Servicios data={this.state.shopData.servicios} />
              <Contact data={this.state.shopData.main} />
              <Footer data={this.state.shopData.main} /></>} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
