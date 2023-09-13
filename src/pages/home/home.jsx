import alien from "../../assets/icons/alien.svg"
import { Header, MessageCard } from "../../components"
import "./home.scss"



export const Home = ()=>{
  return <div>
    <Header/>
    <div className="container">
    <button className="home__create-btn custom-flex"> <img width={44} height={44} src={alien} alt="alien" />Create a message</button>
    <ul className="home__message-list">
    <MessageCard/>
    </ul>
    </div>
  </div>
}