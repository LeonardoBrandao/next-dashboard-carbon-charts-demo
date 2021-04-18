import React from 'react'

import s from './title.module.scss'

function Title({style, children}) {
  return (
    <h1 className={s.title} style={style}>
      {children}
    </h1>
  )
}

export default Title
