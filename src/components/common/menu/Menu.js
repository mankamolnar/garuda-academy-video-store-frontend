import React from 'react';
import routes from '../../Routes';
import logo from './logo.png';
import hun from './hun.png';
import './menu.css';
import { Link } from 'react-router-dom';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuAdditionalClassNames: ''
    };
    this.changeMenuState = this.changeMenuState.bind(this);
  }

  changeMenuState() {
    if (this.state.menuAdditionalClassNames.length === 0) {
      this.setState({menuAdditionalClassNames: 'show'});
    } else {
      this.setState({menuAdditionalClassNames: ''});
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <nav className={"navbar navbar-dark bg-dark text-white"}>
          <div className={"float-left"}>
          </div>
          <div className={"float-right"}>
            <img src={hun} className={"navbar-icon"} alt={"Weboldal Magyar nyelven történő megjelenítése!"} />
          </div>
        </nav>
        <nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
          <Link to={routes.mainPage} className={"responsive-logo"}>
            <img src={logo} alt='Garuda academy' className={"responsive-logo"} />
          </Link>

          <button className={"navbar-toggler"} type="button" aria-label="Show Menu" onClick={this.changeMenuState}>
            <span className={"navbar-toggler-icon"}></span>
          </button>
          <div className={"collapse navbar-collapse " + this.state.menuAdditionalClassNames} id={"navigation-bar"}>
            <ul className={"navbar-nav mr-auto mt-2 mt-lg-0"}>
              <li className={"nav-item"}>
                <Link to={routes.courses} className={'nav-link'}>Online képzéseink</Link>
              </li>
              <li className={"nav-item"}>
                <Link to={routes.privateLessons} className={'nav-link'}>Privát órák</Link>
              </li>
              <li className={"nav-item"}>
                <Link to={routes.teachers} className={'nav-link'}>Oktatóink</Link>
              </li>
              <li className={"nav-item"}>
                <Link to={routes.contacts} className={'nav-link'}>Kapcsolat</Link>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
