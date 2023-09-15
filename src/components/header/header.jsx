import redditIcon from "./../../assets/icons/space-icon.svg"
import searchIcon from "./../../assets/icons/search.svg"
import menuIcon from "../../assets/icons/menu.svg"
import "./header.scss"
import { useState } from "react"
import LoginModal from "../../pages/auth/login"



export const Header = ()=>{


  const [open, setOpen] = useState(false);



  const handleClose = () => {
    setOpen(false);
  };




return <header className="header-wrapper">
<LoginModal open={open} onClose={handleClose}  />
  <div className="header-container custom-flex header">
  <div className="custom-flex header__left">
<img width={32} height={32} src={redditIcon} alt="icon" /><span className="logo">SpaceCom</span>
  </div>
  <label className="header__search-input-label" htmlFor="search">
    <img className="header__search-input-icon" src={searchIcon} alt="search icon" />
  <input placeholder="Search..." className="header__search-input" type="text" name="search" id="search" />
  </label>
  <div className="custom-flex header__right">
    <button onClick={()=>setOpen(true)} className="header__right-login">Log in</button>
    <button className="header__right-menu-btn"><img src={menuIcon} alt="menu" /></button>
  </div>
  </div>
  
  
</header>
}