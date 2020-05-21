import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import FormPage from './components/FormPage';
import LoginPage from './components/LoginPage';
import Error404Page from './components/Error404Page';
import AdminPage from './components/AdminPage';
import CreateTripPage from './components/CreateTripPage';
import ListTripsPage from './components/ListTripsPage';
import TripDetailsPage from './components/TripDetailsPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path='/application-form'>
            <FormPage />
          </Route>

          <Route exact path='/login'>
            <LoginPage />
          </Route>

          <Route exact path='/admin-page'>
            <AdminPage />
          </Route>

          <Route exact path='/trips/create'>
            <CreateTripPage />
          </Route>

          <Route exact path='/trips/list'>
            <ListTripsPage />
          </Route>

          <Route exact path='/trips/details'>
            <TripDetailsPage />
          </Route>

          <Route path="/">
            <Error404Page />
          </Route>
      </Switch>   
    </BrowserRouter>
  );
}

export default App;
