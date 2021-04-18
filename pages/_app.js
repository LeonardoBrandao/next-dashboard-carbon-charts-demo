import '../styles/globals.scss'

import Sidebar from '../components/Sidebar/Sidebar'

function MyApp({ Component, pageProps }) {
  return (
    <div class="grid-container">
      <div class="sidebar">
        <Sidebar />
      </div>
      <div class="content">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
