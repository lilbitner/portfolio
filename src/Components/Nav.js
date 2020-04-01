import React from 'react'
import {Navlink} from 'react-router-dom'
import '../Styling/Nav.css'

export default class Nav extends React.Component {
    render(){
        return(
            <div className='Nav'>
                <div className='navTitles'> 
                    <h1>Lillian Bitner</h1>
                    <h3>Software Engineer</h3>
                </div>
                <div className='buttons'> 
                    <button className='linkButtons' ></button>
                </div>
            </div>
        )
    }
}