import React from 'react'

export default function Title(props) {
    document.title = "Healthy Food Odering - " + props.title
  return (
    <div className='w-100'>{props.children}</div>
  )
}
