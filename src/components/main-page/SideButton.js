import React from 'react';
import './main-page.css';
import Optional from 'optional-js';

export default class SideButton extends React.Component {
  render() {
    let isCommercial = Optional.ofNullable(this.props.isCommercial);
    let borderColor = isCommercial.isPresent() && isCommercial.get()
      ? "ffc108"
      : "6d9639";

    return (
      <button
          type="button"
          className="btn btn-secondary rounded-0 bg-dark border-bottom-0 border-top-0 text-uppercase"
          style={{"borderLeft": "5px solid #" + borderColor}}>

        <h3>{this.props.children}</h3>
      </button>
    );
  }
}