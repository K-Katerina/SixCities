import {addElementInArray, extend} from "../../../utils";
import {ActionTypeForData} from "./actions";

const initialState = {
  offers: [],
  currentOffer: null,
  isLoadingOfferById: true,
  currentReviewsForOffer: [],
  currentNearPlaces: [],
  favorites: []
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypeForData.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
    case ActionTypeForData.GET_OFFER_BY_ID:
      return extend(state, {
        currentOffer: action.payload,
      });
    case ActionTypeForData.IS_LOADED_OFFER_BY_ID:
      return extend(state, {
        isLoadingOfferById: action.payload,
      });
    case ActionTypeForData.GET_REVIEWS_BY_OFFER_ID:
      return extend(state, {
        currentReviewsForOffer: action.payload,
      });
    case ActionTypeForData.GET_NEAR_PLACES_BY_OFFER_ID:
      return extend(state, {
        currentNearPlaces: action.payload,
      });
    case ActionTypeForData.GET_FAVORITES:
      return extend(state, {
        favorites: action.payload,
      });
    case ActionTypeForData.UPDATE_FAVORITE:
      return extend(state, {
        offers: addElementInArray(action.payload, state.offers),
      });
    default: return state;
  }
};

export {appData};
