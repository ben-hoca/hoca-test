import alien from "../../assets/icons/alien.svg"
import { Header, MessageCard, SideBar } from "../../components"
import "./home.scss"

export const Home = ()=>{
  return <div className="home">
    <button className="home__create-btn custom-flex"><img width={44} height={44} src={alien} alt="create button" />Create a message</button>
  <ul className="jobs__list custom-flex">
  <MessageCard/>
  <MessageCard/>
  <MessageCard/>
  <hr className="page__message-card-line" />
  </ul>
  </div>
}
