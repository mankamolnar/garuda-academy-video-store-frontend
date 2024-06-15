import React from "react";
import { Link } from 'react-router-dom';

export default class Breadcrumb extends React.Component {
  render() {
    if (!this.props.video) {
      return null;
    }

    return <nav aria-label="breadcrumb" className="mt-3">
      <ol className="breadcrumb bg-deep-dark">
        <li className="breadcrumb-item"><Link to="/">Főoldal</Link></li>
        <li className="breadcrumb-item"><Link to={"/videok/" + this.props.video.category.id}>{this.props.video.category.name}</Link></li>
        <li className="breadcrumb-item active" aria-current="page">{this.props.video.name}</li>
      </ol>
    </nav>;
  }
}