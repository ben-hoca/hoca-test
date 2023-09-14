import "./assets/scss/main.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home, Jobs, Travels } from "./pages";
import { Layout } from "./components";



function App() {


  return (
    <>
    <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="jobs" element={<Jobs/>}/>
            <Route path="travels" element={<Travels/>}/>
          </Route>
    </Routes>

    </>
  )
}

export default App
