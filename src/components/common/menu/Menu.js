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
            <ul className={"navbar-nav mr-0 mt-2 mt-lg-0"}>
              <li className={"nav-item"}>
                <a href={"https://www.garudaacademy.eu"} target="_blank" rel="noopener noreferrer" className={'nav-link'}>Online képzéseink</a>
              </li>
            </ul>
            <ul className={"navbar-nav mr-0 mt-2 mt-lg-0"}>
              <li className={"nav-item"}>
                <a href={"https://www.garudaacademy.eu"} target="_blank" rel="noopener noreferrer" className={'nav-link'}>Privát órák</a>
              </li>
            </ul>
          </div>

          <div className="float-right">
            <Link to="/registration" className="btn btn-info mr-1">Regisztráció</Link>
            <Link to="/login" className="btn btn-success">Belépés</Link>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
