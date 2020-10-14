import React from "react";
import PropTypes from "prop-types";
import {OfferPropType} from "../../types";
import {Redirect, Switch, Route, BrowserRouter} from "react-router-dom";
import {MainPage} from "../pages/main-page/main-page";
import FavoritesPage from "../pages/favorites-page/favorites-page";
import RoomPage from "../pages/room-page/room-page";
import SignInPage from "../pages/sign-in-page/sign-in-page";

const App = (props) => {
  const {offers} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <MainPage offers={offers}/>}/>
        <Route exact path="/login" render={() => <SignInPage/>}/>
        <Route exact path="/favorites" render={() => <FavoritesPage offers={offers.filter((offer) => offer.isFavorite)}/>}/>
        <Route exact path="/offer/:id" render={() => <RoomPage offer={offers[0]} offers={offers}/>}/>
        <Redirect to="/"/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(OfferPropType).isRequired
};

export default App;
