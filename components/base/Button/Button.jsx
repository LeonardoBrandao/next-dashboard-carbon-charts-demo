import React from 'react'

import s from './button.module.scss'
function Button({ style, type, onClick, children }) {
  return (
    <button style={style} onClick={onClick} class={`${s['base-button']} ${s[`base-button-${type ? type : 'default'}`]}`}>
      {children}
    </button>
  )
}

export default Button
