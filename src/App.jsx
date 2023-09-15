import "./assets/scss/main.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home, Jobs, Travels } from "./pages";
import { Layout } from "./components";
import LoginModal from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";




function App() {


  return (
    <>
    <Routes>
          {/* <Route path="/login" element={<LoginModal/>} /> */}
          <Route path="/signup" element={<RegisterPage/>} />
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
