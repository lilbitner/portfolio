import React from 'react'
import {Navlink} from 'react-router-dom'

export default class Nav extends React.Component {
    render(){
        return(
            <div className='Nav'>
                <h1>Lillian Bitner's Portfolio</h1>
                <h2>About Lillian</h2>
                {/* <h3>Projects</h3>
                <h3>Blog Posts</h3>
                <h3>Other</h3> */}
            </div>
        )
    }
}