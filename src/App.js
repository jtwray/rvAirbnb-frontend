import React, { useEffect } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { usePosition } from "./utils/hooks/usePosition";
import { PrivateRoute } from "./utils/PrivateRoute";
import "./styles.css";
import { updateCoords, setAddress } from "./redux/actions/index";
import Login from "./auth_views/login/Login";
import Dashboard from "./route_views/Dashboard";
import Logout from "./auth_views/Logout";
import Signup from "./auth_views/signup/Signup";
import SingleListingView from "./route_views/discover/searchlistings/listings/SingleListingView";
import Listings from "./route_views/discover/searchlistings/listings/Listings";
import Mytrips from "./route_views/mytrips/Mytrips";
import Messages from "./route_views/messages/Messages";
import Profile from "./route_views/profile/Profile";
import Discover from "./route_views/discover/Discover";

function App(props) {
  const [latitude, longitude, accuracy] = usePosition();
  useEffect(() => {
    props.updateCoords({ latitude, longitude });
  }, [latitude, longitude]);
  let currentLocation = props.currentGeoLocation;
  useEffect(() => {
    latitude && props.setAddress(latitude, longitude);
  }, [currentLocation]);

  return (
    <>
      <div className="App">
        {/* {props.error && alert(props.error)} */}
        {/* <PrivateRoute exact path="/*" component={Dashboard} /> */}
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute path="/home" component={Dashboard} />
        <PrivateRoute path="/home/discover" component={Discover} />
        <PrivateRoute path="/home/messages" component={Messages} />
        <PrivateRoute path="/home/mytrips" component={Mytrips} />
        <PrivateRoute path="/home/profile" component={Profile} />

        <PrivateRoute
          exact
          path="/home/listings/:listingID"
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
  return { error: state.error, currentGeoLocation: state.currentGeoLocation };
}

export default connect(mapState, { updateCoords, setAddress })(App);
