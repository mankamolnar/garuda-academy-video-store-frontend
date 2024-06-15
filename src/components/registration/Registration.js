import React from 'react';
import Menu from '../common/menu/Menu';
import Footer from '../common/footer/Footer';
import Facebook from '../common/facebook/Facebook';
import { Link } from 'react-router-dom';
import { doRegistration } from '../../redux/actions/loginActions';
import { connect } from "react-redux";
import EmailValidatorService from './EmailValidatorService';

class Registration extends React.Component {
  constructor() {
    super();
    this.doRegistration = this.doRegistration.bind(this);
    this.emailValidator = EmailValidatorService.getInstance();
    this.state = {
      username: "",
      email: "",
      password: "",
      password2: "",
      checkbox: false,
      message: ""
    };
  }

  componentDidUpdate() {
    if (this.props.registration.fetched && !this.props.registration.error && this.state.message) {
      this.setState({ message: "" });
    }
  }

  doRegistration() {
    if (this.state.username.trim().length === 0) {
      this.setState({ message: "Nem töltötted ki a felhasználónév mezőt!" });

    } else if (!this.emailValidator.isEmailStripeValid(this.state.email)) {
      this.setState({ message: "Az email cím nem helyes formátumú!" });

    } else if (this.state.password.length < 8 ) {
      this.setState({ message: "A jelszónak legalább 8 karakter hosszúnak kell lennie." });

    } else if (this.state.password !== this.state.password2) {
      this.setState({ message: "A jelszavak nem egyeznek meg!" });
      
    } else {
      this.props._doRegistration(this.state.email, this.state.username, this.state.password);
    }
  }

  render() {
    let alert = this.state.message
      ? <div className='alert alert-danger'>{this.state.message}</div> 
      : null;

    if (this.props.registration.fetched && this.props.registration.error) {
      alert = <div className='alert alert-danger'>{this.props.registration.errorMessage}</div>
    }

    return (
      <div>
        <Menu />
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <h1>Regisztráció</h1>

              {alert}

              { this.props.registration.fetched && !this.props.registration.error
                ? <Link to="/login" className='btn btn-lg btn-success btn-block mb-3'>Siker! Uzsgyi a bejelentkezéshez :)</Link>
                : <>
                <div className="form-group">
                  <label htmlFor="username-input">Felhasználónév</label>
                  <input type="text" className="form-control" id="username-input" placeholder="Írj be felhasználónevet!" onChange={(e) => this.setState({username: e.target.value})} onKeyUp={(e) => e.key === "Enter" ? this.doRegistration() : null} />
                </div>
                <div className="form-group">
                  <label htmlFor="email-input">Email cím</label>
                  <input type="email" className="form-control" id="email-input" aria-describedby="emailHelp" placeholder="Írj be e-mail címet!" onChange={(e) => this.setState({email: e.target.value})} onKeyUp={(e) => e.key === "Enter" ? this.doRegistration() : null} />
                </div>
                <div className="form-group">
                  <label htmlFor="password-input">Jelszó</label>
                  <input type="password" className="form-control" id="password-input" placeholder="Írd be a jelszavad!" onChange={(e) => this.setState({password: e.target.value})} onKeyUp={(e) => e.key === "Enter" ? this.doRegistration() : null} />
                </div>
                <div className="form-group">
                  <label htmlFor="password-input-2">Jelszó még egyszer</label>
                  <input type="password" className="form-control" id="password-input-2" placeholder="Írd be a jelszavad még egyszer!" onKeyUp={(e) => e.key === "Enter" ? this.doRegistration() : null} onChange={(e) => this.setState({password2: e.target.value})} />
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="checkbox-subscribe" onClick={() => this.setState({checkbox: !this.state.checkbox})} />
                  <label className="form-check-label" htmlFor="checkbox-subscribe">Feliratkozom a hírlevélre</label>
                </div>
                <button type="submit" className="btn btn-lg btn-success mb-3 mt-3" onClick={this.doRegistration}>Regisztrálok</button>
              </>}

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
    registration: store.registration
  }
};

const dispatcher = (dispatch) => ({
  _doRegistration: (...args) => dispatch(doRegistration(...args))
});

export default connect(selector, dispatcher)(Registration);
