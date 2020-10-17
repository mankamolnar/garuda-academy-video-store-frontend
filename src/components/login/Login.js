import React from 'react';
import { Redirect } from 'react-router';
import { connect } from "react-redux";
import * as LoginActions from './../../redux/actions/loginActions';
import Menu from '../common/menu/Menu';
import Footer from '../common/footer/Footer';
import Facebook from '../common/facebook/Facebook';


class Login extends React.Component {
  constructor() {
    super();
    this.doLogin = this.doLogin.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.state = {
      username: "",
      password: ""
    }
  }

  onUsernameChange(event) {
    this.setState({username: event.target.value});
  }

  onPasswordChange(event) {
    this.setState({password: event.target.value});
  }

  doLogin() {
    this.props._fetchToken(
      this.state.username,
      this.state.password
    );
  }

  render() {
    let message = "";

    if (this.props.token.fetched && this.props.token.error) {
      message = <div className="alert alert-danger">Valami hiba történt! Próbáld újra!</div>;
    } else if (this.props.token.fetched && !this.props.token.error) {
      message = <Redirect to="/" />;
    }

    return (
      <div>
        <Menu />
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">

            {message}

            <h1>Bejelentkezés</h1>
            <form>
              <div className="form-group">
                <label htmlFor="username-input">Felhasználónév</label>
                <input type="text" value={this.state.username} onChange={this.onUsernameChange} className="form-control" id="username-input" placeholder="Írj be felhasználónevet!" />
              </div>
              <div className="form-group">
                <label htmlFor="password-input">Jelszó</label>
                <input type="password" value={this.state.password} onChange={this.onPasswordChange} className="form-control" id="password-input" placeholder="Írd be a jelszavad!" />
              </div>
            </form>
            <button className="btn btn-lg btn-success mb-3 mt-3" onClick={this.doLogin}>Bejelentkezés</button>
          </div>
          <div className="col-md-1"></div>
        </div>
        
        <Facebook />
        <Footer />
      </div>
    );
  }
}

const selector = (store) => {
  return {
    token: store.token
  }
};

const dispatcher = (dispatch) => ({
  _fetchToken: (...args) => dispatch(LoginActions.fetchToken(...args))
});

export default connect(selector, dispatcher)(Login);