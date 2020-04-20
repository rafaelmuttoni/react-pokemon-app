import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from './pages/Main';
import ContactPage from './pages/Contact';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </BrowserRouter>
  );
}
