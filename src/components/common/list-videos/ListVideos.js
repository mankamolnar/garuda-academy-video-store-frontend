import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import * as VideoActions from "./../../../redux/actions/VideoActions";

class ListVideos extends React.Component {
  render() {
    if (this.props.videos.length === 0) {
      return null;
    }
    let buttons = this.props.videos.map((element) => (
      <Link
          className={"btn btn-dark btn-lg mr-3 mb-3"}
          onClick={() => {this.props._fetchVideo(element.id)}}
          key={"video-button-" + element.id}
          to={"/video/" + element.id}>
        {element.name}
      </Link>
    ));
    return <div className="text-center">
      {buttons}
    </div>;
  }
}

const dispatcher = (dispatch) => ({
  _fetchVideo: (...args) => dispatch(VideoActions.fetchVideo(...args))
});

export default connect(null, dispatcher)(ListVideos);
