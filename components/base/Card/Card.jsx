import React from 'react'

import s from './card.module.scss'

function Card({ style, children }) {
  return (
    <div class={s.spacing} style={style}>
      <div class={s.card}>
        {children}
      </div>
    </div>
  )
}

export default Card
