import { Outlet } from "react-router-dom"
import { Navbar } from "../shared/navbar/Navbar"
import { Footer } from "../shared/footer/Footer"


export const Root = () => {
  return (
    <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
