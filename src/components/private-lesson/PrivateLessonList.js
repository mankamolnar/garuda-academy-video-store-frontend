import React from 'react';
import {Link} from 'react-router-dom';
import routes from '../Routes';

export default class PrivateLessonList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row mt-3">
          <div className="col-12 text-center">
            <h2 className={"h2 text-uppercase mb-0"}>
              <span className={"border-dark border-bottom"}>Vedd fel velünk a kapcsolatot most!</span>
            </h2>
            <Link to={routes.contacts} className={'btn btn-success btn-lg mt-3'}>Kapcsolat felvétele</Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}