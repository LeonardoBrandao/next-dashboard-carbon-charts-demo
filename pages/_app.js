import '../styles/globals.scss'

import Sidebar from '../components/Sidebar/Sidebar'

function MyApp({ Component, pageProps }) {
  return (
    <div className="grid-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
