import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/SideBar/Sidebar'
import styles from '../styles/Homepage.module.css'

function Homepage() {
  return (
    <div className= {styles.App}>
        <Navbar/>
      

        <Sidebar/>

    </div>
  )
}

export default Homepage