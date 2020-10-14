import React from 'react';
import Menu from '../common/menu/Menu';
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';
import TeacherList from './TeacherList';

export default class Teachers extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <Header>
          <h1 className={"h1 text-white header-background-transparent text-uppercase"}>Oktatóink</h1>
          <h2 className={"h4 text-white header-background-transparent text-uppercase"}>
            Oktatóinkat magas követelmények szerint válogatjuk, hogy gyermeke a lehető legprofibbaktól tanulhasson!
          </h2>
        </Header>
        <TeacherList />
        <Footer />
      </React.Fragment>
    );
  }
}
