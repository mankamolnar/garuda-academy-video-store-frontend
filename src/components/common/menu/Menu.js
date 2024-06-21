import React from 'react';
import { connect } from "react-redux";
import routes from '../../Routes';
import logo from './logo-wide-dark.png';
import logoBetaBlue from './logo-wide-dark-beta-blue.png';
import logoBetaYellowBlood from './logo-wide-dark-beta-yellow-blood.png';
import logoBetaYellowPink from './logo-wide-dark-beta-yellow-pink.png';
import './menu.css';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
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
    let authButtons = <React.Fragment>
      <Link to="/registration" className="btn btn-info mr-1">Regisztráció</Link>
      <Link to="/login" className="btn btn-success">Belépés</Link>
    </React.Fragment>;

    if (this.props.isLoggedIn) {
      authButtons = <b className='text-navbar'>Bejelentkezve!</b>;
    }

    return (
      <React.Fragment>
        
        {/*<nav className={"navbar navbar-dark bg-dark text-white"}>
          <div className={"float-left"}>
          </div>
          <div className={"float-right"}>
            <img src={hun} className={"navbar-icon"} alt={"Weboldal Magyar nyelven történő megjelenítése!"} />
          </div>
        </nav>*/}

        <nav className={"navbar navbar-expand-lg navbar-dark bg-deep-dark"}>
          <Link to={routes.mainPage} className={"responsive-logo"}>
            <img src={logoBetaYellowPink} alt='Garuda academy' className={"responsive-logo"} />
          </Link>

          <button className={"navbar-toggler"} type="button" aria-label="Show Menu" onClick={this.changeMenuState}>
            <span className={"navbar-toggler-icon"}></span>
          </button>

          <div className={"collapse navbar-collapse " + this.state.menuAdditionalClassNames} id={"navigation-bar"}>
            <ul className={"navbar-nav mr-0 mt-2 mt-lg-0"}>
              <li className={"nav-item"}>
                <a href={"https://www.garudaacademy.eu"} target="_blank" rel="noopener noreferrer" className={'nav-link'}>Online képzéseink</a>
              </li>
              <li className={"nav-item navbar-auth-buttons"}>
                <Link to={routes.registration} className={'nav-link'}>Regisztráció</Link>
              </li>
              <li className={"nav-item navbar-auth-buttons"}>
                <Link to={routes.login} className={'nav-link'}>Belépés</Link>
              </li>
            </ul>
          </div>

          <div className="auth-buttons">
            {authButtons}
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

const selector = (store) => {
  return {
    token: store.token,
    isLoggedIn: store.token.fetched && !store.token.error
  };
}

export default connect(selector)(Menu);
