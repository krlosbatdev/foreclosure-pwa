import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import './App.css';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";

const Navbar = lazy(() => import('./components/Navbar'));
const Home = lazy(() => import('./components/Home'));

Amplify.configure(awsExports);

const App = () => {
  return (
    <AmplifyAuthenticator>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Suspense>
      </Router>
    </AmplifyAuthenticator>
  );
};

export default App;