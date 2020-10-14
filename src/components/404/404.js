import React from 'react';
import Menu from '../common/menu/Menu';
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';

export default class c404 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <Header>
          <h1 className={"h1 text-white header-background-transparent text-uppercase"}>404</h1>
          <h2 className={"h4 text-white header-background-transparent text-uppercase"}>Keresett lap nem található</h2>
        </Header>
        <Footer />
      </React.Fragment>
    );
  }
}