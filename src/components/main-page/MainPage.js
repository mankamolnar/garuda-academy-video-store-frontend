import React from 'react';
import { connect } from "react-redux";
import Menu from '../common/menu/Menu';
import Footer from '../common/footer/Footer';
import Facebook from '../common/facebook/Facebook';
import SideBar from './../common/sidebar/SideBar';

class MainPage extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <div className="row fill-container">
          <div className="col-md-2 p-0 bg-deep-dark">
            <SideBar />
          </div>
          <div className="col-md-10">
            <h1>Nézz oktatóvideókat!</h1>
            Kattints a bal menüben az ingyenes tartalmakért vagy jelentkezz be!
          </div>
        </div>
        
        <Facebook />
        <Footer />
      </>
    );
  }
}

const selector = (store) => {
  return {
    token: store.token,
    isLoggedIn: store.token.fetched && !store.token.error
  };
}

export default connect(selector)(MainPage);
