import React from 'react';
import Menu from '../common/menu/Menu';
import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';
import ContactList from './ContactList';

export default class ContactUs extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <Header>
          <h1 className={"h1 text-white header-background-transparent text-uppercase"}>Kapcsolat</h1>
          <h2 className={"h4 text-white header-background-transparent text-uppercase"}>Keress minket telefonon, e-mailben vagy a kedvenc csevegő appodon keresztül!</h2>
        </Header>
        <ContactList />
        <Footer />
      </React.Fragment>
    )
  }
}
