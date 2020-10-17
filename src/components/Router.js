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
import Registration from './registration/Registration';
import Login from './login/Login';

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route path={routes.mainPage} component={MainPage} exact />
          <Route path={routes.registration} component={Registration} exact />
          <Route path={routes.login} component={Login} exact />
          <Route path="*" component={c404} />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default Router;
