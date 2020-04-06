import React from 'react'
import {NavLink} from 'react-router-dom'
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
                    <a className='buttons' href='https://www.linkedin.com/in/lillian-bitner/'>LinkedIn</a>
                    <a className='buttons' href='https://medium.com/@lbitner7699'>Blog</a>
                    <a className='buttons' href='https://github.com/lilbitner'>GitHub</a>
                </div>
            </div>
        )
    }
}