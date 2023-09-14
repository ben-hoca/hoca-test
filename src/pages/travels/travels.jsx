import { TravelCard } from "../../components/travel-card"
import "./travels.scss"



export const Travels = ()=>{
  return <>
    <ul className="jobs__list custom-flex">
    <TravelCard/>
    <TravelCard/>
    <TravelCard/>
    <TravelCard/>
    <hr className="page__message-card-line" />
    </ul>
  </> 
}