import React from 'react';
import Menu from '../common/menu/Menu';
import Header from '../common/header/Header';
import CampList from './CampList';
import Footer from '../common/footer/Footer';
import Facebook from '../common/facebook/Facebook';

export default class Camps extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <Header>
          <h1 className={"h1 text-white header-background-transparent text-uppercase"}>Online táboraink</h1>
          <h2 className={"h4 text-white header-background-transparent text-uppercase"}>
            Tanuld meg elkészíteni saját játékaidat és animációidat a Scratch táborokkal!
          </h2>
        </Header>
        <CampList />
        <Facebook />
        <Footer />
      </div>
    );
  }
}
