import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'


export default function Display() {

    return(
        <header>
    <Header/>
    </header>,
    <main>
    <Home />
    <br></br>
    <br></br>
    <About />
    <br></br>
    <br></br>
    <Projects />
    </main>
   




   
     
    )
}

