import React from 'react'
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';


const Layout = (props) => {
  return(
    <div>
    <Header/>
      <div>
      {props.children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout;