import React from "react";
import { Link } from 'react-router-dom';

export default class Breadcrumb extends React.Component {
  render() {
    if (this.props.videos.videos.length === 0) {
      return null;
    }
    return <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/">Főoldal</Link></li>
        <li className="breadcrumb-item active" aria-current="page">{this.props.videos.videos[0].category.name}</li>
      </ol>
    </nav>;
  }
}