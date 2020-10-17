import React from 'react';
import Menu from '../common/menu/Menu';
import Footer from '../common/footer/Footer';
import Facebook from '../common/facebook/Facebook';

export default class Registration extends React.Component {
  constructor() {
    super();
    this.doRegistration.bind(this);
  }

  doRegistration() {
    alert("Működöm");
  }

  render() {
    return (
      <div>
        <Menu />
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <h1>Regisztráció</h1>
            <form>
              <div class="form-group">
                <label for="username-input">Felhasználónév</label>
                <input type="text" class="form-control" id="username-input" placeholder="Írj be felhasználónevet!" />
              </div>
              <div class="form-group">
                <label for="email-input">Email cím</label>
                <input type="email" class="form-control" id="email-input" aria-describedby="emailHelp" placeholder="Írj be e-mail címet!" />
              </div>
              <div class="form-group">
                <label for="password-input">Jelszó</label>
                <input type="password" class="form-control" id="password-input" placeholder="Írd be a jelszavad!" />
              </div>
              <div class="form-group">
                <label for="password-input-2">Jelszó még egyszer</label>
                <input type="password" class="form-control" id="password-input-2" placeholder="Írd be a jelszavad még egyszer!" />
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="checkbox-subscribe" />
                <label class="form-check-label" for="checkbox-subscribe">Feliratkozom</label>
              </div>
              <button type="submit" class="btn btn-lg btn-success mb-3 mt-3" onClick={this.doRegistration}>Regisztrálok</button>
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
