import { useState } from "react";
import alien from "../../assets/icons/alien.svg"
import { Header, MessageCard, SideBar } from "../../components"
import CreateMessage from "../../components/create-message/create-message";
import "./home.scss"

export const Home = ()=>{

  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  return <div className="home">
    <CreateMessage open={openModal} onClose={handleClose}/>
    <button onClick={()=>setOpenModal(true)} className="home__create-btn custom-flex"><img width={44} height={44} src={alien} alt="create button" />Create a message</button>
  <ul className="jobs__list custom-flex">
  <MessageCard/>
  <MessageCard/>
  <MessageCard/>
  <hr className="page__message-card-line" />
  </ul>
  </div>
}
