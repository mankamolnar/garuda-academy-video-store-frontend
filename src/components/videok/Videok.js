import React from "react";
import { connect } from "react-redux";
import * as VideoActions from "./../../redux/actions/VideoActions"
import Menu from '../common/menu/Menu';
import Footer from '../common/footer/Footer';
import Facebook from '../common/facebook/Facebook';
import SideBar from './../common/sidebar/SideBar';
import Breadcrumb from "./Breadcrumb";
import ListVideos from "./../common/list-videos/ListVideos";

class Videok extends React.Component {
  componentDidMount() {
    this.props._fetchVideos(this.props.match.params.id);
  }

  render() {
    return <>
      <Menu />
      <div className="row fill-container">
        <div className="col-md-2 p-0 bg-dark">
          <SideBar />
        </div>
        <div className="col-md-10">
          <Breadcrumb videos={this.props.videos} />
          <ListVideos videos={this.props.videos.videos} />
        </div>
      </div>
      
      <Facebook />
      <Footer />
    </>;
  }
}

const selector = (store) => {
  return {
    videos: store.videos,
    categories: store.categories,
    token: store.token,
    isLoggedIn: store.token.fetched && !store.token.error
  };
}

const dispatcher = (dispatch) => ({
  _fetchVideos: (...args) => dispatch(VideoActions.fetchVideos(...args))
});

export default connect(selector, dispatcher)(Videok);