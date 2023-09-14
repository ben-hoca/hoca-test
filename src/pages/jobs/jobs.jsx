import { JobCard } from "../../components"
import "./jobs.scss"



export const Jobs = ()=>{
  return <>
    <ul className="jobs__list custom-flex">
    <JobCard/>
    <JobCard/>
    <JobCard/>
    <hr className="page__message-card-line" />
    </ul>
  </> 
}