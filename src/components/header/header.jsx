import redditIcon from "./../../assets/icons/space-icon.svg"
import searchIcon from "./../../assets/icons/search.svg"
import menuIcon from "../../assets/icons/menu.svg"
import "./header.scss"


export const Header = ()=>{
return <header className="header-wrapper">
  <div className="header-container custom-flex header">
  <div className="custom-flex header__left">
<img width={32} height={32} src={redditIcon} alt="icon" /><span className="logo">SpaceCom</span>
  </div>
  <label className="header__search-input-label" htmlFor="search">
    <img className="header__search-input-icon" src={searchIcon} alt="search icon" />
  <input placeholder="Search..." className="header__search-input" type="text" name="search" id="search" />
  </label>
  <div className="custom-flex header__right">
    <button className="header__right-login">Log in</button>
    <button className="header__right-menu-btn"><img src={menuIcon} alt="menu" /></button>
  </div>
  </div>
  
  
</header>
}