import alien from "../../assets/icons/alien.svg"
import { Header, MessageCard, SideBar } from "../../components"
import "./home.scss"

export const Home = ()=>{
  return <>
  <button className="home__create-btn custom-flex"> <img width={44} height={44} src={alien} alt="alien" />Create a message</button>
    <ul className="home__message-list">
    <MessageCard/>
    <hr className="home__message-card-line" />
    </ul>
  </> 
}

// export const Home = ()=>{
//   return (<div className="home">
//     <Header/>
//     <div className="container home-wrapper">
//       <SideBar/>
//     <button className="home__create-btn custom-flex"> <img width={44} height={44} src={alien} alt="alien" />Create a message</button>
//     <ul className="home__message-list">
//     <MessageCard/>
//     <hr className="home__message-card-line" />
//     </ul>
//     </div>
//   </div>)
// }