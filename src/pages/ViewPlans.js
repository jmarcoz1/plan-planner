import React from 'react'
import Plans from '../components/Plans'

const ViewPlans = (props) => {

  const planes = props.planes
  return (
    <Plans planes={planes}/>
  )
}

export default ViewPlans