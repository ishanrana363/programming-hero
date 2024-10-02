import { Outlet } from "react-router-dom"
import Footer from "../component/footer/Footer"
import Header from "../component/header/Header"


const Layout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Layout
