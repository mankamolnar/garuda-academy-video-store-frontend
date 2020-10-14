import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={"mt-3"}>&nbsp;</div>
        <footer className={"fixed-bottom bg-dark text-center text-light mt-3"}>
          &copy; Garuda Academy - 2020
        </footer>
      </React.Fragment>
    );
  }
} 