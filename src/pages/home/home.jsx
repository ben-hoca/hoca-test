import alien from "../../assets/icons/alien.svg"
import { Header, MessageCard, SideBar } from "../../components"
import "./home.scss"

export const Home = ()=>{
  return <ul className="jobs__list custom-flex">
  <MessageCard/>
  <hr className="page__message-card-line" />
  </ul>
}
