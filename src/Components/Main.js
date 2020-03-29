import React from 'react'
import '../Styling/Main.css'
import Nav from './Nav'
import About from './About'

export default class Main extends React.Component{
    render() {
        return(
            <>
            <Nav />
            <About />
            </>
        )
    }
}