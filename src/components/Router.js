import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import MainPage from './main-page/MainPage';
import Teachers from './teachers/Teachers';
import Courses from './courses/Courses';
import ContactUs from './contact-us/ContactUs';
import PrivateLesson from './private-lesson/PrivateLesson';
import c404 from './404/404';
import ScrollToTop from './common/scroll-to-top/ScrollToTop';
import './common/bootstrap.min.css';
import routes from './Routes';

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route path={routes.mainPage} component={MainPage} exact />
          <Route path={routes.courses} component={Courses} />
          <Route path={routes.teachers} component={Teachers} />
          <Route path={routes.privateLessons} component={PrivateLesson} />
          <Route path={routes.contacts} component={ContactUs} />
          <Route path="*" component={c404} />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default Router;
