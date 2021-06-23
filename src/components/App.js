import React from "react";
import SignUp from "./SignUp.js";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard.js";
import Login from "./Login";
import { PrivateRoute } from "./PrivateRoute.js";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
const App = () => {
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute
                exact
                path="/update-profile"
                component={UpdateProfile}
              />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </Router>
        </div>
      </Container>
    </AuthProvider>
  );
};

export default App;
