import {TypeCards} from "../../const";
import OfferCard from "../offer-card/offer-card";

class PlaceCard extends OfferCard {
  getTypeCard() {
    return TypeCards.CITIES;
  }

  getPlaceCardWidth() {
    return 260;
  }

  getPlaceCardHeight() {
    return 200;
  }

  isPremium() {
    return true;
  }
}

export default PlaceCard;
