import React from 'react'
import '../Styling/Main.css'
import Nav from './Nav'
import About from './About'
import Projects from './Projects'

export default class Main extends React.Component{
    render() {
        return(
            <>
            <Nav />
            <About />
            <Projects />
            </>
        )
    }
}