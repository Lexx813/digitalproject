import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';


import Landing from '../components/Landing';
import Dashboard from '../components/Dashboard';
import SurveyNew from '../components/surveys/SurveyNew';
import BlogNew from '../components/blogs/BlogNew';
import Logout from '../components/admin/Logout';


import LoginPage from '../containers/admin/Login';
import Register from '../containers/admin/Register';


// PAGES

import AboutPage from '../components/pages/AboutPage';
import BlogPage from '../components/pages/BlogPage';
import ShowBlogPage from '../components/pages/ShowBlogPage';
import ContactPage from '../components/pages/ContactPage';
import ServicesPage from '../components/pages/ServicesPage';
import User from '../components/admin/Users';

// AUTH
import Auth from '../hoc/Auth';

//LAYOUT
import Layout from '../hoc/Layout';


class AppRouter extends Component {


  render() {
    return (
                
              
        <BrowserRouter>
          <Layout>          
            <Route path="/blog/new" component={Auth(BlogNew,true)} />
            <Route exact path="/blog/:id" component={Auth(ShowBlogPage,null)} />
            <Route exact path="/blog" component={Auth(BlogPage,null)} />
            <Route exact path="/contact" component={Auth(ContactPage,null)} />
            <Route exact path="/login" component={Auth(LoginPage)} />
            <Route exact path="/logout" component={Auth(Logout,true)} />
            <Route exact path="/register" component={Auth(Register,true)} />
            <Route path="/user" exact component={Auth(User, true)} />
            <Route path="/surveys/new" component={Auth(SurveyNew,true)} />
            <Route exact path="/dashboard" component={Auth(Dashboard,true)} />
            <Route exact path="/about" component={Auth(AboutPage,null)} />
            <Route exact path="/services" component={Auth(ServicesPage,null)} />
            <Route exact path="/" component={Auth(Landing,null)} />       
          </Layout>
        </BrowserRouter>
      
      
  );
  }
};

export default AppRouter;