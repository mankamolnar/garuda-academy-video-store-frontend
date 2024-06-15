import React from "react";
import { connect } from "react-redux";
import * as VideoActions from "./../../redux/actions/VideoActions"
import Menu from '../common/menu/Menu';
import Footer from '../common/footer/Footer';
import Facebook from '../common/facebook/Facebook';
import SideBar from './../common/sidebar/SideBar';
import Breadcrumb from "./Breadcrumb";
import VideoPlayer from "./VideoPlayer";
import ListVideos from './../common/list-videos/ListVideos'
import Comments from './Comments';

class Video extends React.Component {
  componentDidMount() {
    if (!this.props.videos.fetched && !this.props.video.fetched && !this.props.video.fetching) {
      this.props._fetchVideo(this.props.match.params.id);
    }
    
  }

  componentDidUpdate() {
    if (!this.props.videos.fetched && !this.props.videos.fetching && this.props.video.fetched) {
      this.props._fetchVideos(this.props.video.video.category.id);
    }
  }

  render() {
    if (!this.props.videos.fetched) return null;

    let video = null;
    if (this.props.video.fetched) {
      video = this.props.video.video;
    } else {
      video = this.props.videos.videos.filter((element) => element.id === parseInt(this.props.match.params.id))[0];
    }

    return <div>
      <Menu />
      <div className="row">
        <div className="col-md-2 p-0 bg-dark">
          <SideBar />
        </div>
        <div className="col-md-10">
          <Breadcrumb video={video} />
          <VideoPlayer video={video} />
          <ListVideos videos={this.props.videos.videos} />
          <Comments video={video} />
        </div>
      </div>
      
      <Facebook />
      <Footer />
    </div>;
  }
}

const selector = (store) => {
  return {
    video: store.video,
    videos: store.videos,
    categories: store.categories,
    token: store.token,
    isLoggedIn: store.token.fetched && !store.token.error
  };
}

const dispatcher = (dispatch) => ({
  _fetchVideo: (...args) => dispatch(VideoActions.fetchVideo(...args)),
  _fetchVideos: (...args) => dispatch(VideoActions.fetchVideos(...args))
});

export default connect(selector, dispatcher)(Video);