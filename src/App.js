import React from "react";
import { Route, Link } from "react-router-dom";
import { PrivateRoute } from "./utils/PrivateRoute";
import "./styles.css";
import Login from "./auth_views/login/Login";
import Dashboard from "./Dashboard";
import Logout from "./auth_views/Logout";
import Signup from "./auth_views/signup/Signup";
import SingleListingView from "./listings/SingleListingView";
import Listings from "./listings/Listings";

export default function App(props) {
  const { currentUser } = props;
  return (
    <>
      <div className="App">
        {/* <PrivateRoute exact path="/*" component={Dashboard} /> */}
        <Route exact path="/" component={Dashboard} />
        <PrivateRoute exact path="/listings/" component={Listings} />
        <PrivateRoute
          exact
          path="/listings/:listingID"
          component={SingleListingView}
        />

        <PrivateRoute exact path="/logout" component={Logout} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </div>
    </>
  );
}
