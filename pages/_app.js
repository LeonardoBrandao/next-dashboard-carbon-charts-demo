import '../styles/globals.scss'

import { Menu20, Close24 } from '@carbon/icons-react'
import Sidebar from '../components/Sidebar/Sidebar'

function MyApp({ Component, pageProps }) {
  const toggleMenu = () => {
    document.getElementById("sidebar").classList.toggle("open");
    document.getElementById("sidebar-wrapper").classList.toggle("open");
    document.getElementById("menu-open").classList.toggle("open");
  }

  return (
    <>
      <div id="menu-open">
        <button
          onClick={toggleMenu}>
          <Menu20 className="menu-icon" />
          <Close24 className="close-icon" />
        </button>
      </div>
      <div id="sidebar-wrapper">
        <Sidebar />
      </div>
      <div className="grid-container">
        <div className="sidebar-spacer"></div>
        <div className="content">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}

export default MyApp
