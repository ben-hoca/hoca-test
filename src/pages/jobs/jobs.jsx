import "./jobs.scss"



export const Jobs = ()=>{
  return (<div>
    <Header/>
    <div className="container home-wrapper">
      <SideBar/>
    <button className="home__create-btn custom-flex"> <img width={44} height={44} src={alien} alt="alien" />Create a message</button>
    <ul className="home__message-list">
    <MessageCard/>
    <hr className="home__message-card-line" />
    </ul>
    </div>
  </div>)
}