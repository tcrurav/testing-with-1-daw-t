import { useState } from "react"
import "./Header.css"

function Header() {
    const [isSideMenuVisible, setIsSideMenuVisible] = useState(false);

    const toggleSideMenu = () => {
        setIsSideMenuVisible(prev => !prev)
    }

    return (
        <>

            <div className="header-main">
                <div className="header-logo" onClick={toggleSideMenu}>
                    <img src="logo.png" alt="logo" />
                </div>
                {/* <div className="header-menu-options">
                <ul>
                    <li>Inicio</li>
                    <li>Menú</li>
                    <li>Reclamaciones</li>
                </ul>
            </div>
            <div className="header-hambuger">
                
            </div> */}
            </div>
            {
                isSideMenuVisible ?
                    <div className="header-side-menu">
                        <ul>
                            <li>Inicio</li>
                            <li>Menú</li>
                            <li>Reclamaciones</li>
                        </ul>
                    </div>
                    :
                    <></>
            }

        </>

    )
}

export default Header