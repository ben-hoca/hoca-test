import alien from "../../assets/icons/alien.svg"
import { Header, MessageCard, SideBar } from "../../components"
import "./home.scss"

export const Home = ()=>{
  return <>
  <button className="home__create-btn custom-flex"> <img width={44} height={44} src={alien} alt="alien" />Create a message</button>
    <ul className="page__message-list">
    <MessageCard/>
    <hr className="page__message-card-line" />
    </ul>
  </> 
}
