import React from "react";
import PropTypes from "prop-types";
import {CityPropType, OfferPropType} from "../../types";
import NearPlacesCard from "../near-place-card/near-place-card";
import {getOffersForCity} from "../../utils";
import {connect} from "react-redux";
import {MAX_NEAR_PLACES} from "../../const";

const NearPlaces = (props) => {
  const {offers} = props;
  return (
    <React.Fragment>
      {offers.length > 1 ?
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {offers.map((offer) =>
              <NearPlacesCard
                offer={offer}
                key={offer.id}
              />)}
          </div>
        </section> : ``}
    </React.Fragment>
  );
};

NearPlaces.propTypes = {
  offers: PropTypes.arrayOf(OfferPropType),
  city: CityPropType
};

const mapStateToProps = (state, ownProps) => ({
  offers: getOffersForCity(ownProps.selectedOffer.city, state.offers.filter((offer) => offer.id !== ownProps.selectedOffer.id)).slice(0, MAX_NEAR_PLACES)
});

export {NearPlaces};
export default connect(mapStateToProps)(NearPlaces);
