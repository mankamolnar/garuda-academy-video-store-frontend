import React from 'react';
import { connect } from "react-redux";
import SideButton from './SideButton';
import Menu from '../common/menu/Menu';
import Footer from '../common/footer/Footer';
import Facebook from '../common/facebook/Facebook';

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="row">
          <div className="col-md-2 p-0">
            <div className="btn-group-vertical w-100">
              <SideButton isCommercial={false}>Python</SideButton>
              <SideButton isCommercial={true}>Django</SideButton>
              <SideButton isCommercial={false}>Java</SideButton>
              <SideButton isCommercial={true}>Spring</SideButton>
              <SideButton isCommercial={false}>HTML</SideButton>
              <SideButton isCommercial={false}>CSS</SideButton>
              <SideButton isCommercial={true}>Bootstrap</SideButton>
            </div>
            
          </div>
          <div className="col-md-10">
            <h1>Nézz oktatóvideókat!</h1>
            Kattints a bal menüben az ingyenes tartalmakért vagy jelentkezz be!
          </div>
        </div>
        
        <Facebook />
        <Footer />
      </div>
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
