import React from 'react';
import "./footer.css";

export default class Footer extends React.Component {
  render() {
    let currentYear = new Date().getFullYear();

    return (
      <React.Fragment>
        <div className={"border-top-1"}>&nbsp;</div>
        <footer className={"fixed-bottom bg-deep-dark text-center text-light border-top border-dark"}>
          &copy; Garuda Academy - 2020 - {currentYear}
        </footer>
      </React.Fragment>
    );
  }
} 