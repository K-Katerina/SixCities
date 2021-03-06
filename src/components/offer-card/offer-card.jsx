import React from "react";
import PropTypes from "prop-types";
import {OfferPropType} from "../../types";
import {Link} from "react-router-dom";
import {HousingType, TypeCards} from "../../const";
import {ActionCreatorForProcess} from "../../store/reducers/app-process/actions";
import {getRating, getStyleForCard} from "../../utils";
import {connect} from "react-redux";
import FavoriteButton from "../favorite-button/favorite-button";

const OfferCard = (props) => {
  const {onChangeActiveOffer, offer, typeCard = TypeCards.CITIES, isFavorite} = props;
  const needChangeActiveOffer = typeCard === TypeCards.CITIES;
  const needPremiumMark = TypeCards.CITIES === typeCard;
  const {className, width, height} = getStyleForCard(typeCard);
  return (
    <React.Fragment>
      <article className={`${className}__card place-card`}
        onMouseLeave={(evt) => {
          if (needChangeActiveOffer) {
            evt.preventDefault();
            onChangeActiveOffer(-1);
          }
        }}
        onMouseEnter={(evt) => {
          if (needChangeActiveOffer) {
            evt.preventDefault();
            onChangeActiveOffer(offer.id);
          }
        }}
      >
        {offer.isPremium && needPremiumMark &&
          <div className="place-card__mark">
            <span>Premium</span>
          </div>}
        <div className={`${className}__image-wrapper place-card__image-wrapper`}>
          <Link to={`/offer/${offer.id}`}>
            <img className="place-card__image" src={offer.preview} width={`${width}`} height={`${height}`}
              alt="Place image"/>
          </Link>
        </div>
        <div className={`${className}__card-info place-card__info`}>
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.costPerNight}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <FavoriteButton className={`place-card__bookmark-button`} id={offer.id} isFavorite={isFavorite}/>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: getRating(offer.rating)}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
          </h2>
          <p className="place-card__type">{HousingType[offer.type.toUpperCase()]}</p>
        </div>
      </article>
    </React.Fragment>
  );
};

OfferCard.propTypes = {
  onChangeActiveOffer: PropTypes.func,
  onButtonClick: PropTypes.func,
  offer: OfferPropType.isRequired,
  typeCard: PropTypes.oneOf(Object.values(TypeCards)),
  isFavorite: PropTypes.bool
};

const mapStateToProps = (state, ownProps) => ({
  isFavorite: ownProps.offer.isFavorite
});

const mapDispatchToProps = (dispatch) => ({
  onChangeActiveOffer: (activeOfferId) => dispatch(ActionCreatorForProcess.changeActiveOffer(activeOfferId)),
});

export {OfferCard};
export default connect(mapStateToProps, mapDispatchToProps)(OfferCard);
