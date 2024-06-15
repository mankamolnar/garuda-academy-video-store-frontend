import React from "react";

export default class VideoPlayer extends React.Component {
  render() {
    if (!this.props.video) {
      return null;
    }
    return <div className="embed-responsive embed-responsive-16by9 mb-3">
      <iframe className="embed-responsive-item" src={"https://www.youtube.com/embed/" + this.props.video.url+"?rel=0"} title={this.props.video.name} allowFullScreen></iframe>
    </div>;
  }
}