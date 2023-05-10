import React from 'react'
import './HomePage.css'
import NavBar from '../../components/NavBar/NavBar'

function HomePage(props) {
  return (
    <div className='pageBody'>
      <NavBar data={props.data} />
      HomePage
    </div>
  )
}

export default HomePage