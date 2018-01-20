import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/';

import Landing from './Landing';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Dashboard from './Dashboard'
import SurveyNew from './surveys/SurveyNew';
import BlogNew from './blogs/BlogNew';
import LoginPage from '../components/pages/LoginPage';

// PAGES

import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ShowBlogPage from './pages/ShowBlogPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';


class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div className="container">
            <Header/>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/about" component={AboutPage}/>
            <Route exact path="/services" component={ServicesPage}/>
            <Route exact path="/blog" component={BlogPage}/>
            <Route exact path="/blog/:id" component={ShowBlogPage}/>
            <Route exact path="/contact" component={ContactPage}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route path="/blog/new" component={BlogNew}/>
            <Route path="/surveys/new" component={SurveyNew}/>
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);