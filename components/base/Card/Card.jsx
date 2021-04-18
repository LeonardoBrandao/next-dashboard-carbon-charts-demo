import React from 'react'

import s from './card.module.scss'

function Card({ style, children }) {
  return (
    <div className={s.spacing} style={style}>
      <div className={s.card}>
        {children}
      </div>
    </div>
  )
}

export default Card
