import "./message-card.scss"
import menuIcon from "../../assets/icons/menu.svg"
import arrowUp from "../../assets/icons/arrow-up.svg"
import arrowDown from "../../assets/icons/arrow-down.svg"
import comment from "../../assets/icons/comment.svg"
import { useState } from "react"



export const MessageCard = ()=>{

  const [modal, setModal] = useState(false)

  


  return <li className="message-card">
    <div className="message-header custom-flex">
      <div className="custom-flex">
      <img className="message-card__img" width={32} height={32} src="https://picsum.photos/id/1/200/300" alt="profile photo" /> <span className="message-card__username">username</span>&#8226;<span className="message-card__time">11 hr. ago</span>&#8226;<p className="message-card__text">
    Because you've shown interest in a similar community
  </p>
      </div>
  <div className="custom-flex message-card__right">
  <button className="message-card__btn">Join</button>
  <button className="message-card__menu-btn custom-flex"><img src={menuIcon} alt="menu icon" /></button>
  </div>
    </div>
    <p className="message-card__title">  Why is my pc making this buzzing noise?? lor
  </p>
    <div className="message__image-wrapper">
    <img className="message__image" src="https://picsum.photos/id/2/300/300" alt="post image" />
  </div>
  <div className="message__buttons-wrapper custom-flex"><div className="message__control-btn custom-flex"><button className="message__likes-btn"><img width={16}
   height={16} src={arrowUp} alt="arrow up" /></button>0<button className="message__likes-btn"><img width={16}
   height={16} src={arrowDown} alt="arrow down" /></button></div>
   <button><img src={comment} alt="" /></button>

   </div>
  </li>
}