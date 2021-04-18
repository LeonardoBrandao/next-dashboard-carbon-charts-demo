import React from 'react'

import s from './flex.module.scss'
function Flex({ style, children }) {
  return (
    <div style={style} className={s["flex-div"]}>
      {children}
    </div>
  )
}

export default Flex
