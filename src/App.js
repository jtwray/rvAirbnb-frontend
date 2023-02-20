import React, { useEffect } from "react";
import { Route, Link } from "react-router-dom";
import { RequireAuth } from "./utils/RequireAuth";

import { connect } from "react-redux";
import { updateCoords, setAddress } from "./redux/actions/index";

import { usePosition } from "./utils/hooks/usePosition";

import Login from "./auth_views/login/Login";
import Logout from "./auth_views/Logout";
import Signup from "./auth_views/signup/Signup";
import Dashboard from "./route_views/Dashboard";
import Discover from "./route_views/discover/Discover";
import Listings from "./route_views/discover/searchlistings/listings/Listings";
import Messages from "./route_views/messages/Messages";
import Mytrips from "./route_views/mytrips/Mytrips";
import Profile from "./route_views/profile/Profile";
import SingleListingView from "./route_views/discover/searchlistings/listings/SingleListingView";
import "./styles.css";

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
        <Route exact path="/" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } />
        <Route path="/home" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } />
        <Route path="/home/discover" element={
          <RequireAuth>
            <Discover />
          </RequireAuth>
        } />
        <Route path="/home/messages" element={
          <RequireAuth>
            <Messages />
          </RequireAuth>
        } />
        <Route path="/home/mytrips" element={
          <RequireAuth>
            <Mytrips />
          </RequireAuth>
        } />
        <Route path="/home/profile" element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        } />

        <Route
          exact
          path="/home/listings/:listingID"
          element={
            <RequireAuth>
              <SingleListingView />
            </RequireAuth>
          }
        />

        <Route exact path="/logout" element={
          <RequireAuth>
            <Logout />
          </RequireAuth>
        } />
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
