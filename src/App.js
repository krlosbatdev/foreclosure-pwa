import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AmplifyAuthenticator, AmplifySignIn, AmplifySignUp } from '@aws-amplify/ui-react';
import './App.css';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";

const Navbar = lazy(() => import('./components/Navbar'));
const Home = lazy(() => import('./components/Home'));

Amplify.configure(awsExports);

const App = () => {
  const signUpFields = [
    {
      type: "email",
      label: "Email address",
      required: true,
    },
    {
      type: "password",
      label: "Password",
      required: true,
    }
  ];

  return (
    <AmplifyAuthenticator usernameAlias="email">
      <AmplifySignUp
        headerText="Sign Up"
        usernameAlias="email"
        slot="sign-up"
        formFields={signUpFields}
      />
      <AmplifySignIn slot="sign-in" usernameAlias="email" />
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