import { useState } from "react";
import { Outlet } from "react-router-dom"
import SideBar from "./SideBar"
import TopBar from "./TopBar"
import './Layout.css'
const Layout = () => {
    const [show, setShow] = useState(false);
    return (
        <main className={show ? 'space-toggle' : null}>
            <TopBar show={show} setShow={setShow} />
            <SideBar show={show} setShow={setShow} />
            <div>
                <Outlet />
            </div>

        </main>
    )
}

export default Layout
