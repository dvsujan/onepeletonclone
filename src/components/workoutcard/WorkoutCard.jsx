import React from 'react'
import './workoutcard.css'; 

const WorkoutCard = (props) => {
  return (
    <div className='workout-card'>
        <img src={props.image} alt='img0card'></img>
        <h2>{props.name}</h2>
        <a href="#">Preview {props.name.toLowerCase()} classes</a>
    </div>
  )
}

export default WorkoutCard