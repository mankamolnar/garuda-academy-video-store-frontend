import React from 'react';
import { Redirect } from 'react-router';
import { useParams } from 'react-router-dom';
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
    this.firstRender = React.createRef();
    this.firstRender.current = true;
    this.state = {
      username: "",
      password: "",
      message: ""
    };
  }

  componentDidMount() {
    this.firstRender.current = true;
    let message = this.getAlertMessage();
    
    if (!message && this.state.message) {
      this.setState({ message: "" });

    } else if (message && !this.state.message) {
      this.setState({ message: <div className="alert alert-danger">{ decodeURI(message) }</div> });
    }
  }

  componentDidUpdate() {
    this.firstRender.current = false;
  }

  componentWillUnmount() {
    this.props._truncateLoginOnError();
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

  getAlertMessage() {
    const requestParams = this.props.location.search.replace("?", "");
    const requestParamKeyValuePairs = requestParams.split("&");
    const messageKeyValuePair = requestParamKeyValuePairs.filter(keyValuePair => keyValuePair.startsWith("message"));

    if (messageKeyValuePair.length > 0) {
      const message = messageKeyValuePair[0].split("=")[1];
      return message;
    }

    return "";
  }

  render() {
    console.log("render")
    let message = null;
    
    if (!this.firstRender.current && this.props.token.fetched && this.props.token.error) {
      message = <div className="alert alert-danger">
        {this.props.token.token.errorMessage}
      </div>;

    } else if (this.props.token.fetched && !this.props.token.error) {
      localStorage.setItem("apiKey", this.props.token.token.jwt);
      message = <Redirect to="/" />;
    }

    return (
      <>
        <Menu />
        <div className="row fill-container">
          <div className="col-md-1"></div>
          <div className="col-md-10">

            { this.state.message ? this.state.message : null }
            { message ? message : null }

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
      </>
    );
  }
}

const selector = (store) => {
  return {
    token: store.token
  }
};

const dispatcher = (dispatch) => ({
  _fetchToken: (...args) => dispatch(LoginActions.fetchToken(...args)),
  _truncateLoginOnError: () => dispatch({type: "LOGIN_TUNCATE_ON_ERROR"})
  //_clearRedux: (...args) => dispatch({type: "LOGIN_CLEAR"})
});

export default connect(selector, dispatcher)(Login);