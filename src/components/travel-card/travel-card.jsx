import { Link, NavLink } from "react-router-dom"
import "./travel-card.scss"
import planetMars from "../../assets/images/planet1.jpg"


export const TravelCard = ()=>{
  return <li className="travel-card">
    <Link className="travel-card__link-image">
    <img className="travel-card__image" src={planetMars} alt="travel photo" />
    </Link>
    <Link className="travel-card__link">
    <h4 className="travel-card__title">Earth - Mars</h4>
    <h4 className="travel-card__travel-title">Depart: 24 Aug 2900</h4>
    <h4 className="travel-card__travel-title">Arrival: 24 Aug 2901</h4>
    <p className="travel-card__price">200 USD</p>
    </Link>
  </li>
}