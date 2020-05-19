import React from 'react';
import { BrowserRouter, Switch, Router } from 'react-router-dom';

import HomePage from "./components/HomePage";

<BrowserRouter>
    <Switch>
        <Router exact path=''>

        </Router>
    </Switch>
</BrowserRouter>

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);