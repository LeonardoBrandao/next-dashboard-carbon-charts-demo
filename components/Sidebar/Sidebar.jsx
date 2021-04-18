import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ChartArea20 } from '@carbon/icons-react'
import { ChartAverage20 } from '@carbon/icons-react'
import { ChartColumn20 } from '@carbon/icons-react'
import { ChartHistogram20 } from '@carbon/icons-react'
import { ChartScatter20 } from '@carbon/icons-react'

import s from './sidebar.module.scss'


function Sidebar() {
  const r = useRouter()

  return (
    <div className={s.sidebar}>
      <div className={s.logo}>
        <img src="logo.svg" alt="" />
      </div>
      <div className={s.links}>
        <ul>
          <li><Link href="/"><a className={r.route === '/' ? "nav-active" : ''}><div className={s.icon_wrapper}><ChartArea20 /></div>Area Charts</a></Link></li>
          <li><Link href="/line"><a className={r.route === '/line' ? "nav-active" : ''}><div className={s.icon_wrapper}><ChartAverage20 /></div>Line Charts</a></Link></li>
          <li><Link href="/bar"><a className={r.route === '/bar' ? "nav-active" : ''}><div className={s.icon_wrapper}><ChartColumn20 /></div>Bar Charts</a></Link></li>
          <li><Link href="/combined"><a className={r.route === '/combined' ? "nav-active" : ''}><div className={s.icon_wrapper}><ChartHistogram20 /></div>Combined Charts</a></Link></li>
          <li><Link href="/misc"><a className={r.route === '/misc' ? "nav-active" : ''}><div className={s.icon_wrapper}><ChartScatter20 /></div>Misc Charts</a></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
