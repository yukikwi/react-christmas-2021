import React from 'react'

function Snow(props) {

  // set number of snows (if change must change $total in ../assets/css/snow.scss too)
  const n = 200
  let snowUi = []

  for(let i = 1; i < n; i++){
    snowUi.push(<div key={i} className='snow' />)
  }

  return (
    snowUi
  )
}

export default Snow
