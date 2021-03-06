import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from './pages/Main';
import PokemonPage from './pages/Pokemon';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/pokemon/:name" component={PokemonPage} />
      </Switch>
    </BrowserRouter>
  );
}
