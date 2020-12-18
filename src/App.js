import React, { useEffect } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { usePosition } from "./utils/usePosition";
import { PrivateRoute } from "./utils/PrivateRoute";
import "./styles.css";
import { updateCoords } from "./redux/actions/index";
import Login from "./auth_views/login/Login";
import Dashboard from "./Dashboard";
import Logout from "./auth_views/Logout";
import Signup from "./auth_views/signup/Signup";
import SingleListingView from "./listings/SingleListingView";
import Listings from "./listings/Listings";
import Mytrips from "./Mytrips";
import Messages from "./Messages";
import Profile from "./Profile";
import Discover from "./Discover";

function App(props) {
  const [latitude, longitude, accuracy] = usePosition();
  useEffect(() => {
    props.updateCoords({latitude, longitude});
  }, [latitude, longitude]);
  return (
    <>
      <div className="App">
        {props.error && alert(props.error.response.data.message)}
        {/* <PrivateRoute exact path="/*" component={Dashboard} /> */}
        <Route exact path="/" component={Dashboard} />
        <Route path="/home" component={Dashboard} />
        <Route path="/home/discover" component={Discover} />
        <Route path="/home/messages" component={Messages} />
        <Route path="/home/mytrips" component={Mytrips} />
        <Route path="/home/profile" component={Profile} />

        <Route
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

function mapState(state) {
  return { error: state.error };
}

export default connect(mapState, { updateCoords })(App);
