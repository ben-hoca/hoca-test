import "./sidebar.scss"
import rocket from "../../assets/icons/rocket.svg"
import job from "../../assets/icons/jobs.svg"
import home from "../../assets/icons/home.svg"
import {Link} from "react-router-dom"



export const SideBar = ()=>{
  return (<div className="sidebar">
    <ul>
      <li className="sidebar__item"><Link to={"/"} className="sidebar__link custom-flex"> <img width={23} height={20} src={home} alt="home page" /> Home</Link></li>
      <li className="sidebar__item"><Link to={"/jobs"} className="sidebar__link custom-flex"><img width={23} height={20} src={job} alt="home page" />Jobs</Link></li>
      <li className="sidebar__item"><Link to={"travels"} className="sidebar__link custom-flex"><img width={23} height={20} src={rocket} alt="home page" />Travels</Link></li>
    </ul>
  </div>)
}