import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';


import Landing from '../components/Landing';
import Dashboard from '../components/Dashboard';
import SurveyNew from '../components/surveys/SurveyNew';
import BlogNew from '../components/blogs/BlogNew';
import LoginPage from '../containers/admin/Login';

// PAGES

import AboutPage from '../components/pages/AboutPage';
import BlogPage from '../components/pages/BlogPage';
import ShowBlogPage from '../components/pages/ShowBlogPage';
import ContactPage from '../components/pages/ContactPage';
import ServicesPage from '../components/pages/ServicesPage';

//LAYOUT
import Layout from '../hoc/Layout';


class AppRouter extends Component {


  render() {
    return (
    
     
        <BrowserRouter>
          <Layout>
          <div className="container">         
            <Route path="/blog/new" component={BlogNew} />
            <Route exact path="/blog/:id" component={ShowBlogPage} />
            <Route exact path="/blog" component={BlogPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route path="/surveys/new" component={SurveyNew} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/services" component={ServicesPage} />
            <Route exact path="/" component={Landing} /> 
          </div>
          </Layout>
        </BrowserRouter>
      
      
  );
  }
};

export default AppRouter;