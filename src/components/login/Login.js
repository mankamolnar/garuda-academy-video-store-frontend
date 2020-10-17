import React from 'react';
import Menu from '../common/menu/Menu';
import Footer from '../common/footer/Footer';
import Facebook from '../common/facebook/Facebook';

export default class Login extends React.Component {
  constructor() {
    super();
    this.doLogin.bind(this);
  }

  doLogin() {
    alert("Működöm");
  }

  render() {
    return (
      <div>
        <Menu />
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <h1>Bejelentkezés</h1>
            <form>
              <div class="form-group">
                <label for="username-input">Felhasználónév</label>
                <input type="text" class="form-control" id="username-input" placeholder="Írj be felhasználónevet!" />
              </div>
              <div class="form-group">
                <label for="password-input">Jelszó</label>
                <input type="password" class="form-control" id="password-input" placeholder="Írd be a jelszavad!" />
              </div>
              <button type="submit" class="btn btn-lg btn-success mb-3 mt-3" onClick={this.doLogin}>Bejelentkezés</button>
            </form>
          </div>
          <div className="col-md-1"></div>
        </div>
        
        <Facebook />
        <Footer />
      </div>
    );
  }
}
