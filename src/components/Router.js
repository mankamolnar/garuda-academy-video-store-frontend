import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import MainPage from './main-page/MainPage';
import c404 from './404/404';
import ScrollToTop from './common/scroll-to-top/ScrollToTop';
import './common/bootstrap.min.css';
import routes from './Routes';
import LoginChecker from '../services/LoginChecker';
import Registration from './registration/Registration';
import Login from './login/Login';
import Videok from './videok/Videok';
import Video from './video/Video';
import TutoringApplication from './tutoring-application/TutoringApplication';

function Router() {
  return (
    <BrowserRouter>
      <LoginChecker>
        <ScrollToTop>
          <Switch>
            <Route path={routes.mainPage} component={MainPage} exact />
            <Route path={routes.registration} component={Registration} exact />
            <Route path={routes.login} component={Login} exact />
            <Route path={routes.videok} component={Videok} exact />
            <Route path={routes.video} component={Video} exact />
            <Route path={routes.tutoringApplication} component={TutoringApplication} exact />
            <Route path="*" component={c404} />
          </Switch>
        </ScrollToTop>
      </LoginChecker>
    </BrowserRouter>
  );
}

export default Router;
