import { style } from '@mui/system'
import React from 'react'
import NavBar from './NavBar'

const styles = {
  header: {
    marginLeft: '10px'
  },
  h1: {
    fontSize: '2em'
  }
}




export default function Header(){





    return(
      <header style={styles.header}>
        
      <h1 style={styles.h1}>Gregory Johnston</h1>
      
      <NavBar />
      </header>
    )
}


