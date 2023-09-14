import { Outlet } from "react-router-dom"
import { Header } from "../header"
import { SideBar } from "../sidebar"
import "./layout.scss"




export const Layout = ()=>{
  return (<div className="layout">
    <Header/>
    <div className="container layout-wrapper">
      <SideBar/>
  <Outlet/>
    </div>
  </div>)
}