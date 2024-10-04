import React, { useContext, useEffect } from 'react'
import './showroom.css'
import MapComponent from '../../components/mapcomponent/MapComponent'
import DataContext from '../../context/context'
import ShowroomLocations from '../../components/showroomlocations/ShowroomLocations'

const ShowroomPage = () => {
    // const data = useContext(DataContext); 
    // useEffect(() => {
    //     console.log(data);
    // }, [data]);
  return (
    <div className='showroom-page'>
        <div className='showroom-hero'>
            <div className='showroom-hero-text'>
                <h1>Find a Peloton store</h1>
                <p>isit a store to talk with our expert team members or book an appointment to experience Peloton firsthand.</p>
                <button>Book an Appointment</button>
            </div>
        </div>
        <MapComponent />
        <ShowroomLocations/> 
    </div>
  )
}

export default ShowroomPage