import { Link, NavLink } from "react-router-dom"
import "./job-card.scss"


export const JobCard = ()=>{
  return <li className="job-card">
    <Link className="job-card__link">
    <h4 className="job-card__title">Company title</h4>
    <h4 className="job-card__job-title">Frontend developer</h4>
    <h4 className="job-card__job-place">Mars</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident neque hic qui doloribus tempora optio maiores necessitatibus illum nesciunt, excepturi ex magnam commodi perferendis vel modi officiis placeat quibusdam dicta.</p>
    <p>Salary</p>
    <p>Visa requirement</p>
    </Link>

  </li>
}