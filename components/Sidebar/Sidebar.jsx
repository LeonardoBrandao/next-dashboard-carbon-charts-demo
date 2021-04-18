import React from 'react'
import { ChartArea20 } from '@carbon/icons-react'
import { ChartAverage24 } from '@carbon/icons-react'
import { ChartColumn20 } from '@carbon/icons-react'
import { ChartHistogram20 } from '@carbon/icons-react'
import { ChartScatter20 } from '@carbon/icons-react'

import s from './sidebar.module.scss'

function Sidebar() {
  return (
    <div className={s.sidebar}>
      <div className={s.logo}>
        <img src="logo.svg" alt="" />
      </div>
      <div className={s.links}>
        <ul>
          <li><a href="#"><ChartArea20 />test</a></li>
          <li><a href="#"><ChartAverage24 />test2</a></li>
          <li><a href="#"><ChartColumn20 />test3</a></li>
          <li><a href="#"><ChartHistogram20 />test4</a></li>
          <li><a href="#"><ChartScatter20 />test5</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
