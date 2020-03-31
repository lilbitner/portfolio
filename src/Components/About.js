import React from 'react'
import '../Styling/About.css'
import Lilly from '../Images/Lillian.jpeg'

export default class About extends React.Component{
    render(){
        return(
            <>
            {/* <h1>Lillian Elizabeth Bitner</h1> */}
            <div className='aboutCard'> 
                {/* <img id='LillyImage' src={Lilly} alt="Lilly" />  */}
                    <div className='containerAbout'> 
                        <h3>A couple of things about me:</h3>
                        <li>Colorado Native</li>
                        <li>16-year competitive soccer player</li>
                        <li>Obsessive Hall n'Oats Fan</li>
                        <li>Passion for healthcare, nutrition, fitness, and the environment </li>
                    </div>
                    <img id='LillyImage' src={Lilly} alt="Lilly" /> 
            </div>
            </>
        )
    }
}