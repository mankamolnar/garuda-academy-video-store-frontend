import React from 'react';
import './resources/header.css';

export default class Header extends React.Component {
  render() {
    return (
      <div className={"row"} id={"header"}>
        <div className={"col-1"}></div>
        <div className={"col-10 pt-5 pb-5 text-center"}>
          {this.props.children}
        </div>
        <div className={"col-1"}></div>
      </div>
    );
  }
}