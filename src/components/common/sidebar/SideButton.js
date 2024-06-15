import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import Optional from 'optional-js';
import * as VideoActions from "./../../../redux/actions/VideoActions";

class SideButton extends React.Component {
  render() {
    let categoryId = Optional.ofNullable(this.props.cid);
    let isCommercial = Optional.ofNullable(this.props.isCommercial);
    let isPurchased = Optional.ofNullable(this.props.isPurchased);
    let borderColor = "6d9639"; 

    if (isPurchased.isPresent()) {
      if (isCommercial.isPresent() && isPurchased.isPresent() && isCommercial.get() && !isPurchased.get()) {
        borderColor = "17a2b8";
      }
    } else {
      if (isCommercial.isPresent() && isCommercial.get()) {
        borderColor = "17a2b8";
      }
    }

    if (!categoryId.isPresent()) {
      return null;
    }
    return (
      <Link
          to={"/videok/" + categoryId.get()}
          onClick={() => this.props._fetchVideos(categoryId.get())}
          type="button"
          className="btn btn-secondary rounded-0 bg-dark border-bottom-0 border-top-0 text-uppercase"
          style={{"borderLeft": "5px solid #" + borderColor}}>

        <h3>{this.props.children}</h3>
      </Link>
    );
  }
}

const dispatcher = (dispatch) => ({
  _fetchVideos: (...args) => dispatch(VideoActions.fetchVideos(...args))
});

export default connect(null, dispatcher)(SideButton);