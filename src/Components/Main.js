import React from 'react'
import '../Styling/Main.css'
import Nav from './Nav'
import About from './About'
import Projects from './Projects'
import Accordion from './Accordion'
import Timeline from './Timeline'

export default class Main extends React.Component{
    render() {
        return(
            <>
    
            <Nav />
            <Accordion />
            <Timeline />
            {/* <About /> */}
            <Projects />
            {/* <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="lillian-bitner"><a class="LI-simple-link" href='https://www.linkedin.com/in/lillian-bitner?trk=profile-badge'>Lillian Bitner</a></div> */}
            </>
        )
    }
}