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
import { connect } from "react-redux";
 function App(props) {
   const {currentUser}=props
  return (
    <>
      <div className="App">
        {/* <PrivateRoute exact path="/*" component={Dashboard} /> */}
console.log({currentUser})
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute exact path="/listings/" component={Listings} />
        <PrivateRoute
          exact
          path="/listings/:listingID"
          component={SingleListingView}
        />

        <PrivateRoute exact path="/logout" component={Logout} />
        <Route
          exact
          path="/login"
          component={
            // props.currentToken && localStorage.token === props.currentToken
            //   ? Dashboard
            //   : 
              Login
          }
        />
        <Route exact path="/signup" component={Signup} />
      </div>
    </>
  );
}function mapState({currentUser}){return{currentUser}}
export default connect(mapState,{})(App)